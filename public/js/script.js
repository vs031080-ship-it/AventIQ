// AventIQ - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Feature items hover effect (Why Choose AventIQ section)
    const featureItems = document.querySelectorAll('.feature-item');
    const featureImage = document.querySelector('.feature-image img');

    const featureImages = [
        'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=500&fit=crop',
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=500&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=500&fit=crop'
    ];

    featureItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Remove active from all
            featureItems.forEach(i => i.classList.remove('active'));
            // Add active to current
            item.classList.add('active');
            // Change image
            if (featureImage && featureImages[index]) {
                featureImage.src = featureImages[index];
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Animate elements on scroll
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

    // Set initial state for animated elements
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
    animateOnScroll(); // Check initial state

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! We\'ll be in touch.');
                this.reset();
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            navToggle.textContent = navLinksContainer.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Dropdown menu for mobile (Accordion style)
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) other.classList.remove('active');
                });
                dropdown.classList.toggle('active');
            }
        });
    });

    // Feature Accordion Logic (Homepage)
    const accordionItems = document.querySelectorAll('.accordion-item');
    const visualItems = document.querySelectorAll('.visual-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active from all
            accordionItems.forEach(i => i.classList.remove('active'));
            visualItems.forEach(v => v.classList.remove('active'));

            // Add active to clicked
            this.classList.add('active');

            // Activate corresponding visual
            const targetId = this.getAttribute('data-target');
            const targetVisual = document.getElementById(targetId);
            if (targetVisual) {
                targetVisual.classList.add('active');
            }
        });
    });



    // Active link highlighting based on URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
            // If it's inside a dropdown, also highlight the parent dropdown trigger
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const trigger = parentDropdown.querySelector('a');
                if (trigger) trigger.classList.add('active');
            }
        }
    });

});
