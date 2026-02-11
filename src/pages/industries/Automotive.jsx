import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SolutionsAccordion from '../../components/SolutionsAccordion';
import { Link } from 'react-router-dom';
import './Automotive.css';

const automotiveSolutions = [
    {
        title: 'Inventory Management Automation',
        description: 'Reduce inventory discrepancies by 85% and lower holding costs by 30%. Automate stock tracking, reorder management, and warehouse optimization.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    },
    {
        title: 'Quality Control Automation',
        description: 'Improve defect detection accuracy to 99% and reduce inspection time by 50%. Deploy AI-powered visual inspection and automated testing systems.',
        image: 'https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=600&h=400&fit=crop',
    },
    {
        title: 'Order Processing Automation',
        description: 'Streamline the automotive order entry-to-delivery lifecycle with automated bots. Reduce order processing time and improve accuracy.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    },
    {
        title: 'Supply Chain Optimization',
        description: 'Enhance supply chain visibility with real-time tracking, predictive analytics, and automated supplier management for just-in-time delivery.',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop',
    },
];

export default function Automotive() {
    return (
        <>
            <Navbar variant="light" />

            <section className="industry-hero">
                <div className="industry-hero-text">
                    <span className="section-label">Automotive Industry</span>
                    <h1>Empowering <span className="text-gradient">Automotive Excellence</span> with RPA & AI</h1>
                    <p>Optimize production lines, streamline supply-chain operations, and deliver seamless customer experiences.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-white btn-arrow">Get Started</Link>
                        <Link to="/projects" className="btn btn-outline-white btn-arrow">View Case Studies</Link>
                    </div>
                </div>
                <div className="industry-hero-images">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                        alt="Automotive manufacturing" className="img-tall" />
                    <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop"
                        alt="Car production" />
                    <img src="https://images.unsplash.com/photo-1560438718-eb61ede255eb?w=400&h=300&fit=crop"
                        alt="Quality control" />
                </div>
            </section>

            <section className="stats-banner">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>85%</h3>
                            <p>Fewer Inventory Errors</p>
                        </div>
                        <div className="stat-item">
                            <h3>30%</h3>
                            <p>Lower Holding Costs</p>
                        </div>
                        <div className="stat-item">
                            <h3>99%</h3>
                            <p>Defect Detection</p>
                        </div>
                        <div className="stat-item">
                            <h3>50%</h3>
                            <p>Faster Inspection</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Solutions</span>
                        <h2>What We Solve for Automotive</h2>
                        <p>Comprehensive automation solutions for the automotive sector.</p>
                    </div>
                    <SolutionsAccordion items={automotiveSolutions} defaultImage={automotiveSolutions[0].image} />
                </div>
            </section>

            <section className="section feature-cards-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Capabilities</span>
                        <h2>Revolutionizing Automotive with Agentic AI & RPA</h2>
                        <p>Precision, agility, and scalability from production line to after-sales support.</p>
                    </div>
                    <div className="feature-cards-grid">
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <path
                                        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z">
                                    </path>
                                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                                    <path d="M12 22V12"></path>
                                </svg>
                            </div>
                            <h3>Optimize Inventory Management</h3>
                            <p>Intelligent bots for tracking and replenishment. Reduce inventory discrepancies by 85% and
                                increase accuracy to 95% while lowering holding costs by 30%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <path d="M11 8v6"></path>
                                    <path d="M8 11h6"></path>
                                </svg>
                            </div>
                            <h3>Automate Quality Control</h3>
                            <p>AI-powered inspection systems with robotic precision. Improve defect detection accuracy to 99%
                                and reduce inspection time by 50%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </div>
                            <h3>Streamline Order Processing</h3>
                            <p>Digitize order entry through delivery tracking. Accelerate order processing times by 70% and
                                reduce manual processing errors by 90%.</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ color: 'white' }}>
                                    <rect x="1" y="3" width="15" height="13"></rect>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                </svg>
                            </div>
                            <h3>Enhance Supply Chain & Logistics</h3>
                            <p>Manage logistics scheduling and shipment tracking. Enhance on-time delivery by 30% and improve
                                shipment accuracy to 98%.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label" style={{ color: 'var(--color-mint)' }}>How It Works</span>
                        <h2>Automotive RPA Automation Process</h2>
                        <p>A streamlined approach to transforming your automotive operations with intelligent automation.</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="process-step-number">1</div>
                            <h4>Order Entry</h4>
                            <p>Automated capture and validation of orders from dealers and customers.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">2</div>
                            <h4>Inventory Check</h4>
                            <p>Real-time stock verification and automated replenishment triggers.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">3</div>
                            <h4>Quality Control</h4>
                            <p>AI-powered inspection and automated defect reporting.</p>
                        </div>
                        <div className="process-step">
                            <div className="process-step-number">4</div>
                            <h4>Delivery Tracking</h4>
                            <p>Automated logistics coordination and customer notification.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image-section">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&h=600&fit=crop"
                    alt="Manufacturing plant" />
                <div className="overlay"></div>
                <div className="content">
                    <h2>"The factory of the future runs on intelligence, not just engines."</h2>
                    <p>Transform your automotive operations with smart automation and AI.</p>
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
                            <div className="outcome-value">85%</div>
                            <h4>Fewer Errors</h4>
                            <p>Reduce inventory discrepancies.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">30%</div>
                            <h4>Lower Costs</h4>
                            <p>Reduce holding and storage costs.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">99%</div>
                            <h4>Detection Rate</h4>
                            <p>Improve defect detection accuracy.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">50%</div>
                            <h4>Faster QC</h4>
                            <p>Reduce inspection time.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">40%</div>
                            <h4>Faster Orders</h4>
                            <p>Accelerate order processing.</p>
                        </div>
                        <div className="outcome-card">
                            <div className="outcome-value">60%</div>
                            <h4>Better Visibility</h4>
                            <p>Improve supply chain transparency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Transform Your Automotive Operations?</h2>
                        <p>Let's discuss how intelligent automation can optimize your production and supply chain.</p>
                        <Link to="/contact" className="btn btn-white btn-arrow">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
