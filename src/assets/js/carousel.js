// JS for carousel
document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
        { src: '/assets/svgs/CEX-icons/uniswap-logo.svg', link: 'https://app.uniswap.org/swap?outputCurrency=0xaa95f26e30001251fb905d264aa7b00ee9df6c18&inputCurrency=ETH' },
        { src: '/assets/svgs/CEX-icons/lbank-logo.svg', link: 'https://www.lbank.com/trade/kendu_usdt' },
        { src: '/assets/svgs/CEX-icons/bitmart-logo.svg', description: 'bitmart logo', link: 'https://www.bitmart.com/trade/en-US?symbol=KENDU_USDT&layout=basic&%3Fr=Ppnxq3&type=null' },
        { src: '/assets/svgs/CEX-icons/poloniex-logo.svg', link: 'https://poloniex.com/trade/KENDU_USDT/?type=spot' },
        { src: '/assets/svgs/CEX-icons/azbit-logo.svg', link: 'https://azbit.com/exchange/KENDU_USDT' },
        { src: '/assets/svgs/CEX-icons/fameex-logo.svg', link: 'https://www.fameex.com/en-US/grid/kendu-usdt' },
        { src: '/assets/svgs/CEX-icons/biconomy-logo.svg', link: 'https://www.biconomy.com/exchange/KENDU_USDT' },
        { src: '/assets/svgs/CEX-icons/bigone-logo.svg', link: 'https://big.one/en/trade/KENDU-USDT' },
        { src: '/assets/svgs/CEX-icons/citex-logo.svg', link: 'https://www.citex.io/spot/#/index/kendu_usdt' },
        { src: '/assets/svgs/CEX-icons/coinex-logo.svg', link: 'https://www.coinex.com/en/exchange/kendu-usdt' },
        { src: '/assets/svgs/CEX-icons/bilaxy-logo.svg', link: 'https://m.bilaxy.com/swap/ethereum/0xaa95f26e30001251fb905d264Aa7b00eE9dF6C18' },
        { src: '/assets/svgs/CEX-icons/bingx-logo.svg', link: 'https://bingx.com/ku-ku/spot/KENDUUSDT/' },
        { src: '/assets/svgs/CEX-icons/grovex-logo.svg', link: 'https://www.grovex.io/en_US/trade/KENDU_USDT' },
        { src: '/assets/svgs/CEX-icons/probit-logo.svg', link: 'https://www.probit.com/app/exchange/KENDU-USDT' },
        { src: '/assets/svgs/CEX-icons/superex-logo.svg', link: 'https://www.superex.com/trade/KENDU_USDT' },
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