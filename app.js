window.onscroll = function() {
    const stickyNavbar = document.querySelector('.second-nav');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        stickyNavbar.classList.add('sticky');
    } else {
        stickyNavbar.classList.remove('sticky');
    }
};
