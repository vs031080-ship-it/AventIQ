import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeatureTabs from '../../components/FeatureTabs';
import { Link } from 'react-router-dom';
import './Orchestrate.css';

const orchestrateTabs = [
    {
        id: 'dashboard',
        title: 'Process Dashboard',
        subtitle: 'Full visibility into operations',
        description: 'Get full visibility into your bots, processes, issues, and returns. Monitor everything from a single pane of glass.',
        features: ['Bot health monitoring', 'Process status tracking', 'Exception handling', 'Performance analytics', 'Real-time alerts', 'Custom dashboards'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
        ),
    },
    {
        id: 'ideaboard',
        title: 'Idea Board',
        subtitle: 'Centralized automation ideas',
        description: 'Centralize your automation ideas and roadmap planning. Capture, prioritize, and execute automation opportunities.',
        features: ['Idea submission portal', 'Priority scoring', 'Feasibility assessment', 'Pipeline management', 'Collaboration tools', 'Progress tracking'],
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.1.7.9 1.2 1.7 1.5 2.5"></path>
                <line x1="9" y1="18" x2="15" y2="18"></line>
                <line x1="10" y1="22" x2="14" y2="22"></line>
            </svg>
        ),
    },
    {
        id: 'roi',
        title: 'ROI Tracking',
        subtitle: 'Real-time value insights',
        description: 'Get real-time insights into time saved, costs avoided, and business value delivered by your automation program.',
        features: ['Hours saved tracking', 'Cost avoidance metrics', 'FTE savings calculator', 'Value realization reports', 'Executive dashboards', 'Trend analysis'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        ),
    },
    {
        id: 'change',
        title: 'Change Control',
        subtitle: 'Seamless update management',
        description: 'Seamlessly manage automation updates, maintenance, and version control across your entire bot portfolio.',
        features: ['Version management', 'Change requests', 'Approval workflows', 'Deployment tracking', 'Rollback capability', 'Audit trail'],
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        ),
    },
];

export default function Orchestrate() {
    return (
        <>
            <Navbar variant="light" />

            <section className="product-hero" id="hero">
                <div className="product-badge">Trusted by 100+ Customers</div>
                <h1>Orchestrate Your Automation Journey with <span>Precision</span></h1>
                <p>Centralize, Monitor, and Optimize Your RPA Operations Seamlessly with a single platform.</p>
                <div className="hero-buttons">
                    <Link to="/contact" className="btn-orange">Get Started</Link>
                    <a href="#features" className="btn-ghost">See Features</a>
                </div>
                <div className="product-mockup">
                    <div className="mockup-container">
                        <div className="mockup-header">
                            <div className="mockup-dot red"></div>
                            <div className="mockup-dot yellow"></div>
                            <div className="mockup-dot green"></div>
                        </div>
                        <div className="mockup-content">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                                alt="Orchestrate Dashboard" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="metrics-section" id="metrics">
                <div className="container">
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <div className="metric-value">52</div>
                            <div className="metric-label">Total Ideas</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">47</div>
                            <div className="metric-label">Total Processes</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">106K+</div>
                            <div className="metric-label">Transactions</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">26K+</div>
                            <div className="metric-label">Hours Saved</div>
                        </div>
                        <div className="metric-card">
                            <div className="metric-value">13.6</div>
                            <div className="metric-label">FTE Saved</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-tabs" id="features">
                <div className="container">
                    <div className="section-head" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="section-label">Features</span>
                        <h2>Everything You Need to Automate</h2>
                        <p>A comprehensive suite of tools for RPA success</p>
                    </div>
                    <FeatureTabs tabs={orchestrateTabs} />
                </div>
            </section>

            <section className="integrations-section" id="integrations">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Integrations</span>
                        <h2>Works With Your Favorite Tools</h2>
                        <p>Seamlessly integrate with leading RPA platforms</p>
                    </div>
                    <div className="integrations-logos">
                        <div className="integration-logo">
                            <div className="logo-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <span>UiPath</span>
                        </div>
                        <div className="integration-logo">
                            <div className="logo-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 8v4"></path>
                                    <path d="M12 16h.01"></path>
                                </svg>
                            </div>
                            <span>Automation Anywhere</span>
                        </div>
                        <div className="integration-logo">
                            <div className="logo-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <span>Power Automate</span>
                        </div>
                        <div className="integration-logo">
                            <div className="logo-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <span>Blue Prism</span>
                        </div>
                        <div className="integration-logo">
                            <div className="logo-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                                    stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 3h18v18H3z"></path>
                                    <path d="M12 8v8"></path>
                                    <path d="M8 12h8"></path>
                                </svg>
                            </div>
                            <span>SAP</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="comparison-section" id="comparison">
                <div className="container">
                    <div className="section-head" style={{ textAlign: 'center' }}>
                        <span className="section-label" style={{ color: '#f97316' }}>Why Orchestrate</span>
                        <h2 style={{ color: 'white' }}>Orchestrate vs. Manual Operations</h2>
                        <p style={{ color: '#94a3b8' }}>See the difference automation monitoring makes</p>
                    </div>
                    <div className="comparison-grid">
                        <div className="comparison-card">
                            <h3>Manual Excel Ops</h3>
                            <div className="comparison-list">
                                <div className="comparison-item cross">Scattered data across spreadsheets</div>
                                <div className="comparison-item cross">Manual status updates</div>
                                <div className="comparison-item cross">No real-time visibility</div>
                                <div className="comparison-item cross">Difficult to track ROI</div>
                                <div className="comparison-item cross">Version control issues</div>
                                <div className="comparison-item cross">Time-consuming reporting</div>
                            </div>
                        </div>
                        <div className="comparison-card highlight">
                            <h3>AventIQ Orchestrate</h3>
                            <div className="comparison-list">
                                <div className="comparison-item check">Centralized single source of truth</div>
                                <div className="comparison-item check">Automated real-time monitoring</div>
                                <div className="comparison-item check">Complete process visibility</div>
                                <div className="comparison-item check">Automatic ROI calculation</div>
                                <div className="comparison-item check">Built-in version control</div>
                                <div className="comparison-item check">One-click executive reports</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-cta" id="cta">
                <div className="container">
                    <h2>Ready to Orchestrate Your Automation?</h2>
                    <p>Join 100+ enterprises already transforming their RPA operations with AventIQ Orchestrate.</p>
                    <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                        <Link to="/contact" className="btn-orange">Request a Demo</Link>
                        <Link to="/contact" className="btn-ghost">Contact Sales</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
