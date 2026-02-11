import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function Articles() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="service-hero">
        <span className="section-label" style={{color: 'var(--color-mint)'}}>Insights</span>
        <h1>Blog</h1>
        <p>Dive into our collection of engaging blog posts on AI, automation, and digital transformation.</p>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="case-studies-grid">
                
                <Link to="/blog-agentic-ai-use-cases" className="case-study-card">
                    <div className="case-study-image">
                        <img src="agentic-ai-use-cases.jpg" alt="Agentic AI Use Cases" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Agentic AI</span>
                        <h3>Revolutionizing Industries with Agentic AI: Key Use Cases</h3>
                        <p>Explore how autonomous AI agents are transforming manufacturing, healthcare, and finance.</p>
                    </div>
                </Link>

                
                <Link to="/blog-what-is-agentic-ai" className="case-study-card">
                    <div className="case-study-image">
                        <img src="agentic-ai-hand.jpg" alt="What is Agentic AI" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">AI Guides</span>
                        <h3>What Is Agentic AI? A Comprehensive Guide</h3>
                        <p>A deep dive into the definition and evolution of Agentic AI.</p>
                    </div>
                </Link>

                
                <Link to="/blog-rpa-vs-traditional" className="case-study-card">
                    <div className="case-study-image">
                        <img src="rpa-vs-traditional.jpg" alt="RPA vs Traditional" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Strategy</span>
                        <h3>RPA vs Traditional Automation: Business Benefits</h3>
                        <p>A strategic comparison between Robotic Process Automation (RPA) and API-based integration.
                        </p>
                    </div>
                </Link>

                
                <Link to="/blog-implementing-rpa" className="case-study-card">
                    <div className="case-study-image">
                        <img src="implementing-rpa.jpg" alt="Implementing RPA" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">RPA Guides</span>
                        <h3>Implementing RPA: Step-by-Step Guide for Your Businesses</h3>
                        <p>A comprehensive guide on the phases of RPA implementation: from discovery to scaling.</p>
                    </div>
                </Link>

                
                <Link to="/blog-rpa-features" className="case-study-card">
                    <div className="case-study-image">
                        <img src="rpa-features.jpg" alt="RPA Features" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Technology</span>
                        <h3>Key Features and Capabilities of RPA: What to Look For</h3>
                        <p>Discover essential RPA tool features like scalability, AI integration, and security.</p>
                    </div>
                </Link>

                
                <Link to="/blog-rpa-ai-synergy" className="case-study-card">
                    <div className="case-study-image">
                        <img src="rpa-ai-synergy.jpg" alt="RPA and AI" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Intelligent Automation</span>
                        <h3>RPA and AI: How Intelligent Automation is Transforming Businesses</h3>
                        <p>Explores the synergy between RPA and AI in predictive maintenance and personalization.</p>
                    </div>
                </Link>

                
                <Link to="/blog-rpa-use-cases-2025" className="case-study-card">
                    <div className="case-study-image">
                        <img src="rpa-use-cases-2025.jpg" alt="RPA Use Cases" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Use Cases</span>
                        <h3>Top 10 RPA Use Cases Across Industries in 2025</h3>
                        <p>Lists the most impactful applications of RPA, from Finance to Healthcare.</p>
                    </div>
                </Link>

                
                <Link to="/blog-what-is-rpa" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://loremflickr.com/800/600/computer,typing?lock=8" alt="What is RPA" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">RPA 101</span>
                        <h3>What is Robotic Process Automation (RPA)? A Comprehensive Guide</h3>
                        <p>An introductory guide defining RPA for enterprises and its benefits.</p>
                    </div>
                </Link>

                
                <Link to="/blog-digital-transformation-2025" className="case-study-card">
                    <div className="case-study-image">
                        <img src="digital-transformation-2025.jpg" alt="Digital Transformation" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Trends</span>
                        <h3>Top Digital Transformation Technologies for 2025 and Beyond</h3>
                        <p>Analyzes key drivers: Generative AI, Edge Computing, and Quantum-safe cybersecurity.</p>
                    </div>
                </Link>

                
                <Link to="/blog-ai-business-solutions" className="case-study-card">
                    <div className="case-study-image">
                        <img src="ai-business-solutions.jpg" alt="AI Solutions" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Case Studies</span>
                        <h3>AI-Powered Business Solutions: Real-World Applications</h3>
                        <p>Success stories where AI improved decision-making and revenue growth.</p>
                    </div>
                </Link>

                
                <Link to="/blog-managed-services-cloud" className="case-study-card">
                    <div className="case-study-image">
                        <img src="https://loremflickr.com/800/600/cloud,server?lock=11" alt="Managed Services" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Cloud</span>
                        <h3>The Role of Managed Services in Cloud Optimization and Security</h3>
                        <p>How MSPs help businesses optimize cloud costs and maintain security.</p>
                    </div>
                </Link>

                
                <Link to="/blog-ai-analytics-cx" className="case-study-card">
                    <div className="case-study-image">
                        <img src="ai-analytics-cx.jpg" alt="Customer Experience" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">CX</span>
                        <h3>How AI and Analytics Are Revolutionizing Customer Experience</h3>
                        <p>Using sentiment analysis and personalization to transform CX.</p>
                    </div>
                </Link>

                
                <Link to="/blog-implement-rpa-successfully" className="case-study-card">
                    <div className="case-study-image">
                        <img src="implement-rpa-successfully.jpg" alt="RPA Success" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Best Practices</span>
                        <h3>How to Implement RPA Successfully: Best Practices</h3>
                        <p>Common pitfalls and change management strategies for RPA projects.</p>
                    </div>
                </Link>

                
                <Link to="/blog-choosing-tech-partner" className="case-study-card">
                    <div className="case-study-image">
                        <img src="choosing-tech-partner.jpg" alt="Tech Partner" />
                    </div>
                    <div className="case-study-content">
                        <span className="case-study-label">Strategy</span>
                        <h3>A Step-by-Step Guide to Choosing the Right Technology Partner</h3>
                        <p>A framework for evaluating tech partners based on culture and expertise.</p>
                    </div>
                </Link>
            </div>
        </div>
    </section>

    
    <section className="cta-section">
        <div className="container">
            <div className="cta-content">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest insights delivered to your inbox.</p>
                <form className="newsletter-form" style={{maxWidth: '500px', margin: '0 auto'}}>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
