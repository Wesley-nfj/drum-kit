// Load audio files mapped to keys
const sounds = {
  A: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
  S: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
  D: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
  F: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3')
};

// Play sound and animate button
function playSound(key) {
  const sound = sounds[key.toUpperCase()];
  const button = document.querySelector(`.drum[data-key="${key.toUpperCase()}"]`);
  if (sound && button) {
    sound.currentTime = 0; // rewind to start
    sound.play();
    button.classList.add('playing');
    setTimeout(() => button.classList.remove('playing'), 100);
  }
}

// Listen for key press
document.addEventListener('keydown', (e) => {
  playSound(e.key);
});

// Listen for button clicks
document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', () => {
    playSound(button.getAttribute('data-key'));
  });
});

