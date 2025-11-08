
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


 const sr = ScrollReveal({
        origin: 'bottom',   
        distance: '50px',   
        duration: 1000,     
        delay: 200,         
        reset: false        
    });

    sr.reveal('.masthead', { delay: 100 });
    sr.reveal('.page-section', { delay: 200 });
    sr.reveal('.portfolio-item', { interval: 150 });
    sr.reveal('.divider-custom', { origin: 'left', delay: 300 });
    sr.reveal('.masthead-avatar', { origin: 'top', delay: 400 });
    sr.reveal('.masthead-heading', { origin: 'bottom', delay: 500 });
    sr.reveal('.masthead-subheading', { origin: 'bottom', delay: 600 });
