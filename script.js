//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

let currentAudio = null;

sounds.forEach(sound => {
  const audio = new Audio(`sounds/${sound}.mp3`);

  document.querySelectorAll('.btn').forEach(btn => {
    if (btn.innerText === sound) {
      btn.addEventListener('click', () => {
        stopAllSounds();
        currentAudio = audio;
        audio.play();
      });
    }
  });
});

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.createElement('audio');
    audio.src = `sounds/${sound}.mp3`;
    audio.pause();
    audio.currentTime = 0;
  });

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

document.querySelector('.stop').addEventListener('click', stopAllSounds);

