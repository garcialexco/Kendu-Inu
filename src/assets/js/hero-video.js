document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector("#hero-1856 video");

    function attemptPlay() {
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.loop = true;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Handle the error
                console.error('Autoplay was prevented:', error);
            });
        }
    }

    // Attempt to play the video after a slight delay
    setTimeout(attemptPlay, 1);
});
