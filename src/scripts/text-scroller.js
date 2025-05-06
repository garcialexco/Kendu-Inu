document.addEventListener('alpine:init', () => {
    Alpine.data('textScroller', () => {
        return {
            visible: false,
            scrollPos: 0,
            startScroll: 0,

            init() {
                this.initScrollEffect();
            },
            
            initScrollEffect() {
                window.addEventListener('scroll', () => {
                    if (this.visible) {
                        this.scrollPos = window.scrollY - this.startScroll;
                    }
                });
            }
        }
    });
});