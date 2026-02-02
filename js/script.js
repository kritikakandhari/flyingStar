// Custom JS for Flying Star Immigration

document.addEventListener('DOMContentLoaded', () => {
    console.log('Flying Star Immigration Website Initialized');

    // Smooth navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('navbar-scrolled');
        } else {
            navbar?.classList.remove('navbar-scrolled');
        }
    });

    // GSAP Hero Animation Logic
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".navbar", { y: -100, opacity: 0, duration: 1 })
        .from(".hero-content hi, .hero-content h6, .hero-content h1, .hero-content p, .hero-content .d-flex", {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1
        }, "-=0.5")
        .from(".hero-visual", {
            opacity: 0,
            scale: 0.8,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)"
        }, "-=1");

    // Floating animation for hero image
    gsap.to(".hero-image-wrapper", {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Transit icons animation
    gsap.to(".transition-plane", {
        x: 10,
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".transition-passport", {
        rotation: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Service Card Hover Effects (GSAP)
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, boxShadow: "none", duration: 0.3 });
        });
    });

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target') || counter.innerText.replace(/\D/g, ''));
                const count = parseInt(counter.innerText.replace(/\D/g, ''));
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('+') ? '+' : (counter.innerText.includes('k') ? 'k+' : ''));
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + (counter.innerText.includes('+') ? '+' : (counter.innerText.includes('k') ? 'k+' : ''));
                }
            };
            // Set initial state for counter if needed, but here we just re-run
            // For a better effect, we could reset it to 0 first
        };
    };

    // Trigger counters when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // startCounters(); // Simplified for now since we have AOS
            }
        });
    }, { threshold: 0.5 });
});
