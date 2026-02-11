import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitToGoogleSheet } from '../utils/formSubmit';

const testimonials = [
    { name: 'Barry Bermudez', title: 'Chief Technology Officer', text: "AventIQ's digital engineering services were instrumental in modernizing our legacy systems. They developed a secure, scalable platform that enhanced our service delivery and customer satisfaction. Their attention to detail and innovative approach exceeded our expectations." },
    { name: 'Nikunj Kacha', title: 'Director Of Sales', text: "Collaborating with AventIQ has significantly enhanced our sales operations. Their digital engineering solutions streamlined our processes, leading to a 25% increase in efficiency. The team's expertise and dedication were evident throughout the project." },
    { name: 'Hari Naganathan', title: 'Senior Director, Digital Transformation', text: "AventIQ's customer experience solutions have been transformative for our digital initiatives. Their AI-powered insights and omnichannel strategies have enriched our customer interactions, resulting in a notable increase in engagement and satisfaction. Their commitment to excellence is truly commendable" },
    { name: 'Michael', title: 'Director of Guest Services', text: "The feedback tools and loyalty program AventIQ developed for us have been a game-changer. Their data-driven approach helped us identify pain points, optimize our offerings, and create a rewards system that has increased repeat bookings by 25%. They truly understand what it takes to build meaningful customer relationships." },
    { name: 'Rolando Sotelo', title: 'IT Manager', text: "Partnering with AventIQ for our digital transformation was a pivotal decision. Their expertise in process automation and data integration streamlined our operations, resulting in a 35% increase in efficiency. The team's professionalism and commitment to our success were evident throughout the project." },
    { name: 'Joseph', title: 'Director of Operations', text: "Partnering with AventIQ was a game-changer for our operations. Their expertise in process automation and data analytics helped us save over 43,000 hours annually while improving operational accuracy. The tailored solutions they provided have made us more agile and competitive in the market." },
    { name: 'Hudson', title: 'VP of Customer Experience', text: "AventIQ's digital transformation services allowed us to deliver a highly personalized shopping experience to our customers. From implementing AI-driven recommendations to optimizing our inventory with predictive analytics, their solutions boosted our sales by 25% and enhanced customer loyalty." },
    { name: 'James Jones', title: 'Head of IT Infrastructure', text: "The team at AventIQ seamlessly migrated our legacy systems to the cloud while ensuring zero downtime. Their attention to detail, from process automation to robust data security, helped us reduce operational costs by 30% and improve compliance with industry regulations. We couldn't have asked for a better technology partner." },
    { name: 'Henry Miller', title: 'Head of Digital Solutions', text: "We partnered with AventIQ to develop a mobile app for patient engagement, and the results have been phenomenal. Their attention to detail, from intuitive design to robust data security, ensured the app met both user and regulatory requirements. Patient satisfaction has increased by 30%, and our operations are more efficient than ever" },
    { name: 'Robert Anderson', title: 'VP of Technology', text: "Aventiq helped us modernize our legacy payment platform, enabling real-time transactions with 99.9% uptime. Their ability to integrate cutting-edge technologies like AI and predictive analytics has enhanced our decision-making and user experience. The project was delivered ahead of schedule and exceeded our expectations" },
];

const accordionData = [
    { id: 'visual-1', title: 'AI & Automation Consulting', body: "Strategic roadmaps to identify high-value opportunities. We assess your data maturity, process bottlenecks, and ROI potential before writing a single line of code.", img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop', alt: 'Strategic Consulting' },
    { id: 'visual-2', title: 'Managed Delivery Pods', body: "End-to-end execution by curated teams of experts. We take full ownership of the outcome, delivering enterprise-grade quality with startup agility.", img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop', alt: 'Managed Delivery Team' },
    { id: 'visual-3', title: 'Custom AI Solutions', body: "Tailored LLMs and predictive models trained on your proprietary data. Secure, scalable, and designed to solve your unique business challenges.", img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop', alt: 'Custom AI Solutions' },
];

const featureImages = [
    'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=500&fit=crop',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=500&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop',
];

const faqData = [
    { q: 'What industries does AventIQ serve?', a: 'AventIQ serves a wide range of industries including Banking & Financial Services, Insurance, Automotive, Manufacturing, Retail & E-commerce, and Technology & SaaS. Our solutions are tailored to meet the unique challenges of each sector.' },
    { q: 'How does AventIQ approach AI implementation?', a: 'We follow a 4-stage process: Discovery Phase, Strategy Development, Implementation and Execution, and Monitoring and Optimization. This ensures that every AI solution is tailored to your specific business needs and delivers measurable outcomes.' },
    { q: 'What makes AventIQ different from other consulting firms?', a: "Unlike traditional consulting firms, we focus on outcome-based delivery with clear KPIs. We deploy curated pods of trained specialists, not freelancers, ensuring consistent quality and accountability. Our hybrid AI + RPA approach creates solutions that learn and optimize over time." },
    { q: 'How quickly can AventIQ start a project?', a: 'We can typically begin a discovery phase within 1-2 weeks of engagement. Our agile approach means we can move quickly from discovery to implementation, often delivering initial results within the first month.' },
];

export default function Home() {
    const [activeAccordion, setActiveAccordion] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);
    const formRef = useRef(null);

    const handleAccordionClick = (index) => {
        setActiveAccordion(index);
    };

    const handleFaqClick = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const submitBtn = formRef.current.querySelector('button[type="submit"]');
        submitToGoogleSheet(formData, submitBtn).then(success => {
            if (success) formRef.current.reset();
        });
    };

    // Animate elements on scroll
    useEffect(() => {
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.stat-card, .feature-card, .specialty-card, .case-study-card, .process-card');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight * 0.85) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        const initAnimatedElements = () => {
            const elements = document.querySelectorAll('.stat-card, .feature-card, .specialty-card, .case-study-card, .process-card');
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
        };

        initAnimatedElements();
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();
        return () => window.removeEventListener('scroll', animateOnScroll);
    }, []);

    return (
        <>
            <Navbar variant="dark" />

            {/* Hero Section */}
            <section className="hero-dark">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>AI for the Mid-Market, <span className="text-gradient">Done Right</span></h1>
                            <p>Scalable transformation without the consulting bloat — built for mid-market, not mega-budget giants.</p>
                            <div className="hero-buttons">
                                <Link to="/opportunity-discovery" className="btn btn-white btn-arrow">Explore Services</Link>
                                <Link to="/about" className="btn btn-outline-white btn-arrow">About AventIQ</Link>
                            </div>
                        </div>
                        <div className="hero-images">
                            <div className="hero-image-card"><img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" alt="Team collaboration" /></div>
                            <div className="hero-image-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" alt="Data analytics dashboard" /></div>
                            <div className="hero-image-card"><img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop" alt="Modern office" /></div>
                            <div className="hero-image-card"><img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" alt="AI technology" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card"><h3>3+</h3><p>Years of Experience</p><span className="stat-description">Building trusted partnerships with enterprises across the globe.</span></div>
                        <div className="stat-card"><h3>62K+</h3><p>Hours Saved Annually</p><span className="stat-description">Through intelligent automation and process optimization.</span></div>
                        <div className="stat-card"><h3>$3.4M</h3><p>Annual Savings</p><span className="stat-description">Delivered to our clients through operational efficiency.</span></div>
                        <div className="stat-card"><h3>4+</h3><p>Sectors Served</p><span className="stat-description">From BFSI to Manufacturing, we deliver across industries.</span></div>
                    </div>
                </div>
            </section>

            {/* Interactive Feature Accordion */}
            <section className="feature-accordion-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Capabilities</span>
                        <h2>Holistic Transformation</h2>
                        <p>We don't just patch problems. We re-engineer your digital core.</p>
                    </div>
                    <div className="accordion-container">
                        <div className="accordion-list" id="featureAccordion">
                            {accordionData.map((item, index) => (
                                <div key={item.id} className={`accordion-item${activeAccordion === index ? ' active' : ''}`} data-target={item.id} onClick={() => handleAccordionClick(index)}>
                                    <div className="accordion-header"><h3>{item.title}</h3></div>
                                    <div className="accordion-body"><p>{item.body}</p></div>
                                </div>
                            ))}
                        </div>
                        <div className="accordion-visuals">
                            {accordionData.map((item, index) => (
                                <div key={item.id} className={`visual-item${activeAccordion === index ? ' active' : ''}`} id={item.id}>
                                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose AventIQ Section */}
            <section className="features-section section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Benefits</span>
                        <h2>Why Enterprises Choose <span className="highlight">AventIQ</span></h2>
                        <p>We combine startup speed with enterprise-grade quality and governance.</p>
                    </div>
                    <div className="feature-content">
                        <div className="feature-list">
                            {[
                                { title: 'Outcome-Focused Execution', desc: "We measure success by impact, not just effort. Every engagement is tied to clear business KPIs — whether it's reducing processing time or cutting operational costs." },
                                { title: 'AI + Automation Synergy', desc: 'We blend RPA reliability with AI adaptability, enabling workflows that not only execute but also learn and optimize for faster decision-making.' },
                                { title: 'Managed Delivery, Not Freelancers', desc: 'We deliver AI and automation through curated pods — trained, governed, and accountable. No freelance chaos, just structured, high-quality delivery.' },
                                { title: 'Built for Global Scale', desc: 'With presence across multiple countries and experience serving Fortune 500 clients, we understand what it takes to deliver at enterprise scale.' },
                            ].map((f, i) => (
                                <div key={i} className={`feature-item${activeFeature === i ? ' active' : ''}`} onMouseEnter={() => setActiveFeature(i)}>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="feature-image">
                            <img src={featureImages[activeFeature]} alt="Enterprise automation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className="section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">Expertise</span>
                        <h2>Our <span className="highlight">Specialties</span></h2>
                        <p>At AventIQ, we excel in delivering transformative digital solutions that go beyond expectations.</p>
                    </div>
                    <div className="specialties-grid">
                        <div className="specialty-card">
                            <div className="specialty-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-icon" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M12 8v-2"></path><path d="M12 16v2"></path><path d="M16 12h2"></path><path d="M6 12h2"></path><path d="M20 17h-2"></path><path d="M4 17h2"></path><path d="M20 7h-2"></path><path d="M4 7h2"></path>
                                </svg>
                            </div>
                            <h4>Custom AI</h4>
                            <p>Tailored AI models and LLMs built for your specific business needs and data landscape.</p>
                        </div>
                        <div className="specialty-card">
                            <div className="specialty-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-icon" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                            </div>
                            <h4>RPA</h4>
                            <p>End-to-end robotic process automation to eliminate repetitive tasks and boost efficiency.</p>
                        </div>
                        <div className="specialty-card">
                            <div className="specialty-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-icon" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
                                </svg>
                            </div>
                            <h4>Data Analytics</h4>
                            <p>Turn raw data into actionable insights with our advanced engineering and visualization.</p>
                        </div>
                        <div className="specialty-card">
                            <div className="specialty-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="feature-icon" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <h4>Digital Engineering</h4>
                            <p>Modernizing your tech stack with scalable, production-grade software and infrastructure.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Testimonials</span>
                        <h2>Results That Speak For Themselves</h2>
                    </div>
                    <div className="ticker-container-v2">
                        <div className="ticker-track-v2">
                            {[...testimonials, ...testimonials].map((t, i) => (
                                <div key={i} className="ticker-card-v2">
                                    <div className="quote-icon">&ldquo;</div>
                                    <p>{t.text}</p>
                                    <div className="client-info">
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '16px' }}>{t.name}</h5>
                                            <span style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>{t.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partners-section">
                <div className="container" style={{ overflow: 'hidden' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--color-primary)', fontSize: '36px' }}>Brands we have worked with</h2>
                    <div className="partners-track">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
                            <div key={i} className="partner-logo">
                                <img src={`/images/partners/logo${num}.${num === 3 || num === 7 ? 'jpeg' : num === 6 ? 'jpg' : 'png'}`} alt={`Partner ${num}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section">
                <div className="container">
                    <div className="section-head">
                        <span className="section-label">FAQs</span>
                        <h2>Got Questions? We've Got Answers!</h2>
                    </div>
                    <div className="faq-grid">
                        {faqData.map((faq, i) => (
                            <div key={i} className={`faq-item${activeFaq === i ? ' active' : ''}`}>
                                <div className="faq-question" onClick={() => handleFaqClick(i)}>
                                    <h4>{faq.q}</h4>
                                    <span className="faq-icon">+</span>
                                </div>
                                <div className="faq-answer"><p>{faq.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="section" style={{ backgroundColor: '#f9fafb' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Insights</span>
                        <h2>Latest Thinking</h2>
                        <p>Trends, strategies, and success stories from the frontlines of AI.</p>
                    </div>
                    <div className="case-studies-grid">
                        <Link to="/blog-what-is-agentic-ai" className="case-study-card">
                            <div className="case-study-image" style={{ height: '200px' }}><img src="/agentic-ai-hand.jpg" alt="Agentic AI" /></div>
                            <div className="case-study-content"><span className="case-study-label">Article</span><h3>What Is Agentic AI? A Comprehensive Guide</h3><p>A deep dive into the definition and evolution of Agentic AI.</p></div>
                        </Link>
                        <Link to="/blog-rpa-vs-traditional" className="case-study-card">
                            <div className="case-study-image" style={{ height: '200px' }}><img src="/rpa-vs-traditional.jpg" alt="RPA vs Traditional" /></div>
                            <div className="case-study-content"><span className="case-study-label">Guide</span><h3>RPA vs Traditional Automation: Key Differences</h3><p>A strategic comparison to help you choose the right path for digital transformation.</p></div>
                        </Link>
                        <Link to="/blog-implement-rpa-successfully" className="case-study-card">
                            <div className="case-study-image" style={{ height: '200px' }}><img src="/implement-rpa-successfully.jpg" alt="RPA Implementation" /></div>
                            <div className="case-study-content"><span className="case-study-label">Best Practices</span><h3>How to Implement RPA Successfully</h3><p>Best practices, common pitfalls, and how to measure success.</p></div>
                        </Link>
                        <Link to="/blog-digital-transformation-2025" className="case-study-card">
                            <div className="case-study-image" style={{ height: '200px' }}><img src="/digital-transformation-2025.jpg" alt="Digital Transformation 2025" /></div>
                            <div className="case-study-content"><span className="case-study-label">Trends</span><h3>Top Digital Transformation Technologies for 2025</h3><p>Generative AI, Edge Computing, and Quantum-safe cybersecurity.</p></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="home-contact-section">
                <div className="container">
                    <div className="contact-split">
                        <div className="contact-text">
                            <span className="section-label">Get Started</span>
                            <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>Ready to Transform Your Business?</h2>
                            <p style={{ fontSize: '18px', marginBottom: '32px', color: 'var(--color-text-light)' }}>Whether you need a strategic consult, a custom AI solution, or a managed delivery team, we're ready to help you scale.</p>
                            <div className="contact-benefits">
                                {['Free initial discovery session', 'Clear ROI assessment', 'No-obligation proposal'].map((text, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'center' }}>
                                        <div style={{ background: 'var(--color-mint)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="contact-form-card">
                            <form id="homeContactForm" ref={formRef} onSubmit={handleFormSubmit}>
                                <input type="hidden" name="source" value="Contact Form (Home)" />
                                <div className="form-group"><label>Name</label><input type="text" name="name" className="form-control" placeholder="John Doe" required /></div>
                                <div className="form-group"><label>Work Email</label><input type="email" name="email" className="form-control" placeholder="john@company.com" required /></div>
                                <div className="form-group"><label>How can we help?</label><textarea name="message" className="form-control" placeholder="Tell us about your project..." required></textarea></div>
                                <button type="submit" className="btn btn-primary btn-arrow" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer showNewsletter={false} />
        </>
    );
}
