import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function CybersecurityCompliance() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>Cybersecurity & Compliance</h1>
            <p>We don’t bolt security on—we embed it. Our cybersecurity leads work alongside product, AI, and automation
                teams to ensure guardrails are in place from day one. Unlike siloed security firms, our approach ensures
                your intelligent systems are compliant, secure, and built to scale.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Our Approach</span>
                <h2>Integrated Security Strategy</h2>
                <p>De-risk your transformation journey with proactive controls, secure architectures, and regulatory
                    alignment.</p>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Security Architecture & DevSecOps</h3>
                    <p>We harden infrastructure and CI/CD pipelines, establishing secure model deployment flows and
                        threat modeling specifically tailored for AI and automation workloads.</p>
                    <ul className="feature-list-check">
                        <li>Hardened Infrastructure & Pipelines</li>
                        <li>Secure Model Deployment Flows</li>
                        <li>AI-Specific Threat Modeling</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Security Architecture" />
                </div>
            </div>

            
            <div className="feature-row reverse">
                <div className="feature-text">
                    <h3>Regulatory Compliance Enablement</h3>
                    <p>We map your systems to ISO 27001, SOC2, GDPR, HIPAA, and industry-specific frameworks—handling
                        policy design, control implementation, and audit readiness throughout the lifecycle.</p>
                    <ul className="feature-list-check">
                        <li>SOC2 & ISO 27001 Readiness</li>
                        <li>GDPR & HIPAA Alignment</li>
                        <li>Policy Design & Implementation</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Compliance Enablement" />
                </div>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Vulnerability Management & Monitoring</h3>
                    <p>From pen testing to SIEM integration, we cover identity controls, endpoint protection, and
                        third-party risk governance. Our tailored response playbooks ensure real-time alerts and rapid
                        remediation.</p>
                    <ul className="feature-list-check">
                        <li>Pen Testing & Access Control</li>
                        <li>SIEM Integration & Alerts</li>
                        <li>Real-time Incident Response</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Security Monitoring" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Engagement Models</span>
                <h2>How We Engage</h2>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card highlight-card">
                    <div className="tag-badge">Integrated</div>
                    <h3>Embedded Security</h3>
                    <p className="duration">Project-Based</p>
                    <p>Security & compliance embedded directly into digital/AI delivery engagements.</p>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Audit</div>
                    <h3>Assessments</h3>
                    <p className="duration">One-Time</p>
                    <p>Stand-alone security assessments and comprehensive compliance gap audits.</p>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Ongoing</div>
                    <h3>Managed Governance</h3>
                    <p className="duration">As-a-Service</p>
                    <p>Continuous monitoring and governance oversight for long-term compliance.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-navy)', color: 'white'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label" style={{color: 'var(--color-mint)'}}>Results</span>
                <h2 style={{color: 'white'}}>Outcomes You Can Expect</h2>
            </div>
            <div className="outcomes-grid-dark">
                <div className="outcome-item-dark">
                    <h4>Audit-Ready</h4>
                    <p>Infrastructure prepped for rigorous external audits.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Reduced Risk</h4>
                    <p>Minimized exposure across AI and RPA deployment surfaces.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Fast Approvals</h4>
                    <p>Accelerated green-lighting from internal InfoSec teams.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Client Trust</h4>
                    <p>Enterprise-grade credibility that wins stakeholder confidence.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Data Privacy</h4>
                    <p>Robust safeguards for sensitive data and AI models.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Zero Trust</h4>
                    <p>Modern architecture principles applied to every layer.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to Secure Your Future?</h2>
                <p>Let's build a secure foundation for your AI and digital transformation.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white btn-arrow">Start Assessment</Link>
                    <Link to="/contact" className="btn btn-outline-white btn-arrow">View Certifications</Link>
                </div>
            </div>
        </div>
    </section>



    
      <Footer />
    </>
  );
}
