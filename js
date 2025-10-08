const buttons = document.querySelectorAll(".service-buttons button");
const videoBox = document.getElementById("serviceVideo");

// Replace with your own videos or YouTube embed URLs
const videos = {
  MIMICRY: "https://videos.pexels.com/video-files/8561366/8561366-uhd_2560_1440_30fps.mp4",
  "DANCE BATTLE": "https://videos.pexels.com/video-files/8546363/8546363-uhd_2560_1440_30fps.mp4",
  "OTHER TALENTS": "https://videos.pexels.com/video-files/8551594/8551594-uhd_2560_1440_30fps.mp4",
  "STD.COMEDY": "https://videos.pexels.com/video-files/8484161/8484161-uhd_2560_1440_30fps.mp4",
  SPEECH: "https://videos.pexels.com/video-files/8552635/8552635-uhd_2560_1440_30fps.mp4",
  SINGING: "https://videos.pexels.com/video-files/8560782/8560782-uhd_2560_1440_30fps.mp4",
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    videoBox.style.opacity = 0;
    setTimeout(() => {
      const videoSrc = videos[btn.innerText];
      videoBox.innerHTML = `
        <video controls autoplay muted loop>
          <source src="${videoSrc}" type="video/mp4">
          Your browser does not support video playback.
        </video>
      `;
      videoBox.style.opacity = 1;
    }, 250);
  });
});
