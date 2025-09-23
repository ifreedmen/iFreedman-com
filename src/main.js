// Main JavaScript for iFreedmen Creative Suite
const brandConfig = {
  "name": "iFreedmen Creative Suite",
  "description": "Flagship hub for sovereignty, culture, commerce, and communications",
  "domains": {
    "main": "ifreedman.com",
    "network": "ifreedmen.net",
    "info": "ifreedmen.info", 
    "shop": "ifreedmen.shop",
    "store": "ifreedmen.store"
  }
};

// Initialize navigation tracking
document.addEventListener('DOMContentLoaded', function() {
  console.log('iFreedmen Creative Suite initialized');
  
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
});