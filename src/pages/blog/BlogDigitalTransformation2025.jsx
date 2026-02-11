import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useRef } from 'react';
import { submitToGoogleSheet } from '../../utils/formSubmit';
import { Link } from 'react-router-dom';

export default function BlogDigitalTransformation2025() {
  return (
    <>
      <Navbar variant="dark" />
      
    

    
    <header className="tcs-hero" style={{backgroundImage: 'url(\'digital-transformation-2025.jpg\')'}}>
        <div className="tcs-hero-content">
            <div className="tcs-breadcrumbs">Resources / Articles</div>
            <h1 className="tcs-title">Top Digital Transformation Technologies for 2025 and Beyond</h1>
        </div>
    </header>

    
    

    
    <article className="tcs-content-wrapper">
        <div className="tcs-content">
            <div id="gen-ai">
                <p>As we approach 2025, digital transformation is no longer a buzzwordâ€”it's survival. The technologies
                    defining the next era are smarter, faster, and more interconnected than ever before.</p>

                <div className="tcs-highlight-box">
                    <h3>Highlights</h3>
                    <p>Generative AI is moving from novelty to utility, Edge Computing is processing data where it's
                        created, and Cybersecurity is adapting to the quantum threat.</p>
                </div>

                <h3>Generative AI at Scale</h3>
                <p>Businesses are moving beyond simple chatbots to fully autonomous content creation, code generation,
                    and personalized customer interactions at scale.</p>
            </div>

            <h2 id="edge">Edge Computing</h2>
            <p>With the proliferation of IoT devices, processing data in the cloud is becoming too slow for real-time
                applications. Edge computing brings computation and data storage closer to the sources of data,
                improving response times and saving bandwidth.</p>

            <h2 id="cyber">Quantum-Safe Cybersecurity</h2>
            <p>As quantum computing advances, traditional encryption methods are at risk. Forward-looking enterprises
                are already adopting quantum-resistant algorithms to secure their most sensitive data against future
                threats ("harvest now, decrypt later").</p>

            <hr style={{margin: '60px 0', border: 0, borderTop: '1px solid #eee'}} />

            <h3>Future-proof your enterprise.</h3>
            <p>AventIQ's technology radar keeps you ahead of the curve.</p>
            <Link to="/contact" className="btn btn-primary btn-arrow"
                style={{display: 'inline-flex', marginTop: '16px'}}>Consult with Us</Link>
        </div>
    </article>

    
      <Footer />
    </>
  );
}
