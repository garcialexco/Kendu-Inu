document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector("#hero-1856 video");

    function playVideo() {
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.loop = true;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Autoplay started');
            }).catch(error => {
                console.error('Autoplay was prevented:', error);
                // Retry after a slight delay
                setTimeout(playVideo, 1);
            });
        }
    }

    // Try to autoplay the video immediately
    playVideo();
});