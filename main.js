// HERO AREA SLIDESHOW

let slideshowImages = document.querySelectorAll('.slide-image');
let slideIndex = 1;

if (slideshowImages.length > 0) {
  const playSlides = setInterval(() => {
    nextSlide();
  }, 5000);
}

const nextSlide = () => {
  if (slideIndex == slideshowImages.length) {
    slideIndex = 0;
    slideshowImages[slideshowImages.length - 1].classList.remove('is-visible');
  }
  if (slideIndex > 0) {
    slideshowImages[slideIndex - 1].classList.remove('is-visible');
  }
  slideshowImages[slideIndex].classList.add('is-visible');
  slideIndex++;
};
