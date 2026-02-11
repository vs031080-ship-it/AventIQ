import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import ResourceDetail from './pages/ResourceDetail';

// Industry Pages
import Banking from './pages/industries/Banking';
import Finance from './pages/industries/Finance';
import Insurance from './pages/industries/Insurance';
import Automotive from './pages/industries/Automotive';

// Service Pages
import AIAutomationConsulting from './pages/services/AIAutomationConsulting';
import OpportunityDiscovery from './pages/services/OpportunityDiscovery';
import ImplementationServices from './pages/services/ImplementationServices';
import CybersecurityCompliance from './pages/services/CybersecurityCompliance';
import ManagedDelivery from './pages/services/ManagedDelivery';
import CustomAIDelivery from './pages/services/CustomAIDelivery';
import EnterpriseAppDevelopment from './pages/services/EnterpriseAppDevelopment';

// Product Pages
import Orchestrate from './pages/products/Orchestrate';
import DMS from './pages/products/DMS';
import CCQA from './pages/products/CCQA';

// Blog Pages
import BlogAgenticAIUseCases from './pages/blog/BlogAgenticAIUseCases';
import BlogWhatIsAgenticAI from './pages/blog/BlogWhatIsAgenticAI';
import BlogRPAvsTraditional from './pages/blog/BlogRPAvsTraditional';
import BlogImplementingRPA from './pages/blog/BlogImplementingRPA';
import BlogRPAFeatures from './pages/blog/BlogRPAFeatures';
import BlogRPAAISynergy from './pages/blog/BlogRPAAISynergy';
import BlogRPAUseCases2025 from './pages/blog/BlogRPAUseCases2025';
import BlogWhatIsRPA from './pages/blog/BlogWhatIsRPA';
import BlogDigitalTransformation2025 from './pages/blog/BlogDigitalTransformation2025';
import BlogAIBusinessSolutions from './pages/blog/BlogAIBusinessSolutions';
import BlogManagedServicesCloud from './pages/blog/BlogManagedServicesCloud';
import BlogAIAnalyticsCX from './pages/blog/BlogAIAnalyticsCX';
import BlogImplementRPASuccessfully from './pages/blog/BlogImplementRPASuccessfully';
import BlogChoosingTechPartner from './pages/blog/BlogChoosingTechPartner';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resource-detail" element={<ResourceDetail />} />

        {/* Industries */}
        <Route path="/banking" element={<Banking />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/automotive" element={<Automotive />} />

        {/* Services */}
        <Route path="/ai-automation-consulting" element={<AIAutomationConsulting />} />
        <Route path="/opportunity-discovery" element={<OpportunityDiscovery />} />
        <Route path="/implementation-services" element={<ImplementationServices />} />
        <Route path="/cybersecurity-compliance" element={<CybersecurityCompliance />} />
        <Route path="/managed-delivery" element={<ManagedDelivery />} />
        <Route path="/custom-ai-delivery" element={<CustomAIDelivery />} />
        <Route path="/enterprise-app-development" element={<EnterpriseAppDevelopment />} />

        {/* Products */}
        <Route path="/orchestrate" element={<Orchestrate />} />
        <Route path="/dms" element={<DMS />} />
        <Route path="/ccqa" element={<CCQA />} />

        {/* Blog */}
        <Route path="/blog-agentic-ai-use-cases" element={<BlogAgenticAIUseCases />} />
        <Route path="/blog-what-is-agentic-ai" element={<BlogWhatIsAgenticAI />} />
        <Route path="/blog-rpa-vs-traditional" element={<BlogRPAvsTraditional />} />
        <Route path="/blog-implementing-rpa" element={<BlogImplementingRPA />} />
        <Route path="/blog-rpa-features" element={<BlogRPAFeatures />} />
        <Route path="/blog-rpa-ai-synergy" element={<BlogRPAAISynergy />} />
        <Route path="/blog-rpa-use-cases-2025" element={<BlogRPAUseCases2025 />} />
        <Route path="/blog-what-is-rpa" element={<BlogWhatIsRPA />} />
        <Route path="/blog-digital-transformation-2025" element={<BlogDigitalTransformation2025 />} />
        <Route path="/blog-ai-business-solutions" element={<BlogAIBusinessSolutions />} />
        <Route path="/blog-managed-services-cloud" element={<BlogManagedServicesCloud />} />
        <Route path="/blog-ai-analytics-cx" element={<BlogAIAnalyticsCX />} />
        <Route path="/blog-implement-rpa-successfully" element={<BlogImplementRPASuccessfully />} />
        <Route path="/blog-choosing-tech-partner" element={<BlogChoosingTechPartner />} />
      </Routes>
    </>
  );
}

export default App;
