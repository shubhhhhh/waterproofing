let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active-slide'));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add('active-slide');
  setTimeout(showSlides, 3000);
}

showSlides();


// ===== Hide Header on Scroll =====
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scroll Down → Hide Header
    header.style.top = "-80px"; // adjust based on header height
  } else {
    // Scroll Up → Show Header
    header.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // avoid negative scroll
});


// // ===== Image Slider with Dots =====
// //const slides = document.querySelectorAll('.slider img');
// const dotsContainer = document.querySelector('.dots');
// let currentIndex = 0;

// // Create dots dynamically
// slides.forEach((_, index) => {
//   const dot = document.createElement('span');
//   dot.classList.add('dot');
//   if (index === 0) dot.classList.add('active');
//   dotsContainer.appendChild(dot);

//   // When dot clicked → show that image
//   dot.addEventListener('click', () => {
//     showSlide(index);
//   });
// });

// const dots = document.querySelectorAll('.dot');

// function showSlide(index) {
//   slides[currentIndex].classList.remove('active');
//   dots[currentIndex].classList.remove('active');
//   currentIndex = index;
//   slides[currentIndex].classList.add('active');
//   dots[currentIndex].classList.add('active');
// }

// // Auto change every 4 seconds
// setInterval(() => {
//   let next = (currentIndex + 1) % slides.length;
//   showSlide(next);
// }, 4000);


// ===== Slider Dots Navigation (add this below your other code) =====

// Use the already-declared 'slides' variable
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

// Create dots dynamically based on number of slides
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  // When dot clicked → show that image
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

const dots = document.querySelectorAll('.dot');

// Function to switch slides and dots
function showSlide(index) {
  slides[currentIndex].classList.remove('active-slide');
  dots[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active-slide');
  dots[currentIndex].classList.add('active');
}

// Auto-slide every 4 seconds
setInterval(() => {
  let next = (currentIndex + 1) % slides.length;
  showSlide(next);
}, 4000);
