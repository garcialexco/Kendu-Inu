// add classes for mobile navigation toggling
const CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', () => {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
}

// Throttle function to limit scroll event handler execution
function throttle(fn, wait) {
    let time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll animations with the navbar

const handleScroll = throttle(() => {
    const scroll = document.documentElement.scrollTop;
    CSbody.classList.toggle('scroll', scroll >= 100);
}, 200);

document.addEventListener('scroll', handleScroll);

// mobile nav toggle code
document.querySelector('#cs-navigation').addEventListener('click', (event) => {
    if (event.target.closest('.cs-dropdown')) {
        event.target.closest('.cs-dropdown').classList.toggle('cs-active');
    }
});

// JS for FAQ
const faqItems = document.querySelectorAll('.cs-faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// JS for carousel
document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
        { src: '/assets/svgs/CEX-icons/uniswap-logo.svg', description: 'uniswap logo', link: 'https://app.uniswap.org/swap?outputCurrency=0xaa95f26e30001251fb905d264aa7b00ee9df6c18&inputCurrency=ETH' },
        { src: '/assets/svgs/CEX-icons/lbank-logo.svg', description: 'lbank logo', link: 'https://www.lbank.com/trade/kendu_usdt' },
        { src: '/assets/svgs/CEX-icons/bitmart-logo.svg', description: 'bitmart logo', link: 'https://www.bitmart.com/trade/en-US?symbol=KENDU_USDT&layout=basic&%3Fr=Ppnxq3&type=null' },
        { src: '/assets/svgs/CEX-icons/poloniex-logo.svg', description: 'poloniex logo', link: 'https://poloniex.com/trade/KENDU_USDT/?type=spot' },
        { src: '/assets/svgs/CEX-icons/azbit-logo.svg', description: 'azbit logo', link: 'https://azbit.com/exchange/KENDU_USDT' },
        { src: '/assets/svgs/CEX-icons/fameex-logo.svg', description: 'fame ex logo', link: 'https://www.fameex.com/en-US/grid/kendu-usdt' },
        { src: '/assets/svgs/CEX-icons/biconomy-logo.svg', description: 'biconomy logo', link: 'https://www.biconomy.com/exchange/KENDU_USDT' },
        { src: '/assets/svgs/CEX-icons/bigone-logo.svg', description: 'big one logo', link: 'https://big.one/en/trade/KENDU-USDT' },
        { src: '/assets/svgs/CEX-icons/citex-logo.svg', description: 'citex logo', link: 'https://www.citex.io/spot/#/index/kendu_usdt' },
        { src: '/assets/svgs/CEX-icons/coinex-logo.svg', description: 'coinex logo', link: 'https://www.coinex.com/en/exchange/kendu-usdt' },
        { src: '/assets/svgs/CEX-icons/bilaxy-logo.svg', description: 'bilaxy logo', link: 'https://m.bilaxy.com/swap/ethereum/0xaa95f26e30001251fb905d264Aa7b00eE9dF6C18' },
        { src: '/assets/svgs/CEX-icons/bingx-logo.svg', description: 'bing x logo', link: 'https://bingx.com/ku-ku/spot/KENDUUSDT/' },
        { src: '/assets/svgs/CEX-icons/grovex-logo.svg', description: 'grove x logo', link: 'https://www.grovex.io/en_US/trade/KENDU_USDT' },
        { src: '/assets/svgs/CEX-icons/probit-logo.svg', description: 'probit logo', link: 'https://www.probit.com/app/exchange/KENDU-USDT' },
        { src: '/assets/svgs/CEX-icons/superex-logo.svg', description: 'super ex logo', link: 'https://www.superex.com/trade/KENDU_USDT' },
    ];

    const carouselTrack = document.querySelector('.carousel-track');

    const createSlide = ({ src, description, link }) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';

        const linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = '_blank';

        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.alt = description;

        const overlayElement = document.createElement('div');
        overlayElement.className = 'overlay';
        overlayElement.textContent = description;

        linkElement.append(imgElement, overlayElement);
        slideElement.appendChild(linkElement);

        return slideElement;
    };

    const populateCarouselTrack = (slides) => {
        const fragment = document.createDocumentFragment();
        slides.forEach(slide => fragment.appendChild(createSlide(slide)));

        // Duplicate slides to create a seamless loop effect
        slides.forEach(slide => fragment.appendChild(createSlide(slide)));

        carouselTrack.appendChild(fragment);

        const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
        const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
        const totalWidth = (slideWidth + gapWidth) * slides.length;
        const duplicatedTotalWidth = totalWidth * 2;
        const halfTotalWidth = duplicatedTotalWidth / 2;

        carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);

        const baseDuration = 40; // seconds | default = 40
        const baseWidth = 5000; // px | default = 5000
        const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

        carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };

    populateCarouselTrack(slidesData);
});

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
