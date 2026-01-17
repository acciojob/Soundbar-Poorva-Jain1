//your JS code here. If required.
 const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('stop')) {
      stopSounds();
    } else {
      stopSounds();
      const sound = button.innerText;
      document.getElementById(sound).play();
    }
  });
});


