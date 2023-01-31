window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    const firstSwiper = new Swiper('.content__swiper--first', {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.content__swiper-pagination--first',
        clickable: true
      },
      init: true
    })
    const secondSwiper = new Swiper('.content__swiper--second', {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.content__swiper-pagination--second',
        clickable: true
      },
      init: true
    })
    const thirdSwiper = new Swiper('.content__swiper--third', {
      direction: 'horizontal',
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.content__swiper-pagination--third',
        clickable: true
      },
      init: true
    })
  }
}

const text_320px = document.querySelector('.content__text-spoiler--320px');
const spoiler_320px = document.querySelector('.content__button--320px');

function spoiler320px() {
  if(text_320px.style.display == "block") {
    text_320px.style.display = "none";
    spoiler_320px.innerHTML = 
    `<img src="./img/arrow_open.svg">
    <span>Читать далее</span>`;
  } else {
    text_320px.style.display = "block";
    spoiler_320px.innerHTML = 
    `<img src="./img/arrow_close.svg">
    <span>Скрыть</span>`;
  }
};

const text_768px = document.querySelector('.content__text-spoiler--768px');
const spoiler_768px = document.querySelector('.content__button--768px');

function spoiler768px() {
  if(text_768px.style.display == "block") {
    text_768px.style.display = "none";
    spoiler_768px.innerHTML = 
    `<img src="./img/arrow_open.svg">
    <span>Читать далее</span>`;
  } else {
    text_768px.style.display = "block";
    spoiler_768px.innerHTML = 
    `<img src="./img/arrow_close.svg">
    <span>Скрыть</span>`;
  }
};

const firstSwiper = document.querySelector('.content__swiper--first');
const firstSwiperSpoiler = document.querySelector('.content__spoiler--first');

firstSwiperSpoiler.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstSwiper.classList.toggle('content__swiper--first-full');
  this.innerHTML = this.innerHTML === 
  `<img src="./img/arrow_close.svg">
  <span>Скрыть</span> ` ? 
  `<img src="./img/arrow_open.svg">
  <span>Показать всё</span>` : 
  `<img src="./img/arrow_close.svg">
  <span>Скрыть</span> `;
});

const secondSwiper = document.querySelector('.content__swiper--second');
const secondSwiperSpoiler = document.querySelector('.content__spoiler--second');

secondSwiperSpoiler.addEventListener('click', function (evt) {
  evt.preventDefault();
  secondSwiper.classList.toggle('content__swiper--second-full');
  this.innerHTML = this.innerHTML === 
  `<img src="./img/arrow_close.svg">
  <span>Скрыть</span> ` ? 
  `<img src="./img/arrow_open.svg">
  <span>Показать всё</span>` : 
  `<img src="./img/arrow_close.svg">
  <span>Скрыть</span> `;
});

const menu = document.querySelector('.burger');
const burgerMenu = document.querySelector('.button__open');

burgerMenu.addEventListener('click', function(evt) {
  evt.preventDefault;
  menu.classList.toggle('burger__open');
  this.innerHTML = this.innerHTML ===
  `<img src="./img/burger_open.svg">` ?
  `<img src="./img/burger_close.svg">` :
  `<img src="./img/burger_open.svg">`;
})

const content = document.querySelector('.content__header');
const feedback = document.querySelector('.button__repair');
const call = document.querySelector('.button__checkstatus');


document.addEventListener("DOMContentLoaded", function() {
  feedback.addEventListener("click", function() {
      content.classList.toggle('open1');
      this.innerHTML = this.innerHTML ===
      `<img src="./img/burger_open.svg">` ?
      `<img src="./img/repair.svg">` :
      `<img src="./img/burger_open.svg">`;
  })
})

document.addEventListener("DOMContentLoaded", function() {
  call.addEventListener("click", function() {
      content.classList.toggle('open2');
      this.innerHTML = this.innerHTML ===
      `<img src="./img/burger_open.svg">` ?
      `<img src="./img/checkstatus.svg">` :
      `<img src="./img/burger_open.svg">`;
  })
})