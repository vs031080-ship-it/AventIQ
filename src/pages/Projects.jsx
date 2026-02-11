import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <span className="section-label" style={{color: 'var(--color-mint)'}}>Works</span>
        <h1>Case Studies</h1>
        <p>See how we've helped enterprises across industries achieve transformative results with AI and automation.</p>
    </section>

    
    <section className="section" style={{paddingTop: 0}}>
        <div className="container">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>$3.4M+</h3>
                    <p>Total Client Savings</p>
                </div>
                <div className="stat-card">
                    <h3>62K+</h3>
                    <p>Hours Saved Annually</p>
                </div>
                <div className="stat-card">
                    <h3>150%</h3>
                    <p>Avg Efficiency Gain</p>
                </div>
                <div className="stat-card">
                    <h3>4+</h3>
                    <p>Industries Served</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="case-studies-grid">
                
                <a href="#" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=300&fit=crop"
                            alt="Agriculture technology" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Agriculture</span>
                        <h3>Transforming Agriculture with Digital Solutions</h3>
                        <p>How a major agritech company achieved 40% efficiency improvement in inventory management
                            through intelligent automation.</p>
                        <div className="case-study-stats">
                            <div className="case-study-stat">
                                <h4>$150K+</h4>
                                <span>Savings annually</span>
                            </div>
                            <div className="case-study-stat">
                                <h4>40%</h4>
                                <span>Improvement</span>
                            </div>
                        </div>
                    </div>
                </a>

                
                <a href="#" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop"
                            alt="Financial compliance" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Financial Services</span>
                        <h3>Automating Regulatory Compliance Monitoring</h3>
                        <p>How AventIQ Transformed Manual Regulatory Monitoring Into an Intelligent, Real-Time
                            Compliance Engine for a fintech leader.</p>
                        <div className="case-study-stats">
                            <div className="case-study-stat">
                                <h4>2,000+</h4>
                                <span>URLs Monitored</span>
                            </div>
                            <div className="case-study-stat">
                                <h4>30+</h4>
                                <span>FTEs Reallocated</span>
                            </div>
                        </div>
                    </div>
                </a>

                
                <a href="#" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
                            alt="Manufacturing" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Manufacturing</span>
                        <h3>Streamlining Content Operations for Global Manufacturing</h3>
                        <p>How AventIQ Automated Multi-Language Content Generation for 50,000+ Products, Improving Speed
                            and Consistency.</p>
                        <div className="case-study-stats">
                            <div className="case-study-stat">
                                <h4>50K+</h4>
                                <span>SKUs Automated</span>
                            </div>
                            <div className="case-study-stat">
                                <h4>70%</h4>
                                <span>Effort Reduction</span>
                            </div>
                        </div>
                    </div>
                </a>

                
                <a href="#" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&h=300&fit=crop"
                            alt="Customer service" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Media & Entertainment</span>
                        <h3>Revolutionizing Quality Assurance in Customer Service</h3>
                        <p>How AventIQ Helped an OTT Platform Achieve 100% Customer Interaction Auditing Using GenAI.
                        </p>
                        <div className="case-study-stats">
                            <div className="case-study-stat">
                                <h4>100%</h4>
                                <span>Audit Coverage</span>
                            </div>
                            <div className="case-study-stat">
                                <h4>80%</h4>
                                <span>QA Effort Reduction</span>
                            </div>
                        </div>
                    </div>
                </a>

                
                <a href="#" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=300&fit=crop"
                            alt="Insurance processing" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Insurance</span>
                        <h3>Intelligent Claims Processing Automation</h3>
                        <p>How we helped a leading insurer automate claims processing, reducing turnaround time and
                            improving accuracy.</p>
                        <div className="case-study-stats">
                            <div className="case-study-stat">
                                <h4>60%</h4>
                                <span>Faster Processing</span>
                            </div>
                            <div className="case-study-stat">
                                <h4>95%</h4>
                                <span>Accuracy Rate</span>
                            </div>
                        </div>
                    </div>
                </a>

                
                <a href="#" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop"
                            alt="Retail automation" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Retail</span>
                        <h3>E-commerce Order Processing Automation</h3>
                        <p>End-to-end automation of order processing, inventory management, and customer notification
                            workflows.</p>
                        <div className="case-study-stats">
                            <div className="case-study-stat">
                                <h4>$200K+</h4>
                                <span>Annual Savings</span>
                            </div>
                            <div className="case-study-stat">
                                <h4>90%</h4>
                                <span>Automation Rate</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    
    <section className="cta-section">
        <div className="container">
            <div className="cta-content">
                <h2>Ready to Write Your Success Story?</h2>
                <p>Let's discuss how we can help transform your operations.</p>
                <Link to="/contact" className="btn btn-white btn-arrow">Start Your Journey</Link>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
