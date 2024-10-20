document.getElementById('click-area').addEventListener('click', function() {
    const hiddenContent = document.getElementById('hidden-content');
    hiddenContent.style.display = 'block';
    const centerText = document.getElementById('center-text');
    centerText.style.display = 'none';

    // Play the video
    const video = document.getElementById('video-background');
    video.muted = false;
    video.play();
});

// Volume control
document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', function() {
        const volume = this.value;
        const video = document.getElementById('video-background');
        video.volume = volume;
    });
});

document.getElementById('click-area').addEventListener('click', function() {
    const hiddenContent = document.getElementById('hidden-content');
    hiddenContent.style.display = 'block';
    const centerText = document.getElementById('center-text');
    centerText.style.display = 'none';

    // Play the audio
    const audio = document.getElementById('audio-background');
    audio.muted = false;
    audio.play();
});

// Volume control
document.addEventListener('DOMContentLoaded', function() {
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', function() {
        const volume = this.value;
        const audio = document.getElementById('audio-background');
        audio.volume = volume;
    });
});