// JS for FAQ
const faqItems = document.querySelectorAll('.cs-faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});