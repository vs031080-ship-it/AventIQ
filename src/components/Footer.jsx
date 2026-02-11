import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../utils/formSubmit';

export default function Footer({ showNewsletter = true }) {
    const formRef = useRef(null);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const submitBtn = formRef.current.querySelector('button[type="submit"]');
        submitToGoogleSheet(formData, submitBtn).then(success => {
            if (success) formRef.current.reset();
        });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <img src="/AventIQBG.png" alt="AventIQ" />
                        <p>Transformative digital solutions through AI, RPA, and digital engineering for enterprises worldwide.</p>
                        {showNewsletter && (
                            <form className="newsletter-form" ref={formRef} onSubmit={handleNewsletterSubmit}>
                                <input type="email" name="email" placeholder="Enter your email" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        )}
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/articles">Blog</Link>
                            <Link to="/projects">Case Studies</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <div className="footer-links">
                            <Link to="/ai-automation-consulting">AI &amp; Automation Consulting</Link>
                            <Link to="/opportunity-discovery">Opportunity Discovery</Link>
                            <Link to="/implementation-services">Implementation Services</Link>
                            <Link to="/cybersecurity-compliance">Cybersecurity &amp; Compliance</Link>
                            <Link to="/managed-delivery">Managed Delivery</Link>
                            <Link to="/custom-ai-delivery">Custom AI Solutions</Link>
                            <Link to="/enterprise-app-development">Enterprise App Development</Link>
                        </div>
                    </div>

                    {/* Industries */}
                    <div className="footer-col">
                        <h4>Industries</h4>
                        <div className="footer-links">
                            <Link to="/banking">Banking</Link>
                            <Link to="/finance">Finance</Link>
                            <Link to="/insurance">Insurance</Link>
                            <Link to="/automotive">Automotive</Link>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="footer-col">
                        <h4>Products</h4>
                        <div className="footer-links">
                            <Link to="/orchestrate">AventIQ Orchestrate</Link>
                            <Link to="/dms">Document Management</Link>
                            <Link to="/ccqa">Contact Center QA</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div className="footer-links">
                            <p><strong>India:</strong> B1/E13, Mohan Co-op Industrial Estate, New Delhi, 110044</p>
                            <p><strong>USA:</strong> 5900 Balcones Dr STE 100, Austin, TX 78731</p>
                            <p>+91 11 4475 6172</p>
                            <p>contact@aventiq.ai</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 AventIQ. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/company/aventiq-ai/" className="social-link" target="_blank" rel="noopener noreferrer">in</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
