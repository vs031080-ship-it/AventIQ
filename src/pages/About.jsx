import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <section className="hero-dark">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <span className="section-label" style={{color: 'var(--color-mint)'}}>About Us</span>
                    <h1>Welcome to AventIQ where <span className="text-gradient">innovation meets execution.</span></h1>
                    <p>At AventIQ, we specialize in delivering transformative digital solutions that drive efficiency
                        and innovation. With over three years of experience, we have established a strong presence
                        across eight countries.</p>
                </div>
                <div className="hero-images">
                    <div className="hero-image-card">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                            alt="Team meeting" />
                    </div>
                    <div className="hero-image-card">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                            alt="Office collaboration" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="about-intro">
                <div className="about-text">
                    <span className="section-label">Who We Are</span>
                    <h2>About Our Company</h2>
                    <p style={{fontSize: '18px', lineHeight: '1.8', marginBottom: '24px'}}>At AventIQ, we specialize in
                        delivering transformative digital solutions that drive efficiency and innovation. With over
                        three years of experience, we have established a strong presence across eight countries,
                        partnering with more than 8 major clients to revolutionize their operations through cutting-edge
                        technologies.</p>
                    <p style={{fontSize: '18px', lineHeight: '1.8', marginBottom: '32px'}}>Our expertise spans AI, RPA, data
                        analytics, and digital engineering. We don't just implement technology — we architect
                        solutions
                        that create lasting business impact.</p>
                    <div style={{display: 'flex', gap: '40px'}}>
                        <div>
                            <h3 style={{color: 'var(--color-lavender)', fontSize: '40px', marginBottom: '4px'}}>3+</h3>
                            <span style={{color: 'var(--color-text-muted)'}}>Years Experience</span>
                        </div>
                        <div>
                            <h3 style={{color: 'var(--color-lavender)', fontSize: '40px', marginBottom: '4px'}}>8</h3>
                            <span style={{color: 'var(--color-text-muted)'}}>Countries</span>
                        </div>
                        <div>
                            <h3 style={{color: 'var(--color-lavender)', fontSize: '40px', marginBottom: '4px'}}>8+</h3>
                            <span style={{color: 'var(--color-text-muted)'}}>Major Clients</span>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop"
                        alt="Modern office" />
                </div>
            </div>
        </div>
    </section>


    
    <section className="partners-section">
        <div className="container">
            <h2 style={{textAlign: 'center', marginBottom: '40px', color: 'var(--color-primary)', fontSize: '36px'}}>Brands we
                have worked with</h2>
            <div className="partners-track">
                
                <div className="partner-logo"><img src="images/partners/logo1.png" alt="Partner 1" /></div>
                <div className="partner-logo"><img src="images/partners/logo2.png" alt="Partner 2" /></div>
                <div className="partner-logo"><img src="images/partners/logo3.jpeg" alt="Partner 3" /></div>
                <div className="partner-logo"><img src="images/partners/logo4.png" alt="Partner 4" /></div>
                <div className="partner-logo"><img src="images/partners/logo5.png" alt="Partner 5" /></div>
                <div className="partner-logo"><img src="images/partners/logo6.jpg" alt="Partner 6" /></div>
                <div className="partner-logo"><img src="images/partners/logo7.jpeg" alt="Partner 7" /></div>
                <div className="partner-logo"><img src="images/partners/logo8.png" alt="Partner 8" /></div>

                
                <div className="partner-logo"><img src="images/partners/logo1.png" alt="Partner 1" /></div>
                <div className="partner-logo"><img src="images/partners/logo2.png" alt="Partner 2" /></div>
                <div className="partner-logo"><img src="images/partners/logo3.jpeg" alt="Partner 3" /></div>
                <div className="partner-logo"><img src="images/partners/logo4.png" alt="Partner 4" /></div>
                <div className="partner-logo"><img src="images/partners/logo5.png" alt="Partner 5" /></div>
                <div className="partner-logo"><img src="images/partners/logo6.jpg" alt="Partner 6" /></div>
                <div className="partner-logo"><img src="images/partners/logo7.jpeg" alt="Partner 7" /></div>
                <div className="partner-logo"><img src="images/partners/logo8.png" alt="Partner 8" /></div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="feature-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
                <div className="feature-card">
                    <h3>Our History</h3>
                    <p>Founded as Mittal Software Labs, we rebranded to AventIQ to better reflect our mission of
                        pioneering AI-driven solutions for enterprises. Our journey has been marked by continuous
                        innovation and a relentless focus on customer success.</p>
                </div>
                <div className="feature-card">
                    <h3>Our Mission</h3>
                    <p>To empower businesses with transformative digital solutions that drive efficiency, innovation,
                        and sustainable growth. We're committed to delivering measurable outcomes that create lasting
                        value for our clients.</p>
                </div>
                <div className="feature-card">
                    <h3>Our Vision</h3>
                    <p>To be the global leader in AI-powered digital transformation, enabling enterprises to thrive in
                        the digital age through intelligent automation and data-driven decision making.</p>
                </div>
            </div>
        </div>
    </section>



    
    <section className="founder-section section">
        <div className="container">
            <div className="section-head" style={{color: 'white'}}>
                <span className="section-label" style={{color: 'var(--color-mint)'}}>About Founder</span>
                <h2 style={{color: 'white'}}>Meet The Founder</h2>
            </div>
            <div className="founder-content">
                <div className="founder-image">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop"
                        alt="Nikhil Mittal" />
                </div>
                <div className="founder-info">
                    <h3>Nikhil Mittal</h3>
                    <p className="founder-title">Founder & CEO</p>
                    <p>Nikhil Mittal is a customer success-oriented business leader with over 18 years of experience
                        driving Customer Experience and Digital Strategy for Fortune 500 clients. As the visionary
                        Founder and CEO of Mittal Software Labs, now rebranded as AventIQ, Nikhil is passionate about
                        leveraging cutting-edge technologies to transform businesses and deliver exceptional value.</p>
                    <p>With extensive onsite experience across the US, Europe, and APAC regions, Nikhil has worked
                        closely with business and IT leaders to foster strong partnerships. His collaborative mindset
                        ensures the delivery of tailored digital solutions that meet global business needs.</p>
                    <p>At AventIQ, Nikhil leads with a mission to drive customer success through digital transformation.
                        By combining deep industry expertise with cutting-edge technologies, his team delivers
                        innovative solutions that empower businesses to achieve their strategic goals.</p>
                    <div className="founder-traits">
                        <span className="founder-trait">Visionary Thinker</span>
                        <span className="founder-trait">Tech-Savvy</span>
                        <span className="founder-trait">Creative Problem-Solver</span>
                        <span className="founder-trait">Customer-Centric</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">Values</span>
                <h2>What Drives Us</h2>
            </div>
            <div className="values-section-grid">
                <div className="value-card">
                    <h4>Quality</h4>
                </div>
                <div className="value-card">
                    <h4>Personalization</h4>
                </div>
                <div className="value-card">
                    <h4>Reliability</h4>
                </div>
                <div className="value-card">
                    <h4>Collaboration</h4>
                </div>
                <div className="value-card">
                    <h4>Innovation</h4>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section" style={{background: 'var(--color-light-bg)'}}>
        <div className="container">
            <div className="section-head">
                <span className="section-label">How We Work</span>
                <h2>Our 4 Stage Process</h2>
                <p>A proven methodology for delivering successful digital transformation projects.</p>
            </div>
            <div className="process-grid">
                <div className="process-card">
                    <div className="process-number">01</div>
                    <h4>Discovery Phase</h4>
                    <p>We begin by understanding your business challenges, goals, and current technology landscape
                        through comprehensive stakeholder interviews and process analysis.</p>
                </div>
                <div className="process-card">
                    <div className="process-number">02</div>
                    <h4>Strategy Development</h4>
                    <p>Based on our findings, we develop a tailored strategy that aligns with your business objectives,
                        including technology recommendations and implementation roadmap.</p>
                </div>
                <div className="process-card">
                    <div className="process-number">03</div>
                    <h4>Implementation & Execution</h4>
                    <p>Our expert pods execute the strategy with agile methodology, ensuring regular checkpoints,
                        transparent communication, and iterative improvements.</p>
                </div>
                <div className="process-card">
                    <div className="process-number">04</div>
                    <h4>Monitoring & Optimization</h4>
                    <p>We continuously monitor solution performance, gather insights, and optimize to ensure maximum ROI
                        and alignment with evolving business needs.</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section">
        <div className="container">
            <div className="section-head">
                <span className="section-label">The Team</span>
                <h2>Say Hello to Our Squad</h2>
                <p>Meet the talented individuals driving innovation at AventIQ.</p>
            </div>
            <div className="team-grid">
                <div className="team-card">
                    <div className="team-image">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
                            alt="Nikhil Mittal" />
                    </div>
                    <h4>Nikhil Mittal</h4>
                    <span>Founder & CEO</span>
                </div>
                <div className="team-card">
                    <div className="team-image">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                            alt="Viresh Gupta" />
                    </div>
                    <h4>Viresh Gupta</h4>
                    <span>Technology Lead</span>
                </div>
                <div className="team-card">
                    <div className="team-image">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                            alt="Hardic Garg" />
                    </div>
                    <h4>Hardic Garg</h4>
                    <span>Delivery Head</span>
                </div>
            </div>
        </div>
    </section>

    
    <section className="cta-section">
        <div className="container">
            <div className="cta-content">
                <h2>Ready to Transform Your Business?</h2>
                <p>Let's discuss how AI and automation can drive efficiency and growth for your organization.</p>
                <Link to="/contact" className="btn btn-white btn-arrow">Get Started Today</Link>
            </div>
        </div>
    </section>

    
      <Footer />
    </>
  );
}
