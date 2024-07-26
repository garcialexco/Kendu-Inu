document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector("#hero-1856 video");

    video.setAttribute("autoplay", true);
    video.setAttribute("muted", true);
    video.setAttribute("playsinline", true);

    video.addEventListener("play", function() {
        // Ensure the video is playing
    });

    video.addEventListener("error", function() {
        // Handle the error
        video.muted = true;
        video.play();
    });

    video.muted = true;
    video.play();
});
