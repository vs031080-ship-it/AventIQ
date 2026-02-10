const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname);
const sourceFile = path.join(publicDir, 'index.html');

function getFileContent(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function writeFileContent(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
}

function extractNav(content) {
    const match = content.match(/(<!-- Navbar -->[\s\S]*?<\/nav>)/);
    return match ? match[1] : null;
}

function extractFooter(content) {
    const match = content.match(/(<!-- Footer -->[\s\S]*?<\/footer>)/);
    return match ? match[1] : null;
}

function main() {
    console.log(`Reading source: ${sourceFile}`);
    const sourceContent = getFileContent(sourceFile);

    const navHtml = extractNav(sourceContent);
    const footerHtml = extractFooter(sourceContent);

    if (!navHtml) {
        console.error("Error: Could not extract Navbar from index.html");
        return;
    }
    if (!footerHtml) {
        console.error("Error: Could not extract Footer from index.html");
        return;
    }

    console.log("Navbar and Footer extracted successfully.");

    fs.readdirSync(publicDir).forEach(file => {
        if (path.extname(file) === '.html' && file !== 'index.html') {
            const filePath = path.join(publicDir, file);
            console.log(`Processing ${file}...`);

            let content = getFileContent(filePath);
            let newContent = content;

            // Replace Navbar
            newContent = newContent.replace(/(?:<!-- Navbar -->\s*)?<nav[\s\S]*?<\/nav>/, navHtml);

            // Replace Footer
            newContent = newContent.replace(/(?:<!-- Footer -->\s*)?<footer[\s\S]*?<\/footer>/, footerHtml);

            if (newContent !== content) {
                writeFileContent(filePath, newContent);
                console.log(`  Updated ${file}`);
            } else {
                console.log(`  No changes needed for ${file}`);
            }
        }
    });
}

main();
