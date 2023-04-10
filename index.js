const popupOpen = document.querySelector(".header__menu-button-lk"); 
const popupBlock = document.querySelector(".popup");

const shadow = document.querySelector(".header__shadow");
const menuOpen = document.querySelector(".header__menu-button_open"); 
const menu = document.querySelector(".header__links");
const body = document.querySelector(".body");

const form = document.querySelector(".contacts__form");

function openPopup() { 
  popupBlock.classList.add("popup_is-opened"); 
}; 

function closePopup() { 
  popupBlock.classList.remove("popup_is-opened"); 
}; 

function openMenu() { 
  menu.classList.add("header__links_is-open");
  shadow.classList.add("header__shadow_is-open");
  menuOpen.classList.add("header__menu-button_close");
  body.classList.add("body-hidden");
  menuOpen.addEventListener("click", closeMenu)
}; 

function closeMenu() { 
  menu.classList.remove("header__links_is-open");
  shadow.classList.remove("header__shadow_is-open");
  menuOpen.classList.remove("header__menu-button_close");
  body.classList.remove("body-hidden");
  menuOpen.removeEventListener('click', closeMenu)
}; 

popupOpen.addEventListener("mousemove", openPopup)
popupBlock.addEventListener("mouseleave", closePopup)

menuOpen.addEventListener("click", openMenu)

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log(`Имя ${evt.target.elements.name.validity.valid}`);
  console.log(`Телефон ${evt.target.elements.pfone.validity.valid}`);
  console.log(`Комент ${evt.target.elements.coment.validity.valid}`);
}); 




const points = document.getElementsByClassName("first__point");



/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("first__container");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
     
   const arrow = slides[slideIndex - 1].querySelector(".first__arrow");
   arrow.addEventListener("click", nextSlide)

   points[slideIndex - 1].classList.add("first__point_active")

   if (slideIndex === 1) {
    points[slides.length - 1].classList.remove("first__point_active")
  }
  else {
    points[slideIndex - 2].classList.remove("first__point_active")
  }
}