

function functMenu (){
const menuMobile = document.querySelector('.btn-mobile')
const navMobile = document.querySelector('.js-menu-mobile')

function menuAtivo () {
  navMobile.classList.toggle('ativo')
}

menuMobile.addEventListener('click', menuAtivo)
}

functMenu()







var numSlide = 1;
mostrarSlide(numSlide);

function mudarSlide(ns) {
  mostrarSlide(numSlide += ns)
}

function atualSlide(ns) {
  mostrarSlide(numSlide = ns)
}

function mostrarSlide(ns) {
  var i;
  var slides = document.querySelectorAll(".card-cafe");

  if (ns > slides.length) {
    numSlide = 1;
  }

  if (ns < 1) {
    numSlide = slides.length
  }

  for (i=0; i<slides.length; i++) {
    slides[i].style.display="none"
  }


  slides[numSlide-1].style.display = "block";
}

AOS.init();

var rellax = new Rellax('.rellax');