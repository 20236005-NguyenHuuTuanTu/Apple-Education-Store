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

document.addEventListener("DOMContentLoaded", function(){

    const menuBtn = document.querySelector(".menu-mobile-icon");
    const mobileMenu = document.querySelector("#mobile-menu");
    const closeBtn = document.querySelector("#close-menu");

    menuBtn.addEventListener("click", function(){
        mobileMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", function(){
        mobileMenu.classList.remove("open");
    });

});