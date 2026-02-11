import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function ImplementationServices() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>Implementation Services</h1>
            <p>Whether it's a bot or a model — we bring your automation vision to life. AventIQ delivers turnkey AI and
                RPA
                solutions that are enterprise-ready, outcome-focused, and designed for long-term scalability.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Our Approach</span>
                <h2>Structured Delivery Methodology</h2>
                <p>From roadmap to rollout, we ensure rapid and reliable deployment of intelligent automation.</p>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Discovery & Architecture</h3>
                    <p>We start by assessing impact vs. feasibility to build a high-ROI roadmap. Our architects then
                        design automation blueprints that align with your enterprise architecture and compliance needs.
                    </p>
                    <ul className="feature-list-check">
                        <li>Use Case Prioritization for max ROI</li>
                        <li>Feasibility & Technical Assessment</li>
                        <li>Enterprise-grade Solution Architecture</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Discovery and Architecture" />
                </div>
            </div>

            
            <div className="feature-row reverse">
                <div className="feature-text">
                    <h3>Build, Test & Deploy</h3>
                    <p>Certified RPA developers and ML specialists co-develop assets — including bots, pipelines, and
                        models. We ensure every solution has the right controls, auditability, and rollout paths.</p>
                    <ul className="feature-list-check">
                        <li>Agile Development Sprints</li>
                        <li>Rigorous QA & UAT Cycles</li>
                        <li>Governance & Risk Control Layers</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Build and Deploy" />
                </div>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Hypercare & Transition</h3>
                    <p>Deployment isn’t the end. We provide post-launch support, detailed documentation, and stakeholder
                        training to ensure long-term adoption and performance.</p>
                    <ul className="feature-list-check">
                        <li>Proactive Monitoring & Support</li>
                        <li>Knowledge Transfer Workshops</li>
                        <li>Continuous Optimization</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Hypercare Support" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Engagement Models</span>
                <h2>How We Deliver</h2>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
                <div className="feature-card highlight-card">
                    <div className="tag-badge">Fixed</div>
                    <h3>End-to-End Delivery</h3>
                    <p className="duration">Fixed Scope / Bid</p>
                    <p>Complete project ownership from requirements to go-live.</p>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Collaborative</div>
                    <h3>Joint Delivery Pods</h3>
                    <p className="duration">Mixed Teams</p>
                    <p>Our talent co-working with yours for skill transfer.</p>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Flexible</div>
                    <h3>Use-Case Bundles</h3>
                    <p className="duration">Multi-Project</p>
                    <p>Execute multiple automations in parallel streams.</p>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Agile</div>
                    <h3>MVP-to-Scale</h3>
                    <p className="duration">Iterative</p>
                    <p>Start lean with a pilot, then expand based on success.</p>
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
                    <h4>4-8x Faster</h4>
                    <p>Accelerated deployment cycles using our prebuilt accelerators.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Production Ready</h4>
                    <p>Guaranteed stability via rigorous QA and compliance layers.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>150% Productivity</h4>
                    <p>Significant efficiency gains observed in live environments.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Max Impact</h4>
                    <p>Minimal internal effort required from your teams.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Zero Gaps</h4>
                    <p>Seamless integration between design, build, and run phases.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Scalable Core</h4>
                    <p>Foundations built to support hundreds of future bots.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to Start Implementation?</h2>
                <p>Turn your automation roadmap into reality with our turnkey delivery services.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white btn-arrow">Start Project</Link>
                    <Link to="/contact" className="btn btn-outline-white btn-arrow">View Case Studies</Link>
                </div>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
