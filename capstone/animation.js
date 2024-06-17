document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 2s';
            element.style.opacity = 1;
        }, 2500); // 500ms delay before starting the fade-in
    });
});
