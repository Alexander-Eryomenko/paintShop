$(document).ready(function(){
  $('.popular__slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/popular-slider/circle-left.svg" alt="arrowleft"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/popular-slider/circle-right.svg" alt="arrowright"></button>',
    dots: true,
    slidesToShow: 4,
    speed: 1000,
  });
});