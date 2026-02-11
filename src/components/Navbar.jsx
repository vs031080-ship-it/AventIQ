import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ variant = 'dark' }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    const navClass = `navbar${variant === 'dark' ? ' navbar-dark' : ''}${scrolled ? ' scrolled' : ''}`;

    const isActive = (path) => currentPath === path ? 'active' : '';

    return (
        <nav className={navClass}>
            <div className="container">
                <Link to="/" className="nav-logo">
                    <img src="/AventIQBG.png" alt="AventIQ" />
                </Link>
                <div className={`nav-toggle${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? '✕' : '☰'}
                </div>
                <div className={`nav-links${mobileOpen ? ' active' : ''}`}>
                    <Link to="/about" className={isActive('/about')}>About</Link>

                    <div className={`dropdown${activeDropdown === 'services' ? ' active' : ''}`}>
                        <a href="#" onClick={(e) => toggleDropdown('services', e)}>Services</a>
                        <div className="dropdown-menu">
                            <Link to="/ai-automation-consulting" className={isActive('/ai-automation-consulting')}>AI &amp; Automation Consulting</Link>
                            <Link to="/opportunity-discovery" className={isActive('/opportunity-discovery')}>Opportunity Discovery</Link>
                            <Link to="/implementation-services" className={isActive('/implementation-services')}>Implementation Services</Link>
                            <Link to="/cybersecurity-compliance" className={isActive('/cybersecurity-compliance')}>Cybersecurity &amp; Compliance</Link>
                            <Link to="/managed-delivery" className={isActive('/managed-delivery')}>Managed Delivery</Link>
                            <Link to="/custom-ai-delivery" className={isActive('/custom-ai-delivery')}>Custom AI Solutions</Link>
                            <Link to="/enterprise-app-development" className={isActive('/enterprise-app-development')}>Enterprise App Development</Link>
                        </div>
                    </div>

                    <div className={`dropdown${activeDropdown === 'industries' ? ' active' : ''}`}>
                        <a href="#" onClick={(e) => toggleDropdown('industries', e)}>Industries</a>
                        <div className="dropdown-menu">
                            <Link to="/banking" className={isActive('/banking')}>Banking</Link>
                            <Link to="/finance" className={isActive('/finance')}>Finance</Link>
                            <Link to="/insurance" className={isActive('/insurance')}>Insurance</Link>
                            <Link to="/automotive" className={isActive('/automotive')}>Automotive</Link>
                        </div>
                    </div>

                    <div className={`dropdown${activeDropdown === 'products' ? ' active' : ''}`}>
                        <a href="#" onClick={(e) => toggleDropdown('products', e)}>Products</a>
                        <div className="dropdown-menu">
                            <Link to="/orchestrate" className={isActive('/orchestrate')}>AventIQ Orchestrate</Link>
                            <Link to="/dms" className={isActive('/dms')}>Document Management</Link>
                            <Link to="/ccqa" className={isActive('/ccqa')}>Contact Center QA</Link>
                        </div>
                    </div>

                    <div className={`dropdown${activeDropdown === 'resources' ? ' active' : ''}`}>
                        <Link to="/articles" onClick={(e) => toggleDropdown('resources', e)}>Resources</Link>
                        <div className="dropdown-menu">
                            <Link to="/articles" className={isActive('/articles')}>Blog</Link>
                        </div>
                    </div>

                    <Link to="/contact" className={isActive('/contact')}>Contact</Link>

                    {/* Mobile Only CTA */}
                    <div className="mobile-nav-cta">
                        <Link to="/contact" className="btn btn-primary btn-arrow" style={{ width: '100%', justifyContent: 'center' }}>Contact Us</Link>
                    </div>
                </div>
                <div className="nav-cta">
                    <Link to="/contact" className="btn btn-primary btn-arrow">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}
