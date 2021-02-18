/*let slideIndex = 1;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('k-slides');
    let dots = document.getElementsByClassName('k-dot');
    if (n > slides.length) {
      slideIndex = 1;
    };
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    };
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' k-active', '');
    };
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' k-active';
};

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
};

window.onload = () => {  
    showSlides(slideIndex);
};
*/