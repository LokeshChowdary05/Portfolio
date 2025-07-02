// Portfolio Website JavaScript
// Features: Spotlight effect, smooth navigation, scroll spy

document.addEventListener('DOMContentLoaded', function() {
    
    // Spotlight effect that follows mouse cursor
    const spotlight = document.getElementById('spotlight');
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    // Update spotlight position based on mouse movement
    function updateSpotlight(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (window.innerWidth >= 1024) { // Only on desktop
            // Use clientX and clientY for fixed positioning
            spotlight.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
        }
    }

    // Throttle mouse movement for better performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Add throttled mouse move listener
    document.addEventListener('mousemove', throttle(updateSpotlight, 10));

    // Navigation scroll spy functionality
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    function updateActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Offset for better accuracy
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // If no section is active, default to the first one
        if (!current && navLinks.length > 0) {
            navLinks[0].classList.add('active');
        }
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Adjust for fixed header if any
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize scroll spy
    updateActiveNav();
    window.addEventListener('scroll', throttle(updateActiveNav, 10));

    // Handle resize events to adjust spotlight for mobile/desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth < 1024) {
            spotlight.style.background = 'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)';
        } else {
            updateSpotlight({clientX: mouseX, clientY: mouseY});
        }
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });

        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Skip to content functionality
        if (e.key === 'Tab' && !e.shiftKey) {
            const skipLink = document.querySelector('a[href="#content"]');
            if (document.activeElement === skipLink) {
                e.preventDefault();
                const contentElement = document.getElementById('content');
                if (contentElement) {
                    contentElement.focus();
                    contentElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });

    // Focus management for better accessibility
    const focusableElements = document.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );

    // Ensure proper focus visibility
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #5eead4';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Animate elements on scroll (fade in effect)
    if ('IntersectionObserver' in window) {
        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Add animation to experience and project items
        const animatedElements = document.querySelectorAll('section li, section .mb-12');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animateObserver.observe(el);
        });
    }

    // Enhanced hover effects for project and experience cards
    const cards = document.querySelectorAll('.group.relative.grid');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Preload critical images
    const criticalImages = [
        './assets/project1.svg',
        './assets/project2.svg', 
        './assets/project3.svg'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Add smooth page transitions
    window.addEventListener('beforeunload', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
    });

    // Console message for developers
    console.log('%c👋 Hello Developer!', 'color: #5eead4; font-size: 16px; font-weight: bold;');
    console.log('%cThanks for checking out the code! This portfolio was built with vanilla HTML, CSS, and JavaScript.', 'color: #94a3b8; font-size: 12px;');
    console.log('%cFeel free to reach out if you have any questions!', 'color: #94a3b8; font-size: 12px;');

});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export functions for potential external use
window.portfolioUtils = {
    isInViewport,
    updateSpotlight: function(x, y) {
        const spotlight = document.getElementById('spotlight');
        if (spotlight && window.innerWidth >= 1024) {
            spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
        }
    }
};
