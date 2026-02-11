import { Link } from 'react-router-dom';

export default function CTASection({ title = "Ready to Transform Your Business?", description = "Let's discuss how AI and automation can drive efficiency and growth for your organization.", buttonText = "Get Started Today", buttonLink = "/contact" }) {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={buttonLink} className="btn btn-white btn-arrow">{buttonText}</Link>
                </div>
            </div>
        </section>
    );
}
