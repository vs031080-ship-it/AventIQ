import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function BlogChoosingTechPartner() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <header className="tcs-hero" style={{backgroundImage: 'url(\'choosing-tech-partner.jpg\')'}}>
        <div className="tcs-hero-content">
            <div className="tcs-breadcrumbs">Resources / Articles</div>
            <h1 className="tcs-title">A Step-by-Step Guide to Choosing the Right Technology Partner</h1>
        </div>
    </header>

    
    

    
    <article className="tcs-content-wrapper">
        <div className="tcs-content">
            <div id="criteria">
                <p>Digital transformation is a journey, not a destination. Who you choose to travel with matters. A
                    partner can accelerate your progress or become a bottleneck.</p>

                <div className="tcs-highlight-box">
                    <h3>Highlights</h3>
                    <p>Don't just look at the rate card. Evaluate partners based on their technical depth, industry
                        experience, and ability to challenge your assumptions constructively.</p>
                </div>
            </div>

            <h2 id="culture">Cultural Alignment</h2>
            <p>Skills can be taught; culture cannot. Does the partner share your values? Are they transparent about
                challenges? Do they view your success as their own? Look for a partner who acts as an extension of your
                team, not just a vendor.</p>

            <h2 id="support">Post-Implementation Support</h2>
            <p>Going live is just the beginning. The real work starts when users begin interacting with the system.
                Ensure your partner has a defined support structure (SLA) and a roadmap for continuous improvement.</p>

            <hr style={{margin: '60px 0', border: 0, borderTop: '1px solid #eee'}} />

            <h3>Looking for a long-term partner?</h3>
            <p>At AventIQ, we build relationships, not just software.</p>
            <Link to="/contact" className="btn btn-primary btn-arrow"
                style={{display: 'inline-flex', marginTop: '16px'}}>Meet Our Team</Link>
        </div>
    </article>

    
      <Footer />
    </>
  );
}
