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