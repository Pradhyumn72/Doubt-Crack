// Mobile Navigation Menu Toggle for DoubtCrack
document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const menuIcon = document.querySelector('header svg.hamburger-icon');
    const navMenu = document.querySelector('.nav-link');
    
    // Check if elements exist
    if (menuIcon && navMenu) {
      // Add click event listener to the menu icon's parent <a> tag
      menuIcon.parentElement.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        // Toggle the active class on the navigation menu
        navMenu.classList.toggle('active');
        
        // Toggle the open class on the hamburger icon for animation
        menuIcon.classList.toggle('open');
      });
      
      // Close menu when clicking on any navigation link
      const navLinks = document.querySelectorAll('.nav-link a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          // Only close the menu if it's in mobile view (max-width: 768px)
          if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('open');
          }
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        // Only process if we're in mobile view
        if (window.innerWidth <= 768) {
          // Check if the click is outside the nav and the hamburger icon
          if (!navMenu.contains(e.target) && 
              !menuIcon.contains(e.target) && 
              !menuIcon.parentElement.contains(e.target)) {
            navMenu.classList.remove('active');
            menuIcon.classList.remove('open');
          }
        }
      });
    }
  });