import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './DMS.css';

export default function DMS() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="dms-hero" id="hero">
        <div className="dms-hero-content">
            <div className="product-tag">Document Management System</div>
            <h1>Streamline Your Document Workflow with <span>AI Power</span></h1>
            <p>Digitize, organize, and manage your entire document lifecycle—from capture to retrieval—with
                intelligent
                automation.</p>
            <div className="dms-hero-buttons">
                <Link to="/contact" className="btn-blue">Start Free Trial</Link>
                <a href="#features" className="btn-outline-light">Explore Features</a>
            </div>
        </div>
        <div className="dms-hero-visual">
            <div className="floating-docs">
                <div className="doc-card">
                    <div className="doc-icon pdf">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                    </div>
                    <div className="doc-info">
                        <h4>Contract_2024.pdf</h4>
                        <p>Uploaded 2 mins ago</p>
                    </div>
                </div>
                <div className="doc-card">
                    <div className="doc-icon doc">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                    </div>
                    <div className="doc-info">
                        <h4>Proposal_Draft.docx</h4>
                        <p>Edited by John</p>
                    </div>
                </div>
                <div className="doc-card">
                    <div className="doc-icon xls">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 3h18v18H3z"></path>
                            <path d="M3 9h18"></path>
                            <path d="M3 15h18"></path>
                            <path d="M9 3v18"></path>
                            <path d="M15 3v18"></path>
                        </svg>
                    </div>
                    <div className="doc-info">
                        <h4>Financial_Report.xlsx</h4>
                        <p>3 collaborators</p>
                    </div>
                </div>
                <div className="doc-card">
                    <div className="doc-icon img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <div className="doc-info">
                        <h4>Design_Assets.zip</h4>
                        <p>12 files</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="steps-section" id="steps">
        <div className="container">
            <div className="section-head" style={{textAlign: 'center'}}>
                <span className="section-label">How It Works</span>
                <h2>Get Started in 3 Simple Steps</h2>
                <p>From signup to full productivity in minutes</p>
            </div>
            <div className="steps-grid">
                <div className="step-card">
                    <div className="step-number">1</div>
                    <div className="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <line x1="19" y1="8" x2="19" y2="14"></line>
                            <line x1="16" y1="11" x2="22" y2="11"></line>
                        </svg>
                    </div>
                    <h3>Sign Up</h3>
                    <p>Create your account in seconds. No credit card required to get started.</p>
                </div>
                <div className="step-card">
                    <div className="step-number">2</div>
                    <div className="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                    </div>
                    <h3>Upload & Organize</h3>
                    <p>Drag and drop your documents. Our AI automatically categorizes and tags them.</p>
                </div>
                <div className="step-card">
                    <div className="step-number">3</div>
                    <div className="step-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3>Collaborate</h3>
                    <p>Invite your team and start collaborating on documents in real-time.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="bento-section" id="features">
        <div className="container">
            <div className="section-head" style={{textAlign: 'center'}}>
                <span className="section-label" style={{color: '#60a5fa'}}>Features</span>
                <h2 style={{color: 'white'}}>Powerful Features for Modern Teams</h2>
            </div>
            <div className="bento-grid">
                <div className="bento-card large">
                    <div className="bento-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
                    <h3>Real-time Collaboration</h3>
                    <p>Multiple users can edit and review documents simultaneously. See changes as they happen with live
                        cursors and instant sync.</p>
                </div>
                <div className="bento-card">
                    <div className="bento-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <h3>Smart Search</h3>
                    <p>Find any document in seconds with AI-powered search across content, metadata, and tags.</p>
                </div>
                <div className="bento-card tall">
                    <div className="bento-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                    </div>
                    <h3>Usage Insights</h3>
                    <p>Track document access, modifications, and user activity with detailed analytics dashboards.</p>
                </div>
                <div className="bento-card">
                    <div className="bento-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 3v12"></path>
                            <circle cx="18" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M18 9a9 9 0 0 1-9 9"></path>
                        </svg>
                    </div>
                    <h3>Version Control</h3>
                    <p>Full document history with easy rollback capabilities.</p>
                </div>
                <div className="bento-card">
                    <div className="bento-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <h3>Role-Based Access</h3>
                    <p>Fine-grained permissions to control who sees what.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="search-section" id="search">
        <div className="container">
            <div className="search-demo">
                <div className="search-content">
                    <span className="section-label">Advanced Search</span>
                    <h2>Find Anything <span>Instantly</span></h2>
                    <p>Our powerful search engine understands context and delivers relevant results in milliseconds.
                        Filter by project, type, date, author, and more.</p>
                    <div className="search-filters">
                        <div className="filter-tag">By Project</div>
                        <div className="filter-tag">By Type</div>
                        <div className="filter-tag">By Date</div>
                        <div className="filter-tag">By Author</div>
                        <div className="filter-tag">By Tag</div>
                        <div className="filter-tag">By Status</div>
                    </div>
                </div>
                <div className="search-visual">
                    <div className="search-bar-demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" placeholder="Search documents..." readonly />
                    </div>
                    <div className="search-results">
                        <div className="search-result">
                            <div className="result-icon" style={{background: '#fee2e2'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z">
                                    </path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <line x1="10" y1="9" x2="8" y2="9"></line>
                                </svg>
                            </div>
                            <div className="result-text">
                                <h4>Q4 Financial Report.pdf</h4>
                                <p>Finance — Modified 2 days ago</p>
                            </div>
                        </div>
                        <div className="search-result">
                            <div className="result-icon" style={{background: '#dbeafe'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z">
                                    </path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                </svg>
                            </div>
                            <div className="result-text">
                                <h4>Marketing Strategy 2024.docx</h4>
                                <p>Marketing — 5 collaborators</p>
                            </div>
                        </div>
                        <div className="search-result">
                            <div className="result-icon" style={{background: '#dcfce7'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M3 3h18v18H3z"></path>
                                    <path d="M3 9h18"></path>
                                    <path d="M3 15h18"></path>
                                    <path d="M9 3v18"></path>
                                    <path d="M15 3v18"></path>
                                </svg>
                            </div>
                            <div className="result-text">
                                <h4>Sales Pipeline.xlsx</h4>
                                <p>Sales — Updated just now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="security-section" id="security">
        <div className="container">
            <span className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>Enterprise Security</span>
            <h2 style={{color: 'white', fontSize: '48px', marginTop: '16px'}}>Your Documents Are Safe With Us</h2>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '18px', maxWidth: '600px', margin: '0 auto'}}>Enterprise-grade
                security with encryption at rest and in transit, compliant with global standards.</p>

        </div>
    </section>

    
    <section className="dms-cta" id="cta">
        <div className="container">
            <h2>Ready to Transform Document Management?</h2>
            <p>Join thousands of teams who trust AventIQ DMS for their document workflows.</p>
            <div className="dms-hero-buttons" style={{justifyContent: 'center'}}>
                <Link to="/contact" className="btn-blue">Start Free Trial</Link>
                <Link to="/contact" className="btn-outline-light"
                    style={{borderColor: '#3b82f6', color: '#3b82f6'}}>Request Demo</Link>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
