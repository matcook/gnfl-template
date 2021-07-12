menuBtn = document.querySelector('.menu-toggle');
mainNav = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
  console.log('click');
  mainNav.classList.toggle('is-visible');
});
