import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SolutionsAccordion from '../../components/SolutionsAccordion';
import { Link } from 'react-router-dom';
import './Insurance.css';

const insuranceSolutions = [
    {
        title: 'Policy Underwriting Automation',
        description: 'Reduce turnaround time by 60% and achieve 98% accuracy in premium calculations. Automate risk assessment, policy creation, and approval workflows.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    },
    {
        title: 'Claims Processing Acceleration',
        description: 'Decrease claims processing time by 70% and increase customer satisfaction by 25%. Automate claims intake, validation, and settlement processes.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    },
    {
        title: 'Regulatory Compliance & Auditing',
        description: 'Lower compliance exceptions by up to 85% and cut audit preparation efforts by 50%. Ensure continuous regulatory compliance with automated monitoring.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    },
    {
        title: 'Customer Service Automation',
        description: 'Deploy intelligent chatbots and virtual assistants to handle inquiries, policy updates, and claims status checks 24/7 with consistent quality.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    },
];

export default function Insurance() {
    return (
        <>
            <Navbar variant="light" />

            <section className="industry-hero">
                <div className="industry-hero-text">
                    <span className="section-label">Insurance Industry</span>
                    <h1>Automation Is the Future of <span className="text-gradient">Insurance Excellence</span></h1>
                    <p>Precision-driven automation to accelerate claims and streamline underwriting for better customer
                        experiences.</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-white btn-arrow">Get Started</Link>
                        <Link to="/projects" className="btn btn-outline-white btn-arrow">View Case Studies</Link>
                    </div>
                </div>
                <div className="industry-hero-images">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
                        alt="Insurance business" className="img-tall" />
                    <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=300&fit=crop"
                        alt="Document processing" />
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
                        alt="Claims processing" />
                </div>
            </section>

            <section className="stats-banner">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>60%</h3>
                            <p>Faster Underwriting</p>
                        </div>
                        <div className="stat-item">
                            <h3>98%</h3>
                            <p>Premium Accuracy</p>
                        </div>
                        <div className="stat-item">
                            <h3>70%</h3>
                            <p>Faster Claims</p>
                        </div>
                        <div className="stat-item">
                            <h3>25%</h3>
                            <p>Higher CSAT</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Solutions</span>
                        <h2>What We Solve for Insurance</h2>
                        <p>Comprehensive automation solutions for the insurance sector.</p>
                    </div>
                    <SolutionsAccordion items={insuranceSolutions} defaultImage={insuranceSolutions[0].image} />
                </div>
            </section>

            <section className="section feature-cards-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Capabilities</span>
                        <h2>Redefining Insurance with Agentic AI & RPA</h2>
                        <p>Speed and profitability across the entire policy lifecycle through intelligent automation.</p>
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
                            <h3>Streamline Policy Underwriting</h3>
                            <p>Automated data collection, risk assessment, and premium calculations. Achieve 98% accuracy in
                                premium calculations with instant, 24/7 customer quotes.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </div>
                            <h3>Accelerate Claims Processing</h3>
                            <p>End-to-end claim management from intake to settlement. Reduce claims processing time by 70% and
                                boost customer satisfaction by 25%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h3>Ensure Regulatory Compliance</h3>
                            <p>Real-time monitoring and automated audit trails. Lower compliance exceptions by 85% and cut audit
                                preparation efforts by 50%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path
                                        d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3L21.5 8M22 12.5a10 10 0 0 1-18.8 4.3l-0.7-1.8">
                                    </path>
                                </svg>
                            </div>
                            <h3>Optimize Customer Renewals</h3>
                            <p>AI-driven virtual assistants for communication and renewal reminders. Boost policy renewal rates
                                by 20% and improve customer retention by 15%.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label" style={{ color: 'var(--color-mint)' }}>How It Works</span>
                        <h2>Insurance RPA Automation Process</h2>
                        <p>A streamlined approach to transforming your insurance operations with intelligent automation.</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="process-step-number">1</div>
                            <h4>Policy Creation</h4>
                            <p>Automated customer data intake, risk assessment, and policy document generation.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">2</div>
                            <h4>Claims Intake</h4>
                            <p>Intelligent capture, validation, and routing of claim submissions.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">3</div>
                            <h4>Risk Assessment</h4>
                            <p>AI-powered evaluation and fraud detection for accurate claim decisions.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">4</div>
                            <h4>Customer Communication</h4>
                            <p>Automated status updates, approvals, and payment notifications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-section">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=600&fit=crop"
                    alt="Insurance office" />
                <div className="overlay"></div>
                <div className="content">
                    <h2>"Customer experience is the new battleground in insurance."</h2>
                    <p>Win with faster claims, smarter underwriting, and seamless service.</p>
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
                            <div className="outcome-value">60%</div>
                            <h4>Faster Underwriting</h4>
                            <p>Reduce policy turnaround time.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">98%</div>
                            <h4>Premium Accuracy</h4>
                            <p>Improve premium calculation precision.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">70%</div>
                            <h4>Faster Claims</h4>
                            <p>Accelerate claims processing.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">25%</div>
                            <h4>Higher CSAT</h4>
                            <p>Improve customer satisfaction scores.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">85%</div>
                            <h4>Fewer Exceptions</h4>
                            <p>Reduce compliance exceptions.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">50%</div>
                            <h4>Faster Audits</h4>
                            <p>Cut audit preparation time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Insurance Operations?</h2>
                        <p>Let's discuss how intelligent automation can improve claims and underwriting.</p>
                        <Link to="/contact" className="btn btn-white btn-arrow">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
