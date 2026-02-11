import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function CustomAIDelivery() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>Custom AI Solutions</h1>
            <p>Deliver high-performing, domain-specific AI models and applications that go beyond generic chatbots. From
                computer vision to predictive analytics, built on your data.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Benefits</span>
                <h2>Smarter AI, Faster Delivery</h2>
                <p>Building an AI team is hard. We provide the expertise you need, when you need it.</p>
            </div>
            <div className="service-benefits">
                <div className="benefit-card">
                    <h4>Ready-to-Deploy</h4>
                    <p>Skip months of hiring. Our pre-formed squads of AI engineers and data scientists are ready to
                        ship code from day one.</p>
                </div>
                <div className="benefit-card">
                    <h4>Custom-Trained Models</h4>
                    <p>We don't just wrap APIs. We fine-tune LLMs and train custom models on your proprietary data for
                        superior performance.</p>
                </div>
                <div className="benefit-card">
                    <h4>Outcome-Based</h4>
                    <p>We govern our delivery by business results?accuracy improvements, efficiency gains, and user
                        adoption? not just hours billed.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Capabilities</span>
                <h2>What We Build</h2>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Custom AI Solutions</h3>
                    <p>End-to-end delivery of bespoke AI applications tailored to unique business challenges. We handle
                        everything from data preparation to model deployment and UI integration.</p>
                    <ul className="feature-list-check">
                        <li>Fraud Prediction Frameworks</li>
                        <li>Personalization Engines</li>
                        <li>Demand Forecasting Models</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Coding AI" />
                </div>
            </div>

            
            <div className="feature-row reverse">
                <div className="feature-text">
                    <h3>On-Demand AI Talent Pods</h3>
                    <p>Scale your internal capabilities instantly with our battle-tested engineering squads. A fully
                        cross-functional team (Data Scientists, MLOps, Devs) working under your direction or ours.</p>
                    <ul className="feature-list-check">
                        <li>Cross-Functional Squads</li>
                        <li>AventIQ-Managed Oversight</li>
                        <li>Seamless Team Integration</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Team Pod" />
                </div>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Model Operations (LLMOps)</h3>
                    <p>AI doesn't end at deployment. We ensure your models stay performant, monitoring for drift, bias,
                        and latency ensuring enterprise-grade reliability.</p>
                    <ul className="feature-list-check">
                        <li>Drift Monitoring & Retraining</li>
                        <li>SLA-Based Maintenance</li>
                        <li>Secure API Management</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Monitoring Dashboard" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Engagement</span>
                <h2>AI Pod Configurations</h2>
                <p>Choose the right squad size for your initiative.</p>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card">
                    <div className="tag-badge">Pilot</div>
                    <h3>Starter Pod</h3>
                    <p className="duration">Proof of Concept</p>
                    <p>Small, agile team designed to validate a hypothesis or build an MVP within 8-12 weeks.</p>
                    <ul className="feature-list-sm">
                        <li>2 AI Engineers</li>
                        <li>1 Data Scientist</li>
                        <li>Tech Lead (Part-Time)</li>
                    </ul>
                </div>
                <div className="feature-card highlight-card">
                    <div className="tag-badge">Scale</div>
                    <h3>Accelerator Pod</h3>
                    <p className="duration">Production Delivery</p>
                    <p>Full-stack squad capable of delivering enterprise-grade AI applications from scratch to
                        production.
                    </p>
                    <ul className="feature-list-sm">
                        <li>4 AI/Backend Engineers</li>
                        <li>2 Data Scientists</li>
                        <li>1 MLOps Engineer</li>
                    </ul>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Enterprise</div>
                    <h3>Enterprise Pod</h3>
                    <p className="duration">Large Programs</p>
                    <p>Complete product engineering unit for large-scale transformation initiatives and multi-model
                        systems.</p>
                    <ul className="feature-list-sm">
                        <li>8+ Engineers & Scientists</li>
                        <li>Dedicated Solution Arch</li>
                        <li>Program Manager</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-navy)', color: 'white'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label" style={{color: 'var(--color-mint)'}}>Impact</span>
                <h2 style={{color: 'white'}}>Outcomes You Can Expect</h2>
            </div>
            <div className="outcomes-grid-dark">
                <div className="outcome-item-dark">
                    <h4>Production-Ready</h4>
                    <p>Robust codebases with 80%+ test coverage, ready for scale.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Rapid Time-to-Value</h4>
                    <p>MVPs delivered in weeks, not quarters, accelerating your innovation cycle.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>IP Ownership</h4>
                    <p>You own the models, the code, and the data. No vendor lock-in.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Scalable Arch</h4>
                    <p>Infrastructure designed to handle spike loads and growing datasets.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Knowledge Transfer</h4>
                    <p>We upskill your internal team as we build, leaving you stronger.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Business Impact</h4>
                    <p>Solutions measured by their effect on your P&L, not just accuracy scores.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to build smarter?</h2>
                <p>Deploy a custom AI pod today and start shipping.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white">Deploy AI Pod</Link>
                    <Link to="/articles" className="btn btn-outline-white">Read Our Blog</Link>
                </div>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
