import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './CCQA.css';

export default function CCQA() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="ccqa-hero" id="hero">
        <div className="ccqa-hero-content">
            <div className="hero-badge">Contact Center Quality Assurance</div>
            <h1>AI-Powered Call Quality Made Simple</h1>
            <p>Intelligent analysis of call recordings to ensure compliance, agent empathy, and service excellence—all
                automated.</p>
            <div className="hero-buttons">
                <Link to="/contact" className="btn-white">Start Free Trial</Link>
                <a href="#features" className="btn-ghost-white">Explore Features</a>
            </div>
            <div className="waveform-container">
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
                <div className="wave-bar"></div>
            </div>
        </div>
    </section>

    
    <section className="metrics-section" id="metrics">
        <div className="container">
            <div className="section-head" style={{textAlign: 'center'}}>
                <span className="section-label" style={{color: '#a855f7'}}>Key Metrics</span>
                <h2 style={{color: 'white'}}>What We Analyze</h2>
                <p style={{color: '#94a3b8'}}>Comprehensive evaluation of every customer interaction</p>
            </div>
            <div className="metrics-cards">
                <div className="metric-card">
                    <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h3>Accuracy of Information</h3>
                    <p>Verify agents provide correct information to customers</p>
                </div>
                <div className="metric-card">
                    <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                    </div>
                    <h3>Process Adherence</h3>
                    <p>Ensure compliance with standard operating procedures</p>
                </div>
                <div className="metric-card">
                    <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                    </div>
                    <h3>Customer Satisfaction</h3>
                    <p>Measure customer sentiment and satisfaction levels</p>
                </div>
                <div className="metric-card">
                    <div className="metric-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <h3>Regulatory Compliance</h3>
                    <p>Track adherence to industry regulations</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="features-section" id="features">
        <div className="container">
            <div className="section-head" style={{textAlign: 'center'}}>
                <span className="section-label">Features</span>
                <h2>Powerful Analysis Tools</h2>
                <p>Everything you need to transform call quality</p>
            </div>
        </div>
        <div className="container" style={{maxWidth: '100%', padding: '0 40px'}}>
            <div className="features-scroll">
                <div className="feature-card-large">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                    </div>
                    <h3>Real-Time Call Analysis</h3>
                    <p>Get instant feedback on agent-customer interactions as they happen. Identify issues before they
                        escalate.</p>
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop"
                        alt="Real-time analysis" />
                </div>
                <div className="feature-card-large">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.72-7.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                            </path>
                        </svg>
                    </div>
                    <h3>Sentiment & Empathy Scoring</h3>
                    <p>AI evaluation of emotional tones and service quality. Understand how customers truly feel.</p>
                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=200&fit=crop"
                        alt="Sentiment scoring" />
                </div>
                <div className="feature-card-large">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <polyline points="9 11 12 14 22 4"></polyline>
                        </svg>
                    </div>
                    <h3>Automated Compliance</h3>
                    <p>Ensure adherence to regulatory and internal standards automatically. No manual audits needed.</p>
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop"
                        alt="Compliance" />
                </div>
                <div className="feature-card-large">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <polyline points="23 21 23 16 18 16"></polyline>
                            <path d="M16.59 21A6 6 0 0 1 21 16"></path>
                        </svg>
                    </div>
                    <h3>Agent Coaching</h3>
                    <p>Data-driven insights to improve agent performance. Personalized recommendations for each team
                        member.</p>
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=200&fit=crop"
                        alt="Agent coaching" />
                </div>
                <div className="feature-card-large">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                        </svg>
                    </div>
                    <h3>Analytics Dashboard</h3>
                    <p>Comprehensive reporting with trends, patterns, and actionable insights at your fingertips.</p>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                        alt="Analytics" />
                </div>
            </div>
        </div>
    </section>

    
    <section className="sentiment-section" id="sentiment">
        <div className="container">
            <div className="sentiment-grid">
                <div className="sentiment-content">
                    <span className="section-label" style={{color: '#a855f7'}}>AI Analysis</span>
                    <h2>Understand <span>Every Emotion</span></h2>
                    <p>Our advanced AI analyzes voice patterns, word choice, and conversation flow to provide
                        comprehensive sentiment analysis for every call.</p>
                    <div className="sentiment-features">
                        <div className="sentiment-feature">Detects frustration before escalation</div>
                        <div className="sentiment-feature">Measures agent empathy and tone</div>
                        <div className="sentiment-feature">Identifies upsell opportunities</div>
                        <div className="sentiment-feature">Tracks resolution satisfaction</div>
                    </div>
                </div>
                <div className="sentiment-visual">
                    <div className="call-card">
                        <div className="call-header">
                            <div className="call-info">
                                <div className="caller-avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="caller-details">
                                    <h4>Call #4521</h4>
                                    <p>Agent: Sarah M.</p>
                                </div>
                            </div>
                            <div className="call-duration">Duration: 8:42</div>
                        </div>
                        <div className="sentiment-meters">
                            <div className="meter">
                                <div className="meter-label">Empathy Score</div>
                                <div className="meter-bar">
                                    <div className="meter-fill high"></div>
                                </div>
                                <div className="meter-value">92%</div>
                            </div>
                            <div className="meter">
                                <div className="meter-label">Compliance</div>
                                <div className="meter-bar">
                                    <div className="meter-fill medium"></div>
                                </div>
                                <div className="meter-value">78%</div>
                            </div>
                            <div className="meter">
                                <div className="meter-label">Resolution</div>
                                <div className="meter-bar">
                                    <div className="meter-fill low"></div>
                                </div>
                                <div className="meter-value">65%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="compliance-section" id="compliance">
        <div className="container">
            <div className="section-head" style={{textAlign: 'center'}}>
                <span className="section-label">Compliance</span>
                <h2>Stay Compliant, Automatically</h2>
                <p>Never worry about regulatory audits again</p>
            </div>
            <div className="compliance-grid">
                <div className="compliance-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v1a7 7 0 0 1-14 0v-1"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    </div>
                    <h3>Call Recording Analysis</h3>
                    <p>Automatic review of 100% of calls for compliance violations and quality issues.</p>
                </div>
                <div className="compliance-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                    </div>
                    <h3>Script Adherence</h3>
                    <p>Track how well agents follow required scripts and disclosures.</p>
                </div>
                <div className="compliance-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                            stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                        </svg>
                    </div>
                    <h3>PCI-DSS Compliance</h3>
                    <p>Automatic detection of credit card information exposure.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="ccqa-cta" id="cta">
        <div className="container">
            <h2>Ready to Transform Call Quality?</h2>
            <p>Join leading contact centers who trust AventIQ CCQA for quality assurance.</p>
            <div className="hero-buttons">
                <Link to="/contact" className="btn-white">Start Free Trial</Link>
                <Link to="/contact" className="btn-ghost-white">Request Demo</Link>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
