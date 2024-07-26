document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector("#hero-1856 video");

    function playVideo() {
        video.muted = true;
        video.play().catch(() => {
            // Handle play error
        });
    }

    document.body.addEventListener('touchstart', playVideo, { once: true });
    document.body.addEventListener('click', playVideo, { once: true });

    // Try to autoplay the video immediately
    playVideo();
});
