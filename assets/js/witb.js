function initWitbSlider() {
  // chỉ chạy trên mobile
  if (window.innerWidth > 832) return;

  const items = document.querySelectorAll('.item_in_box li');
  const dots = document.querySelectorAll('.witb-dot');
  let current = 0;

  function goTo(index) {
    // bỏ active cũ
    items[current].classList.remove('active');
    dots[current].classList.remove('active');

    // set active mới
    current = index;
    items[current].classList.add('active');
    dots[current].classList.add('active');
  }

  // khởi tạo item đầu tiên
  items[0].classList.add('active');

  // click dot để chuyển slide
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goTo(index));
  });

  // swipe trên mobile
  let startX = 0;

  const ul = document.querySelector('.item_in_box');

  ul.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  ul.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return; // bỏ qua nếu swipe quá ngắn

    if (diff > 0 && current < items.length - 1) goTo(current + 1); // swipe trái
    if (diff < 0 && current > 0) goTo(current - 1);                 // swipe phải
  });
}

// chạy khi load xong
document.addEventListener('DOMContentLoaded', initWitbSlider);

// chạy lại nếu resize qua lại desktop/mobile
window.addEventListener('resize', initWitbSlider);