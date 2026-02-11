/**
 * HTML to React JSX Converter Script
 * Reads HTML files from public/ and generates React page components
 */
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

// Ensure directories exist
const dirs = [
    'src/pages', 'src/pages/industries', 'src/pages/services',
    'src/pages/products', 'src/pages/blog'
];
dirs.forEach(d => {
    const full = path.join(__dirname, d);
    if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
});

/**
 * Convert HTML attributes to JSX attributes
 */
function htmlToJsx(html) {
    let jsx = html;

    // class -> className
    jsx = jsx.replace(/\bclass="/g, 'className="');
    jsx = jsx.replace(/\bclass='/g, "className='");

    // for -> htmlFor
    jsx = jsx.replace(/\bfor="/g, 'htmlFor="');

    // Self-closing tags
    jsx = jsx.replace(/<(img|br|hr|input|meta|link|source)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

    // style strings to objects (basic inline styles)
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
        if (!styleStr.trim()) return 'style={{}}';
        const pairs = styleStr.split(';').filter(s => s.trim());
        const obj = pairs.map(pair => {
            const [prop, ...valParts] = pair.split(':');
            if (!prop || valParts.length === 0) return '';
            const cssProp = prop.trim();
            const val = valParts.join(':').trim();
            // Convert CSS property to camelCase
            const jsProp = cssProp.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
            // Check if value is a number (without units)
            if (/^\d+$/.test(val)) {
                return `${jsProp}: ${val}`;
            }
            return `${jsProp}: '${val.replace(/'/g, "\\'")}'`;
        }).filter(Boolean).join(', ');
        return `style={{${obj}}}`;
    });

    // SVG attributes
    jsx = jsx.replace(/\bstroke-width="/g, 'strokeWidth="');
    jsx = jsx.replace(/\bstroke-linecap="/g, 'strokeLinecap="');
    jsx = jsx.replace(/\bstroke-linejoin="/g, 'strokeLinejoin="');
    jsx = jsx.replace(/\bfill-rule="/g, 'fillRule="');
    jsx = jsx.replace(/\bclip-rule="/g, 'clipRule="');
    jsx = jsx.replace(/\bstroke-dasharray="/g, 'strokeDasharray="');
    jsx = jsx.replace(/\bstroke-dashoffset="/g, 'strokeDashoffset="');
    jsx = jsx.replace(/\bstop-color="/g, 'stopColor="');
    jsx = jsx.replace(/\bstop-opacity="/g, 'stopOpacity="');
    jsx = jsx.replace(/\bxlink:href="/g, 'xlinkHref="');
    jsx = jsx.replace(/\bxml:space="/g, 'xmlSpace="');
    jsx = jsx.replace(/\bviewbox="/gi, 'viewBox="');
    jsx = jsx.replace(/\btabindex="/g, 'tabIndex="');
    jsx = jsx.replace(/\bplaceholder="/g, 'placeholder="');
    jsx = jsx.replace(/\bcrossorigin/g, 'crossOrigin');
    jsx = jsx.replace(/\bautocomplete="/g, 'autoComplete="');
    jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
    jsx = jsx.replace(/\bmarker-end="/g, 'markerEnd="');
    jsx = jsx.replace(/\bfont-family="/g, 'fontFamily="');
    jsx = jsx.replace(/\bfont-size="/g, 'fontSize="');
    jsx = jsx.replace(/\btext-anchor="/g, 'textAnchor="');
    jsx = jsx.replace(/\bdominant-baseline="/g, 'dominantBaseline="');

    // Convert href="*.html" to proper React Router paths
    jsx = jsx.replace(/href="contact-us\.html"/g, 'href="/contact"');
    jsx = jsx.replace(/href="index\.html"/g, 'href="/"');
    jsx = jsx.replace(/href="([a-zA-Z0-9_-]+)\.html"/g, 'href="/$1"');

    // Fix HTML comments
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

    // Escape bare < characters in text content (not part of tags)
    // This matches < followed by a space and a digit (like "< 60")
    jsx = jsx.replace(/< (\d)/g, '&lt; $1');

    return jsx;
}

/**
 * Extract the main content between navbar and footer from an HTML file
 */
function extractMainContent(html) {
    // Find the <style> blocks
    let styles = '';
    const styleMatches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    if (styleMatches) {
        styles = styleMatches.map(s => s.replace(/<\/?style[^>]*>/gi, '')).join('\n');
    }

    // Find body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    if (!bodyMatch) return { content: '', styles: '' };

    let body = bodyMatch[1];

    // Remove <style> tags from body
    body = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

    // Remove script tags
    body = body.replace(/<script[\s\S]*?<\/script>/gi, '');

    // Remove ALL nav elements (the shared navbar)
    body = body.replace(/<nav[\s\S]*?<\/nav>/gi, '');

    // Remove ALL footer elements
    body = body.replace(/<footer[\s\S]*?<\/footer>/gi, '');

    return { content: body.trim(), styles: styles.trim() };
}

/**
 * Generate a React component from extracted content
 */
function generateComponent(name, content, styles, hasForm = false, navbarVariant = 'dark') {
    // Count depth: pages/About => 1 slash => '../', pages/industries/Banking => 2 slashes => '../../'
    const depth = name.split('/').length - 1; // 1 for pages/X, 2 for pages/sub/X
    const prefix = depth >= 2 ? '../../' : '../';
    const imports = [`import Navbar from '${prefix}components/Navbar';`, `import Footer from '${prefix}components/Footer';`];

    if (hasForm) {
        imports.push(`import { useRef } from 'react';`);
        imports.push(`import { submitToGoogleSheet } from '${prefix}utils/formSubmit';`);
    }

    // Check if there's a CSS file needed
    const cssImport = styles ? `import './${name.split('/').pop()}.css';` : '';

    let jsxContent = htmlToJsx(content);

    // Convert <a href="/..."> to <Link to="/..."> for internal links
    // But keep external links as <a>
    const needsLink = jsxContent.includes('href="/');
    if (needsLink) {
        imports.push(`import { Link } from 'react-router-dom';`);
        // Convert internal links to Link components
        jsxContent = jsxContent.replace(/<a\s+href="(\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (match, href, attrs, children) => {
            // Remove className from attrs for Link since we pass it differently  
            const cleanAttrs = attrs.replace(/\s*target="[^"]*"/g, '').replace(/\s*rel="[^"]*"/g, '');
            return `<Link to="${href}"${cleanAttrs}>${children}</Link>`;
        });
    }

    const componentName = name.split('/').pop();

    let component = `${imports.join('\n')}
${cssImport ? cssImport + '\n' : ''}
export default function ${componentName}() {
  return (
    <>
      <Navbar variant="${navbarVariant}" />
      ${jsxContent}
      <Footer />
    </>
  );
}
`;

    return component;
}

// Page definitions: [htmlFile, componentPath, componentName, navbarVariant]
const pages = [
    // Core
    ['about.html', 'pages/About', 'About', 'dark'],
    ['contact-us.html', 'pages/Contact', 'Contact', 'dark'],
    ['articles.html', 'pages/Articles', 'Articles', 'dark'],
    ['projects.html', 'pages/Projects', 'Projects', 'dark'],
    ['resource-detail.html', 'pages/ResourceDetail', 'ResourceDetail', 'dark'],

    // Industry
    ['banking.html', 'pages/industries/Banking', 'Banking', 'dark'],
    ['finance.html', 'pages/industries/Finance', 'Finance', 'dark'],
    ['insurance.html', 'pages/industries/Insurance', 'Insurance', 'dark'],
    ['automotive.html', 'pages/industries/Automotive', 'Automotive', 'dark'],

    // Services
    ['ai-automation-consulting.html', 'pages/services/AIAutomationConsulting', 'AIAutomationConsulting', 'dark'],
    ['opportunity-discovery.html', 'pages/services/OpportunityDiscovery', 'OpportunityDiscovery', 'dark'],
    ['implementation-services.html', 'pages/services/ImplementationServices', 'ImplementationServices', 'dark'],
    ['cybersecurity-compliance.html', 'pages/services/CybersecurityCompliance', 'CybersecurityCompliance', 'dark'],
    ['managed-delivery.html', 'pages/services/ManagedDelivery', 'ManagedDelivery', 'dark'],
    ['custom-ai-delivery.html', 'pages/services/CustomAIDelivery', 'CustomAIDelivery', 'dark'],
    ['enterprise-app-development.html', 'pages/services/EnterpriseAppDevelopment', 'EnterpriseAppDevelopment', 'dark'],

    // Products
    ['orchestrate.html', 'pages/products/Orchestrate', 'Orchestrate', 'dark'],
    ['dms.html', 'pages/products/DMS', 'DMS', 'dark'],
    ['ccqa.html', 'pages/products/CCQA', 'CCQA', 'dark'],

    // Blog
    ['blog-agentic-ai-use-cases.html', 'pages/blog/BlogAgenticAIUseCases', 'BlogAgenticAIUseCases', 'dark'],
    ['blog-what-is-agentic-ai.html', 'pages/blog/BlogWhatIsAgenticAI', 'BlogWhatIsAgenticAI', 'dark'],
    ['blog-rpa-vs-traditional.html', 'pages/blog/BlogRPAvsTraditional', 'BlogRPAvsTraditional', 'dark'],
    ['blog-implementing-rpa.html', 'pages/blog/BlogImplementingRPA', 'BlogImplementingRPA', 'dark'],
    ['blog-rpa-features.html', 'pages/blog/BlogRPAFeatures', 'BlogRPAFeatures', 'dark'],
    ['blog-rpa-ai-synergy.html', 'pages/blog/BlogRPAAISynergy', 'BlogRPAAISynergy', 'dark'],
    ['blog-rpa-use-cases-2025.html', 'pages/blog/BlogRPAUseCases2025', 'BlogRPAUseCases2025', 'dark'],
    ['blog-what-is-rpa.html', 'pages/blog/BlogWhatIsRPA', 'BlogWhatIsRPA', 'dark'],
    ['blog-digital-transformation-2025.html', 'pages/blog/BlogDigitalTransformation2025', 'BlogDigitalTransformation2025', 'dark'],
    ['blog-ai-business-solutions.html', 'pages/blog/BlogAIBusinessSolutions', 'BlogAIBusinessSolutions', 'dark'],
    ['blog-managed-services-cloud.html', 'pages/blog/BlogManagedServicesCloud', 'BlogManagedServicesCloud', 'dark'],
    ['blog-ai-analytics-cx.html', 'pages/blog/BlogAIAnalyticsCX', 'BlogAIAnalyticsCX', 'dark'],
    ['blog-implement-rpa-successfully.html', 'pages/blog/BlogImplementRPASuccessfully', 'BlogImplementRPASuccessfully', 'dark'],
    ['blog-choosing-tech-partner.html', 'pages/blog/BlogChoosingTechPartner', 'BlogChoosingTechPartner', 'dark'],
];

let converted = 0;
let failed = 0;

pages.forEach(([htmlFile, componentPath, componentName, navVariant]) => {
    const htmlPath = path.join(publicDir, htmlFile);

    if (!fs.existsSync(htmlPath)) {
        console.error(`SKIP: ${htmlFile} not found`);
        failed++;
        return;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');
    const { content, styles } = extractMainContent(html);

    if (!content) {
        console.error(`SKIP: ${htmlFile} - no content extracted`);
        failed++;
        return;
    }

    const hasForm = html.includes('<form');
    const component = generateComponent(componentPath, content, styles, hasForm, navVariant);

    // Write JSX file
    const jsxPath = path.join(srcDir, componentPath + '.jsx');
    const jsxDir = path.dirname(jsxPath);
    if (!fs.existsSync(jsxDir)) fs.mkdirSync(jsxDir, { recursive: true });
    fs.writeFileSync(jsxPath, component);

    // Write CSS file if there are inline styles
    if (styles) {
        const cssPath = path.join(srcDir, componentPath + '.css');
        fs.writeFileSync(cssPath, styles);
    }

    console.log(`OK: ${htmlFile} -> ${componentPath}.jsx${styles ? ' + .css' : ''}`);
    converted++;
});

console.log(`\nDone: ${converted} converted, ${failed} failed.`);
