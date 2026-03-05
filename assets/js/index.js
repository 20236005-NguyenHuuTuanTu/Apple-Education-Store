document.addEventListener('DOMContentLoaded', () => {

  const navContainer = document.querySelector('.sticky-navigation');
  const stickyHeader = document.querySelector('.sticky');
  
  window.addEventListener('scroll', () => {
      const navPosition = navContainer.getBoundingClientRect().bottom;
      if (navPosition < 0) {
        stickyHeader.classList.add('show');
      } else {
        stickyHeader.classList.remove('show');
      }
    });
});