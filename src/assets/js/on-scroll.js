// JS for on scroll animations

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const targets = ['#howToBuy', '.floozApp', '#about', '#faqSection'];
    targets.forEach(selector => {
        const target = document.querySelector(selector);
        if (target) {
            target.classList.add('fade-in');
            observer.observe(target);
        }
    });
});