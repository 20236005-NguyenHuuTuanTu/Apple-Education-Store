const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.pre-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  let nextIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateCarousel(nextIndex);
});

prevButton.addEventListener('click', () => {
  let prevIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateCarousel(prevIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateCarousel(index));
});