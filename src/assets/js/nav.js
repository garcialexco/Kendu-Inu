// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
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

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            

// JS for FAQ

const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
for (const item of faqItems) {
    const onClick = () => {
        item.classList.toggle('active');
    };
    item.addEventListener('click', onClick);
}

//JS for carousel

document.addEventListener('DOMContentLoaded', () => {
  const slidesData = [
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png', description: 'Aerobic', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png', description: 'Training', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png', description: 'Body Builder', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png', description: 'Yoga', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png', description: 'Cycling', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png', description: 'Aerobic', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png', description: 'Training', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png', description: 'Body Builder', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png', description: 'Yoga', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png', description: 'Cycling', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-1.png', description: 'Aerobic', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-2.png', description: 'Training', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-3.png', description: 'Body Builder', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-5.png', description: 'Yoga', link: '#' },
    { src: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/gym-service-4.png', description: 'Cycling', link: '#' },
  ];

  const carouselTrack = document.querySelector('.carousel-track');

  const createSlide = ({ src, description, link }) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';

    const linkElement = document.createElement('a');
    linkElement.href = link;

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
