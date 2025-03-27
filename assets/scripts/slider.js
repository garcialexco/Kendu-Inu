import Flickity from "flickity";
import 'flickity/css/flickity.css';

document.addEventListener("alpine:init", () => {
    Alpine.data("slider", () => ({
        slider: null,
        progress: 0,

        init() {
            this.$nextTick(() => {
                this.slider = new Flickity(this.$refs.slider, {
                    cellAlign: "left",
                    contain: true,
                    wrapAround: false,
                    slidesToScroll: 1,
                    draggable: true,
                    pageDots: false,
                    prevNextButtons: false,
                    freeScroll: true,
                    on: {
                        ready: () => {
                            window.dispatchEvent(new Event("resize"));
                        }
                    }
                });

                this.updateProgress();

                // Listen for 'dragMove' event to update the progress
                this.slider.on("dragMove", () => {
                    this.updateProgress();
                });

                // Listen for 'cellChange' or 'scroll' events to update progress in case of initial load
                this.slider.on("scroll", () => {
                    this.updateProgress();
                });

                window.addEventListener('resize', () => {
                    this.slider.resize();
                });
            });
        },

        updateProgress() {
            const scrollX = Math.abs(this.slider.x); // Current scroll position
            const maxScroll = this.slider.slideableWidth - this.slider.size.width; // Total scrollable width
            let adjustedProgress = (scrollX / maxScroll) * 110; // Ensure bar goes to the end

            this.progress = adjustedProgress;
        }
    }));
});
