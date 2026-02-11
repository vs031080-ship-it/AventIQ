import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SolutionsAccordion from '../../components/SolutionsAccordion';
import { Link } from 'react-router-dom';
import './Finance.css';

const financeSolutions = [
    {
        title: 'Transaction Processing Automation',
        description: 'Process up to 10x more transactions per hour with 90% error reduction. Automate payment processing, reconciliation, and settlement workflows.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    },
    {
        title: 'Invoice & Payables Management',
        description: 'Cut processing time by 70% and achieve 98% match-rate accuracy. Automate invoice capture, validation, and approval workflows.',
        image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop',
    },
    {
        title: 'Financial Close & Consolidation',
        description: 'Shorten the month-end close cycle by 50% and automate 95% of routine journal postings. Streamline financial reporting and consolidation.',
        image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&h=400&fit=crop',
    },
    {
        title: 'Risk Management & Analytics',
        description: 'Deploy AI-powered risk assessment and predictive analytics. Monitor market conditions, assess credit risk, and optimize investment strategies.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
];

export default function Finance() {
    return (
        <>
            <Navbar variant="light" />

            <section className="industry-hero">
                <div className="industry-hero-text">
                    <span className="section-label">Finance Industry</span>
                    <h1>Revolutionize Finance with <span className="text-gradient">Intelligent RPA & AI</span></h1>
                    <p>Optimize reconciliation, reduce operational costs, and strengthen risk management with cutting-edge
                        automation solutions.</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-white btn-arrow">Get Started</Link>
                        <Link to="/projects" className="btn btn-outline-white btn-arrow">View Case Studies</Link>
                    </div>
                </div>
                <div className="industry-hero-images">
                    <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
                        alt="Financial trading" className="img-tall" />
                    <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop"
                        alt="Stock market" />
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                        alt="Financial analytics" />
                </div>
            </section>

            <section className="stats-banner">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>10x</h3>
                            <p>More Transactions/Hour</p>
                        </div>
                        <div className="stat-item">
                            <h3>90%</h3>
                            <p>Error Reduction</p>
                        </div>
                        <div className="stat-item">
                            <h3>70%</h3>
                            <p>Faster Processing</p>
                        </div>
                        <div className="stat-item">
                            <h3>50%</h3>
                            <p>Shorter Close Cycle</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Solutions</span>
                        <h2>What We Solve for Finance</h2>
                        <p>Comprehensive automation solutions for financial operations.</p>
                    </div>
                    <SolutionsAccordion items={financeSolutions} defaultImage={financeSolutions[0].image} />
                </div>
            </section>

            <section className="section feature-cards-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Capabilities</span>
                        <h2>Transforming Finance with Agentic AI & RPA</h2>
                        <p>Leverage intelligent automation to optimize financial workflows and drive strategic insights.</p>
                    </div>
                    <div className="feature-cards-grid">
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <polyline points="23 4 23 10 17 10"></polyline>
                                    <polyline points="1 20 1 14 7 14"></polyline>
                                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                                </svg>
                            </div>
                            <h3>Streamline Transaction Processing</h3>
                            <p>End-to-end automation from payment initiation to settlement. Handle high volumes with precision
                                and achieve straight-through processing rates of 85%.</p>
                        </div>
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
                            <h3>Automate Invoice & Payables</h3>
                            <p>Intelligent invoice capture, PO matching, and payment scheduling. Cut processing time by 70%
                                while achieving 98% match-rate accuracy.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <h3>Accelerate Financial Close</h3>
                            <p>Month-end and quarter-end close optimization. Automate 95% of routine journal postings and
                                shorten close cycles by 50%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                    <path d="M9 14l2 2 4-4"></path>
                                </svg>
                            </div>
                            <h3>Regulatory Reporting Automation</h3>
                            <p>Bots gather, validate, and compile data for filings. Generate 100% of mandatory reports
                                automatically with 80% less manual rework.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label" style={{ color: 'var(--color-mint)' }}>How It Works</span>
                        <h2>Finance RPA Automation Process</h2>
                        <p>A streamlined approach to transforming your financial operations with intelligent automation.</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="process-step-number">1</div>
                            <h4>Transaction Initiation</h4>
                            <p>Automated capture and validation of payment requests and transaction data.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">2</div>
                            <h4>Invoice Processing</h4>
                            <p>Intelligent extraction, matching, and approval workflow automation.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">3</div>
                            <h4>Financial Close</h4>
                            <p>Automated reconciliation, journal entries, and consolidation tasks.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">4</div>
                            <h4>Report Generation</h4>
                            <p>Automated compilation and submission of regulatory and management reports.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-section">
                <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1600&h=600&fit=crop"
                    alt="Financial district" />
                <div className="overlay"></div>
                <div className="content">
                    <h2>"Speed and accuracy define modern finance — automation delivers both."</h2>
                    <p>Transform your financial operations with intelligent automation that scales.</p>
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
                            <div className="outcome-value">10x</div>
                            <h4>Transaction Volume</h4>
                            <p>Process more transactions per hour.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">90%</div>
                            <h4>Error Reduction</h4>
                            <p>Minimize manual processing errors.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">70%</div>
                            <h4>Faster Processing</h4>
                            <p>Accelerate invoice and payment cycles.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">98%</div>
                            <h4>Match Accuracy</h4>
                            <p>Improve invoice matching rates.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">50%</div>
                            <h4>Faster Close</h4>
                            <p>Shorten month-end close cycles.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">95%</div>
                            <h4>Automation Rate</h4>
                            <p>Automate routine journal postings.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Finance Operations?</h2>
                        <p>Let's discuss how intelligent automation can optimize your financial processes.</p>
                        <Link to="/contact" className="btn btn-white btn-arrow">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
