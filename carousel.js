//Smooth scroll function

const navigationLinks = document.querySelectorAll(".container-nav a");

navigationLinks.forEach(elem => elem.addEventListener("click", smoothscroll));

function smoothscroll(event){
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop - 110,
    behavior: "smooth"
  })
  console.log(document.querySelector(targetId).offsetTop) - 200;
}

//****************************************








// Carousel function


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(plusSlides, 10000, 1); 

// Zamówienie nr:	133785117
// Transakcja zewnętrzna nr:	payu#2663006
// Data transakcji:	2020-09-28
// Transakcja OVH nr:	payu#2663006