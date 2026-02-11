import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../utils/formSubmit';

export default function Contact() {
    const formRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const submitBtn = formRef.current.querySelector('button[type="submit"]');
        submitToGoogleSheet(formData, submitBtn).then(success => {
            if (success) formRef.current.reset();
        });
    };

    return (
        <>
            <Navbar variant="dark" />

            {/* Page Header */}

            {/* Hero Section */}
            <section className="service-hero">
                <span className="section-label" style={{ color: 'var(--color-mint)' }}>Contact</span>
                <h1>Let's Talk</h1>
                <p>Ready to transform your business with AI and automation? We'd love to hear from you.</p>
            </section>

            {/* Contact Section */}
            <section className="contact-section section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form">
                            <h3>Send us a message</h3>
                            <p style={{ marginBottom: '32px' }}>Fill out the form below and one of our experts will get back to you
                                soon.</p>
                            <form ref={formRef} onSubmit={handleFormSubmit}>
                                <input type="hidden" name="source" value="Contact Us Page" />
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Work Email *</label>
                                    <input type="email" id="email" name="email" required placeholder="john@company.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company *</label>
                                    <input type="text" id="company" name="company" required placeholder="Your Company" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service of Interest</label>
                                    <select id="service" name="service">
                                        <option value="">Select a service</option>
                                        <option value="ai-consulting">AI & Automation Consulting</option>
                                        <option value="opportunity-discovery">Opportunity Discovery</option>
                                        <option value="managed-delivery">Managed Delivery</option>
                                        <option value="custom-ai">Custom AI Solutions</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" required
                                        placeholder="Tell us about your project or challenge..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-arrow" style={{ width: '100%' }}>Send
                                    Message</button>
                            </form>
                        </div>
                        <div className="contact-info">
                            <div className="contact-card">
                                <h4>🇮🇳 India Office</h4>
                                <p><strong>Address:</strong><br />
                                    B1/E13, Block E, Mohan Cooperative Industrial Estate,<br />
                                    New Delhi, 110044</p>
                                <p><strong>Phone:</strong> +91 11 4475 6172</p>
                                <p><strong>Email:</strong> contact@aventiq.ai</p>
                            </div>
                            <div className="contact-card">
                                <h4>🇺🇸 USA Office</h4>
                                <p><strong>Address:</strong><br />
                                    5900 Balcones Drive STE 100,<br />
                                    Austin, TX 78731</p>
                                <p><strong>Email:</strong> contact@aventiq.ai</p>
                            </div>

                            <div className="contact-card">
                                <h4>🔗 Connect With Us</h4>
                                <p>Follow us on social media for the latest updates, insights, and industry news.</p>
                                <div className="social-links" style={{ marginTop: '16px', justifyContent: 'flex-start' }}>
                                    <a href="https://www.linkedin.com/company/aventiq-ai/" className="social-link"
                                        style={{ background: 'var(--color-lavender)' }}>in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', height: '400px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9384792891584!2d77.26761297549746!3d28.540044476917556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c94aeca221%3A0xf6e7d82aefab76ae!2sMohan%20Co-operative%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110044!5e0!3m2!1sen!2sin!4v1706521234567!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}
