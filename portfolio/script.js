document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');

    function onScroll() {
        const rect = aboutSection.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
            aboutSection.classList.add('about-dark');
        } else {
            aboutSection.classList.remove('about-dark');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
});
