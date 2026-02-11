import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function EnterpriseAppDevelopment() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <div className="container">
            <span className="section-label" style={{color: 'var(--color-mint)'}}>Services</span>
            <h1>Enterprise App Development</h1>
            <p>Full-stack development to build user-facing products that activate intelligent workflows. Modern
                applications
                for the AI age.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Benefits</span>
                <h2>Why You Need Enterprise App Development</h2>
                <p>AI and automation are only as powerful as the applications that deliver them to users.</p>
            </div>
            <div className="service-benefits">
                <div className="benefit-card">
                    <h4>User-Facing Products</h4>
                    <p>Build the web and mobile applications that put AI capabilities directly in the hands of your
                        users and employees.</p>
                </div>
                <div className="benefit-card">
                    <h4>Intelligent Workflows</h4>
                    <p>Applications that seamlessly integrate with your AI and automation infrastructure to deliver
                        intelligent experiences.</p>
                </div>
                <div className="benefit-card">
                    <h4>Enterprise-Grade</h4>
                    <p>Built for enterprise scale with security, performance, and reliability requirements baked in from
                        the start.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Why AventIQ</span>
                <h2>Why Enterprises Choose Us</h2>
            </div>
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                    </div>
                    <h3>Proven Track Record</h3>
                    <p>Years of experience building enterprise applications with modern architectures and best
                        practices.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                        </svg>
                    </div>
                    <h3>Tailored Solutions</h3>
                    <p>Custom applications designed for your specific workflows, users, and integration requirements.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>Client-Centric Focus</h3>
                    <p>User-centered design approach that ensures applications actually get adopted and deliver value.
                    </p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Capabilities</span>
                <h2>What We Build</h2>
            </div>
            <div className="feature-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                    </div>
                    <h3>Web Applications</h3>
                    <p>Modern, responsive web applications built with React, Angular, or Vue. PWA and SPA architectures.
                    </p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg>
                    </div>
                    <h3>Mobile Applications</h3>
                    <p>Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, or native
                        development.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                    </div>
                    <h3>API & Integrations</h3>
                    <p>RESTful APIs, GraphQL, microservices, and enterprise integrations with existing systems.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                    </div>
                    <h3>Data Platforms</h3>
                    <p>Data pipelines, analytics dashboards, and business intelligence applications.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                        </svg>
                    </div>
                    <h3>Cloud Platforms</h3>
                    <p>Cloud-native applications on AWS, Azure, or GCP with serverless and container architectures.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
                            </path>
                        </svg>
                    </div>
                    <h3>AI-Powered Apps</h3>
                    <p>Applications with embedded AI capabilities — chatbots, recommendations, intelligent document
                        processing.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">Technology</span>
                <h2>Our Technology Stack</h2>
            </div>
            <div className="specialties-grid" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
                <div className="specialty-card">
                    <h4>React</h4>
                </div>
                <div className="specialty-card">
                    <h4>Angular</h4>
                </div>
                <div className="specialty-card">
                    <h4>Node.js</h4>
                </div>
                <div className="specialty-card">
                    <h4>Python</h4>
                </div>
                <div className="specialty-card">
                    <h4>.NET</h4>
                </div>
                <div className="specialty-card">
                    <h4>AWS</h4>
                </div>
                <div className="specialty-card">
                    <h4>Azure</h4>
                </div>
                <div className="specialty-card">
                    <h4>GCP</h4>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Process</span>
                <h2>Our Development Approach</h2>
            </div>
            <div className="process-grid">
                <div className="process-card">
                    <div className="process-number">01</div>
                    <h4>Discovery & Design</h4>
                    <p>User research, UX design, and technical architecture aligned with your business objectives.</p>
                </div>
                <div className="process-card">
                    <div className="process-number">02</div>
                    <h4>Agile Development</h4>
                    <p>Iterative development with regular demos, feedback cycles, and continuous integration.</p>
                </div>
                <div className="process-card">
                    <div className="process-number">03</div>
                    <h4>Quality Assurance</h4>
                    <p>Comprehensive testing including unit, integration, performance, and security testing.</p>
                </div>
                <div className="process-card">
                    <div className="process-number">04</div>
                    <h4>Deployment & Support</h4>
                    <p>Production deployment, monitoring setup, and ongoing maintenance and enhancement.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="outcomes-list">
                <h3>Outcomes You Can Expect</h3>
                <div className="outcomes-grid">
                    <div className="outcome-item">Production-ready applications</div>
                    <div className="outcome-item">User-centered design</div>
                    <div className="outcome-item">Scalable architecture</div>
                    <div className="outcome-item">Enterprise security standards</div>
                    <div className="outcome-item">Comprehensive documentation</div>
                    <div className="outcome-item">Ongoing support options</div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section-lg cta-bg-image" style={{backgroundImage: 'url(\'images/handshake-cta.jpg\')'}}>
        <div className="container">
            <div className="cta-content-lg">
                <h2>Ready to Build Your Application?</h2>
                <p>Let's discuss how we can bring your product vision to life.</p>
                <div className="cta-buttons">
                    <Link to="/contact" className="btn btn-white">Start Your Project</Link>
                    <Link to="/articles" className="btn btn-outline-white">View Blog</Link>
                </div>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
