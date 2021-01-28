var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var description = document.getElementsByClassName("speaker-description");
  var heads = document.getElementsByClassName("speaker-img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < description.length; i++) {
    description[i].className = description[i].className.replace(" active", "");
    heads[i].className = heads[i].className.replace(" glow-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  description[slideIndex - 1].className += " active";
  heads[slideIndex - 1].className += " glow-active";
}
