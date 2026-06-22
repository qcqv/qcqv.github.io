document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const content = document.getElementById('main-content');

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');  // fade overlay
        content.style.filter = 'none';    // remove blur
    });
});