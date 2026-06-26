const toggleInput = document.getElementById('coffee-toggle');
const body = document.body;

// Sound effect load karna jo assets folder me hai
const clickSound = new Audio('assets/coffee-click.mp3');

toggleInput.addEventListener('change', function() {
    // 1. Dark theme toggle karne ke liye
    if (this.checked) {
        body.classList.add('dark-theme');
        
        // Sound play karein jab cup fill ho raha ho
        clickSound.currentTime = 0; // Reset sound to start
        clickSound.play();
    } else {
        body.classList.remove('dark-theme');
    }
});