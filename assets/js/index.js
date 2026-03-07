document.addEventListener('DOMContentLoaded', () => {

  const navContainer = document.querySelector('.product-nav');
  const stickyHeader = document.querySelector('.shipping-banner');
  
  window.addEventListener('scroll', () => {
      const navPosition = navContainer.getBoundingClientRect().bottom;
      if (navPosition < 0) {
        stickyHeader.classList.add('shipping-banner--show');
      } else {
        stickyHeader.classList.remove('shipping-banner--show');
      }
    });
});