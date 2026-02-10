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

    // --- Form Submission Logic (Google Sheets) ---
    // REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkjrGwqqfW7c0iQ372XZFVi6GVfkaldxmaAUR2ZNdy8266UTBt6cCofaUoIIFFG_P3/exec';

    function submitToGoogleSheet(form) {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Add timestamp if not present (handled by script but good for debug)
        // data['timestamp'] = new Date().toISOString();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'no-cors', // Important for Google Apps Script
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                alert('Thank you! Your submission has been received.');
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Something went wrong. Please try again later.');
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    }

    // Contact form submission (Home & Contact Page)
    // We use a general selector to catch both if possible, or specific IDs
    const contactForms = document.querySelectorAll('#homeContactForm, .contact-form form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            submitToGoogleSheet(this);
        });
    });

    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.removeEventListener('submit', null); // Remove old listener if any (logic below handles it)
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            submitToGoogleSheet(this);
        });
    });

    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            navToggle.classList.toggle('active');
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

    // Initial setup: ensure first item is active without animation
    const firstVisual = document.getElementById('visual-1');
    if (firstVisual) firstVisual.classList.add('active');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            // Find currently active visual
            const currentVisual = document.querySelector('.visual-item.active');

            // Remove active from all items (headers)
            accordionItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Target visual
            const targetId = this.getAttribute('data-target');
            const targetVisual = document.getElementById(targetId);

            if (currentVisual && currentVisual !== targetVisual) {
                // Animate out current (Slide Back)
                currentVisual.classList.remove('active');
                currentVisual.classList.add('slide-back');

                // Cleanup slide-back class after animation
                setTimeout(() => {
                    currentVisual.classList.remove('slide-back');
                }, 600);
            }

            if (targetVisual) {
                // Ensure it's ready to slide in (Slide Up)
                targetVisual.classList.remove('slide-back');
                void targetVisual.offsetWidth; // Force reflow
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
