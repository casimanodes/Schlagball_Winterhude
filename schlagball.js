  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.bottom_navigation');
    const navbarHeight = navbar.offsetHeight;
    const stickyThreshold = window.innerHeight - navbarHeight; // Adjust if necessary
    const mainIMG = document.querySelector('main img');
    const main = document.querySelector('main');

    window.onscroll = function() {
      if (window.pageYOffset >= stickyThreshold) {
        navbar.classList.add('fixed_top');
        navbar.style.bottom = 'auto'; // Remove bottom positioning when fixed at top

         } else {
        navbar.classList.remove('fixed_top');
        navbar.style.bottom = '0'; // Ensure it stays at the bottom when not fixed at top
      }
    };
  });

  window.onscroll = function() {
    
  }