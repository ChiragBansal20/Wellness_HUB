// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// Circle Animation
const circlesContainer = document.querySelector('.circles');
for (let i = 0; i < 21; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = `calc((${i} + 1) * 2vmin)`;
    circle.style.height = `calc((${i} + 1) * 2vmin)`;
    circle.style.animationDelay = `${i * 0.1}s`;
    circlesContainer.appendChild(circle);
}

// Stats Counter Animation
const stats = document.querySelectorAll('.counter');
const statsSection = document.querySelector('.stats-section');

const startCounting = (element) => {
    const target = parseInt(element.closest('.stat-card').dataset.count);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        if (current < target) {
            current += increment;
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
};

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stats.forEach(counter => startCounting(counter));
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navbarCollapse.classList.remove('show');
        }
    });
});

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

featureCards.forEach(card => featureObserver.observe(card));

// Image Slider Hover Effect
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
        slides.forEach(s => s.style.width = '12rem');
        slide.style.width = '40rem';
    });
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    slides.forEach(slide => slide.style.width = '12rem');
});