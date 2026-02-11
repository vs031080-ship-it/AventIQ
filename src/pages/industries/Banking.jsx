import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SolutionsAccordion from '../../components/SolutionsAccordion';
import { Link } from 'react-router-dom';
import './Banking.css';

const bankingSolutions = [
    {
        title: 'Customer Onboarding Automation',
        description: 'Streamline the entire customer onboarding journey with intelligent document processing, automated KYC verification, and seamless data extraction. Reduce onboarding time by 70% while improving accuracy to 99%.',
        image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop',
    },
    {
        title: 'Loan Processing Enhancement',
        description: 'Accelerate loan approvals by 65% with automated document verification, credit scoring integration, and risk assessment. Achieve 95% document accuracy and reduce operational costs by 40%.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    },
    {
        title: 'Compliance & Regulatory Reporting',
        description: 'Achieve 100% reporting accuracy with automated compliance monitoring, real-time regulatory updates, and intelligent audit trail management. Reduce reporting time by 80%.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    },
    {
        title: 'Fraud Detection & Prevention',
        description: 'Deploy AI-powered fraud detection systems that analyze transaction patterns in real-time, identify anomalies, and prevent fraudulent activities before they impact your customers.',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop',
    },
];

export default function Banking() {
    return (
        <>
            <Navbar variant="light" />

            <section className="industry-hero">
                <div className="industry-hero-text">
                    <span className="section-label">Banking Industry</span>
                    <h1>Intelligent Automation for <span className="text-gradient">Modern Banking</span></h1>
                    <p>Banks are leveraging Agentic AI and RPA to enhance efficiency, reduce costs, and improve customer
                        experiences across every touchpoint.</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-white btn-arrow">Get Started</Link>
                        <Link to="/projects" className="btn btn-outline-white btn-arrow">View Case Studies</Link>
                    </div>
                </div>
                <div className="industry-hero-images">
                    <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=300&fit=crop"
                        alt="Banking technology" className="img-tall" />
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
                        alt="Financial services" />
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                        alt="Data analytics" />
                </div>
            </section>

            <section className="stats-banner">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>70%</h3>
                            <p>Faster Customer Onboarding</p>
                        </div>
                        <div className="stat-item">
                            <h3>99%</h3>
                            <p>Document Accuracy</p>
                        </div>
                        <div className="stat-item">
                            <h3>65%</h3>
                            <p>Faster Loan Processing</p>
                        </div>
                        <div className="stat-item">
                            <h3>40%</h3>
                            <p>Operational Cost Reduction</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Solutions</span>
                        <h2>What We Solve for Banks</h2>
                        <p>Comprehensive automation solutions tailored for the banking sector.</p>
                    </div>
                    <SolutionsAccordion items={bankingSolutions} defaultImage={bankingSolutions[0].image} />
                </div>
            </section>

            <section className="section feature-cards-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Capabilities</span>
                        <h2>Transforming Banking with Agentic AI & RPA</h2>
                        <p>Leverage intelligent automation to streamline operations and deliver exceptional customer
                            experiences.</p>
                    </div>
                    <div className="feature-cards-grid">
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <h3>Streamline Loan Processing</h3>
                            <p>Efficient application management and digital document capture. Automate credit scoring, document
                                verification, and approval workflows to reduce processing time by 65%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                            </div>
                            <h3>Optimize Wealth & Investment Services</h3>
                            <p>Automated portfolio tracking and detailed performance analytics. Enable personalized investment
                                recommendations and real-time market insights for your clients.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h3>Reinforce Compliance Measures</h3>
                            <p>Digital KYC verification and advanced AML processes. Ensure regulatory compliance with automated
                                monitoring, reporting, and audit trail management.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                                    <line x1="16" y1="8" x2="2" y2="22"></line>
                                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                                </svg>
                            </div>
                            <h3>Boost Customer Satisfaction</h3>
                            <p>Simplified account handling and targeted cross-selling. Deliver personalized experiences with
                                AI-powered service recommendations and 24/7 digital assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label" style={{ color: 'var(--color-mint)' }}>How It Works</span>
                        <h2>Banking RPA Automation Process</h2>
                        <p>A streamlined approach to transforming your banking operations with intelligent automation.</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="process-step-number">1</div>
                            <h4>Data Collection & Verification</h4>
                            <p>Automating the intake of customer information with intelligent document processing and
                                validation.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">2</div>
                            <h4>Transaction Processing</h4>
                            <p>Handling payments, reconciliations, and fund transfers with speed and accuracy.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">3</div>
                            <h4>Fraud Detection & Compliance</h4>
                            <p>Constant monitoring for regulatory adherence and suspicious activity patterns.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">4</div>
                            <h4>Customer Service Automation</h4>
                            <p>Managing inquiries, dispute resolution, and account updates seamlessly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-section">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop"
                    alt="Modern bank building" />
                <div className="overlay"></div>
                <div className="content">
                    <h2>"Digital transformation in banking isn't optional — it's how you survive."</h2>
                    <p>Join the leading banks that have transformed their operations with intelligent automation, achieving
                        faster service delivery and improved customer satisfaction.</p>
                    <Link to="/contact" className="btn btn-white btn-arrow">Start Your Transformation</Link>
                </div>
            </section>

            <section className="section outcomes-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Outcomes</span>
                        <h2>Results You Can Expect</h2>
                    </div>
                    <div className="outcome-cards">
                        <div className="outcome-card">
                            <div className="outcome-value">70%</div>
                            <h4>Faster Onboarding</h4>
                            <p>Reduce customer onboarding time from days to hours with automated document processing.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">99%</div>
                            <h4>Document Accuracy</h4>
                            <p>Eliminate manual errors with AI-powered data extraction and validation.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">65%</div>
                            <h4>Faster Loan Approvals</h4>
                            <p>Accelerate loan processing with automated underwriting and risk assessment.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">40%</div>
                            <h4>Cost Reduction</h4>
                            <p>Lower operational costs through process automation and resource optimization.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">100%</div>
                            <h4>Reporting Accuracy</h4>
                            <p>Achieve perfect compliance with automated regulatory reporting.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">80%</div>
                            <h4>Faster Reporting</h4>
                            <p>Reduce time spent on compliance reporting and audits.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Banking Operations?</h2>
                        <p>Let's discuss how intelligent automation can drive efficiency and customer satisfaction.</p>
                        <Link to="/contact" className="btn btn-white btn-arrow">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
