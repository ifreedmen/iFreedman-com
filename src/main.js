// Main JavaScript for iFreedmen Creative Suite
// Load brand configuration from config/brand.json

// Initialize navigation tracking
document.addEventListener('DOMContentLoaded', function() {
  fetch('/config/brand.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load brand configuration');
      }
      return response.json();
    })
    .then(brandConfig => {
      console.log(`${brandConfig.name} initialized`);
      // Track external navigation clicks
      const navLinks = document.querySelectorAll('a[target="_blank"]');
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const destination = this.href;
          console.log(`Navigating to: ${destination}`);
        });
      });

      // Add smooth scroll behavior for internal links
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    })
    .catch(error => {
      console.error(error);
    });
});