// Scroll Animations for smooth transitions
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.section-title').forEach((section) => {
    observer.observe(section);
});

