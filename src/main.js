// Main JavaScript for iFreedmen Creative Suite
// Load brand configuration (inlined, was config/brand.json)
const brandConfig = {
  "name": "iFreedmen Creative Suite"
  // Add other properties from brand.json as needed
};

// Initialize navigation tracking
document.addEventListener('DOMContentLoaded', function() {
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
});