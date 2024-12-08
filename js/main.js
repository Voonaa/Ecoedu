// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation Toggle
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Stats Counter
const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.quick-stats');

function animateStats() {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const count = parseInt(stat.innerText);
        const increment = target / 200;

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target;
        }
    });
}

// Intersection Observer for Stats
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
        }
    });
});

if (statsSection) {
    observer.observe(statsSection);
}