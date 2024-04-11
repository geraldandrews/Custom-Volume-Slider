  const music = document.querySelector("#music");
  const volume = document.querySelector("#volume");
  const volumeValue = document.querySelector("#volume-value");
  const playPauseButton = document.querySelector("#play");
  const volumeIcon = document.querySelector("#icon");

  music.volume = 0.5;

  volumeIcon.addEventListener("click", mute);

  function mute() {
    if(music.muted) {
      music.muted = false;
      volumeIcon.classList.remove("fa-volume-mute");
      volumeIcon.classList.add("fa-volume-up");
    } else {
      music.muted = true;
      volumeIcon.classList.remove("fa-volume-up");
      volumeIcon.classList.add("fa-volume-mute");
    }
  }
 
  playPauseButton.addEventListener("click", () => {
    if (music.paused) { 
      music.play(); 
      playPauseButton.textContent = "Pause"; 
    } else {
      music.pause(); 
      playPauseButton.textContent = "Play"; 
    }
  });

  music.addEventListener("ended", () => {
    playPauseButton.textContent = "Play";
  });

  volume.addEventListener("input", (event) => {
    const tempVolumeValue = Number(event.target.value);
    const progress = (tempVolumeValue / volume.max) * 100;
    volume.style.background = `linear-gradient(to right, #028a0f ${progress}%, #ccc ${progress}%)`;
    music.volume = volume.value;
    updateVolumeValue();
  }); 

  function updateVolumeValue() {
    volumeValue.textContent = `${Math.floor(music.volume * 100)}%`;   
  }

 