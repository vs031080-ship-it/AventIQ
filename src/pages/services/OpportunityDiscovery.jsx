import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function OpportunityDiscovery() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>Opportunity Discovery</h1>
            <p>Systematic identification of high-impact automation opportunities. We bridge the gap between business
                processes and technical feasibility using data-driven insights.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Benefits</span>
                <h2>Find the Right Opportunities First</h2>
                <p>Don't automate for the sake of it. We help you find the signals in the noise.</p>
            </div>
            <div className="service-benefits">
                <div className="benefit-card">
                    <h4>🔍 Process Intelligence</h4>
                    <p>We use process mining and analytics to validate insights with data, not just interviews. Get
                        objective visibility into how work actually flows.</p>
                </div>
                <div className="benefit-card">
                    <h4>📊 Data-Driven Visibility</h4>
                    <p>See the reality of your operations through data — identify bottlenecks, variations, and
                        inefficiencies that often go unnoticed.</p>
                </div>
                <div className="benefit-card">
                    <h4>💰 Quantified Savings</h4>
                    <p>Every opportunity comes with quantified savings projections based on actual process data,
                        limiting
                        investment risk.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Capabilities</span>
                <h2>Discovery methodology</h2>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Process Discovery & Mapping</h3>
                    <p>We identify high-friction workflows through deeper user interviews and shadowing, mapped against
                        industry best practices to spot immediate improvement areas.</p>
                    <ul className="feature-list-check">
                        <li>Workflow Shadowing</li>
                        <li>Stakeholder Interviews</li>
                        <li>Pain Point Documentation</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Process Mapping" />
                </div>
            </div>

            
            <div className="feature-row reverse">
                <div className="feature-text">
                    <h3>Process & Task Mining</h3>
                    <p>We deploy advanced mining tools to extract insights directly from system logs and user
                        interactions, creating a digital twin of your operations.</p>
                    <ul className="feature-list-check">
                        <li>Log Analysis</li>
                        <li>Variant Analysis</li>
                        <li>Bottleneck Identification</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Data Analytics" />
                </div>
            </div>

            
            <div className="feature-row">
                <div className="feature-text">
                    <h3>Opportunity Assessment Scorecard</h3>
                    <p>We score every potential automation leveraging a proprietary framework that balances complexity,
                        volume, and strategic value to prioritize your roadmap.</p>
                    <ul className="feature-list-check">
                        <li>Feasibility Scoring</li>
                        <li>Complexity vs. Value Matrix</li>
                        <li>Technology Fitment</li>
                    </ul>
                </div>
                <div className="feature-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=600"
                        alt="Scoring Matrix" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Engagement</span>
                <h2>Engagement Models</h2>
                <p>Flexible ways to start your discovery journey.</p>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card">
                    <div className="tag-badge">Rapid</div>
                    <h3>Discovery Sprint</h3>
                    <p className="duration">2-6 Weeks</p>
                    <p>Targeted investigation of a specific business function (e.g., Finance, HR) to build an immediate
                        pipeline of use cases.</p>
                    <ul className="feature-list-sm">
                        <li>Functional Deep Dive</li>
                        <li>Initial Backlog</li>
                        <li>ROI Estimates</li>
                    </ul>
                </div>
                <div className="feature-card highlight-card">
                    <div className="tag-badge">Holistic</div>
                    <h3>End-to-End Program</h3>
                    <p className="duration">8-12 Weeks</p>
                    <p>Comprehensive enterprise-wide assessment to build a long-term automation strategy and center of
                        excellence foundation.</p>
                    <ul className="feature-list-sm">
                        <li>Cross-Functional Analysis</li>
                        <li>Multi-Year Roadmap</li>
                        <li>Governance Structure</li>
                    </ul>
                </div>
                <div className="feature-card">
                    <div className="tag-badge">Continuous</div>
                    <h3>Process Intelligence</h3>
                    <p className="duration">Subscription</p>
                    <p>Embedded mining tools that provide real-time visibility into process performance and continuously
                        flag new opportunities.</p>
                    <ul className="feature-list-sm">
                        <li>Continuous Monitoring</li>
                        <li>Real-Time Alerts</li>
                        <li>Optimization Insights</li>
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
                    <h4>Process Inventory</h4>
                    <p>Complete catalog of processes documenting current state and pain points.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Automation Scorecard</h4>
                    <p>Objective scoring of suitability, complexity, and ROI potential.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Prioritized Backlog</h4>
                    <p>Ranked list of opportunities with recommended implementation sequence.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Quick Wins</h4>
                    <p>Identification of immediate value drivers executable in &lt; 60 days.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Business Case</h4>
                    <p>Stakeholder-ready documentation to secure funding.</p>
                </div>
                <div className="outcome-item-dark">
                    <h4>Optimization Plan</h4>
                    <p>Recommendations to simplify processes before automating them.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>150%+</h3>
                    <p>Efficiency Gain</p>
                    <span className="stat-description">Average improvement in process cycle times.</span>
                </div>
                <div className="stat-card">
                    <h3>$12M+</h3>
                    <p>Savings Found</p>
                    <span className="stat-description">Total value identified for clients to date.</span>
                </div>
                <div className="stat-card">
                    <h3>50+</h3>
                    <p>Opportunities</p>
                    <span className="stat-description">Average pipeline size generated per engagement.</span>
                </div>
                <div className="stat-card">
                    <h3>30</h3>
                    <p>Days Average</p>
                    <span className="stat-description">Time to identifying your first Quick Win.</span>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to uncover hidden value?</h2>
                <p>Start your discovery journey and stop guessing where to automate.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white">Start Discovery</Link>
                    <Link to="/projects" className="btn btn-outline-white">View Success Stories</Link>
                </div>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
