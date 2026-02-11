import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function ManagedDelivery() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>Managed Delivery</h1>
            <p>Focus on outcomes while we handle the operations. SLA-backed support, governance, and optimization for
                your
                automation programs.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Benefits</span>
                <h2>Reliability as a Service</h2>
                <p>Building automations is just the beginning. We ensure they keep delivering value, day after day.</p>
            </div>
            <div className="service-benefits">
                <div className="benefit-card">
                    <h4>SLA-Backed Peace of Mind</h4>
                    <p>Guaranteed response times and uptime SLAs. We take financial accountability for the performance
                        of
                        your digital workforce.</p>
                </div>
                <div className="benefit-card">
                    <h4>Proactive Optimization</h4>
                    <p>We don't just fix breaks. We continuously tune your bots and models for speed, accuracy, and cost
                        efficiency.</p>
                </div>
                <div className="benefit-card">
                    <h4>Scale Without Overhead</h4>
                    <p>Expand your automation footprint without linearly increasing your support headcount. We handle
                        the
                        spikes.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Capabilities</span>
                <h2>Managed Services Spectrum</h2>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Delivery & Operations Oversight</h3>
                    <p>Comprehensive management of your daily automation operations. From scheduling and load balancing
                        to exception handling and restart procedures.</p>
                    <ul className="feature-list-check">
                        <li>24/7 Monitoring Center</li>
                        <li>Incident Management</li>
                        <li>Release Management</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Operations Center" />
                </div>
            </div>

            
            <div className="feature-row reverse">
                <div className="feature-text">
                    <h3>CoE Enablement & Governance</h3>
                    <p>We don't just run the bots; we help you govern the program. We maintain standards, security
                        policies, and compliance documentation.</p>
                    <ul className="feature-list-check">
                        <li>Code Quality Reviews</li>
                        <li>Security Compliance Audits</li>
                        <li>Vendor License Management</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Governance" />
                </div>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Performance Dashboards</h3>
                    <p>Real-time visibility into your digital workforce. Our custom dashboards track uptime, success
                        rates, commercial value realized, and ROI.</p>
                    <ul className="feature-list-check">
                        <li>Real-Time KPI Tracking</li>
                        <li>Executive ROI Reports</li>
                        <li>Operational Health Metrics</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Analytics Dashboard" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Engagement</span>
                <h2>Managed Service Tiers</h2>
                <p>Support levels matched to your mission-critical needs.</p>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card">
                    <div className="tag-badge">Basic</div>
                    <h3>Essential Pod</h3>
                    <p className="duration">Business Hours</p>
                    <p>Cost-effective support for non-critical automations. Covers monitoring, incident resolution, and
                        monthly reporting.</p>
                    <ul className="feature-list-sm">
                        <li>8x5 Support Coverage</li>
                        <li>4-Hour Response SLA</li>
                        <li>Up to 10 Processes</li>
                    </ul>
                </div>
                <div className="feature-card highlight-card">
                    <div className="tag-badge">Standard</div>
                    <h3>Growth Pod</h3>
                    <p className="duration">Extended Hours</p>
                    <p>Enhanced coverage for scaling programs requiring faster turnarounds and proactive optimization.
                    </p>
                    <ul className="feature-list-sm">
                        <li>16x5 Support Coverage</li>
                        <li>2-Hour Response SLA</li>
                        <li>Up to 50 Processes</li>
                    </ul>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Premium</div>
                    <h3>Enterprise Pod</h3>
                    <p className="duration">24/7 Global</p>
                    <p>Mission-critical support for global operations. Includes dedicated service delivery manager and
                        continuous improvement.</p>
                    <ul className="feature-list-sm">
                        <li>24/7/365 Coverage</li>
                        <li>1-Hour Response SLA</li>
                        <li>Unlimited Processes</li>
                    </ul>
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
                    <h4>99.9% Uptime</h4>
                    <p>High availability for your critical business automations.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Cost Predictability</h4>
                    <p>Fixed monthly pricing for support, ending budget surprises.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Operational Freedom</h4>
                    <p>Your team focuses on innovation, we handle the "keeping the lights on".</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Compliance Safety</h4>
                    <p>Rigorous adherence to your security and audit requirements.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Faster Recovery</h4>
                    <p>Structured incident management reduces mean-time-to-resolution (MTTR).</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Continuous Value</h4>
                    <p>Regular optimization ensures your ROI grows over time.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to secure your operations?</h2>
                <p>Transfer your risks to us. Managed excellence, guaranteed.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white">Discuss Managed Services</Link>
                    <Link to="/articles" className="btn btn-outline-white">Read Our Blog</Link>
                </div>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
