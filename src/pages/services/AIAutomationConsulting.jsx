import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function AIAutomationConsulting() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>AI & Automation Consulting</h1>
            <p>Strategic guidance to help your enterprise build future-ready AI and automation roadmaps with measurable
                ROI.
                From GenAI playbooks to CoE governance.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Benefits</span>
                <h2>Why You Need Strategic Advisory</h2>
                <p>We deliver strategies backed by execution capability — not just slide decks.</p>
            </div>
            <div className="service-benefits">
                <div className="benefit-card">
                    <h4>🎯 Future-Ready Roadmaps</h4>
                    <p>Build comprehensive AI strategies that align with business objectives and scale with your growth.
                    </p>
                </div>
                <div className="benefit-card">
                    <h4>📊 Measurable ROI</h4>
                    <p>Every recommendation comes with distinct ROI projections and business case documentation.</p>
                </div>
                <div className="benefit-card">
                    <h4>🚀 Delivery-Backed Logic</h4>
                    <p>Unlike pure-play consultants, we know what it takes to ship. Our advice is grounded in
                        engineering reality.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Capabilities</span>
                <h2>Core Consulting Services</h2>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>AI & RPA Strategy Development</h3>
                    <p>We help you define <strong>where to play</strong> and <strong>how to win</strong>. Our strategic
                        roadmaps identify high-impact use cases across your value chain, prioritizing them by value,
                        feasibility, and risk.</p>
                    <ul className="feature-list-check">
                        <li>Use Case Discovery & Prioritization</li>
                        <li>Technology Stack Selection</li>
                        <li>Vendor Evaluation (Build vs. Buy)</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Strategy Board" />
                </div>
            </div>

            
            <div className="feature-row reverse">
                <div className="feature-text">
                    <h3>GenAI Playbooks & Governance</h3>
                    <p>Move beyond the hype with safe, scalable Generative AI adoption. We design governance
                        frameworks that ensure data privacy, security, and ethical use while unlocking productivity.</p>
                    <ul className="feature-list-check">
                        <li>LLM Selection & Fine-Tuning Strategy</li>
                        <li>Responsible AI Frameworks</li>
                        <li>Prompt Engineering Guidelines</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="GenAI Brain" />
                </div>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Automation CoE Enablement</h3>
                    <p>Scale your automation initiatives by establishing a robust Center of Excellence (CoE). We help
                        you define roles, standards, and operating models for self-sustaining growth.</p>
                    <ul className="feature-list-check">
                        <li>CoE Operating Model Design</li>
                        <li>Process Standardization</li>
                        <li>Citizen Developer Programs</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Team Collaboration" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Engagement</span>
                <h2>Flexible Engagement Models</h2>
                <p>Choose the right speed and depth for your organization.</p>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card">
                    <div className="tag-badge">Speed</div>
                    <h3>Strategy Sprint</h3>
                    <p className="duration">2-4 Weeks</p>
                    <p>Intensive engagement focused on rapid assessment. Perfect for validating a specific hypothesis or
                        auditing a stalled initiative.</p>
                    <ul className="feature-list-sm">
                        <li>Current State Assessment</li>
                        <li>Gap Analysis</li>
                        <li>Quick-Win Roadmap</li>
                    </ul>
                </div>
                <div className="feature-card highlight-card">
                    <div className="tag-badge">Depth</div>
                    <h3>Maturity Workshop</h3>
                    <p className="duration">4-8 Weeks</p>
                    <p>Structured deep-dive to assess your organization's automation maturity and build a
                        comprehensive 12-month transformation plan.</p>
                    <ul className="feature-list-sm">
                        <li>Deep Process Mining</li>
                        <li>Stakeholder Interviews</li>
                        <li>Detailed Business Case</li>
                    </ul>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Ongoing</div>
                    <h3>Embedded Advisory</h3>
                    <p className="duration">Retainer</p>
                    <p>Continuous partnership where our experts sit with your leadership team to guide execution and
                        ensure strategy realization.</p>
                    <ul className="feature-list-sm">
                        <li>Monthly Steering Committees</li>
                        <li>Vendor Management</li>
                        <li>Change Management Support</li>
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
                    <h4>Clear Roadmap</h4>
                    <p>A defined pipeline of use cases prioritised by value, ready for execution.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Quantified ROI</h4>
                    <p>Detailed financial models projecting savings and revenue impact.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Risk Mitigation</h4>
                    <p>Strategies to navigate data privacy, security, and compliant AI adoption.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Stakeholder Buy-in</h4>
                    <p>Business-ready documentation to secure budget and executive sponsorship.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Operational Clarity</h4>
                    <p>Defined roles, responsibilities, and governance for your automation teams.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Tech Alignment</h4>
                    <p>Recommendations that fit perfectly with your existing enterprise stack.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to define your AI future?</h2>
                <p>Book a discovery session with our lead strategists today.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white">Schedule Consultation</Link>
                    <Link to="/articles" className="btn btn-outline-white">View Blog</Link>
                </div>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
