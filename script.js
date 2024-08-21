const navbar = document.querySelector('nav');
// For Smooth Scroll Added Listner On Window Object
window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight) {
        navbar.style.background = 'rgba(255, 255, 255, 0.815)'
        navbar.style.position = 'fixed'; // Hide navbar
    } else {
      navbar.style.position = 'relative'; // Hide navbar
      navbar.style.background = 'transparent'
    }
  });