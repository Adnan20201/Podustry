$(function ($){
    'use strict';



   // toggle menu
   var logo = $('.logo');
   var menu = $('.myNavContent ul.nav');
   var toggler = $('.menuToggler');
   toggler.click(function(){
       logo.toggleClass('logoActive');
       menu.toggleClass('menuActive');
   });


   //Pogo Slider

   var mySlider = $('.pogoSlider').pogoSlider({}).data('');

   // Service-slider
   $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
   
   });

   // Portfolio-slider
   $('.portfolio-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
   
   });

   // Blog Slider
   $('.blog-slider').slick({
    prevArrow:'<a href=""><i class="slider-arrow slider-arrow-left fas fa-chevron-left"></i></a>',
    nextArrow:'<a href=""><i class="slider-arrow slider-arrow-right fas fa-chevron-right"></i></a>',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: '0px',
   
   });


   //CounterUP
   $('.counter-number').counterUp({
      delay: 10,
    time: 1000
   });

//client-feedback slider

   $('.client-feedback-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    adaptiveHeight: 'client-img-slider',
    fade: true,
   });

//client-img Slider
   $('.client-img-slider ').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    adaptiveHeight: 'client-feedback-slider',
    
   });


//Brand  slider
   $('.brand-slider').slick({
    prevArrow:'<a href=""><i class="slider-arrow slider-arrow-left fas fa-chevron-left"></i></a>',
    nextArrow:'<a href=""><i class="slider-arrow slider-arrow-right fas fa-chevron-right"></i></a>',
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 10000,
    centerMode: true,
    centerPadding: '0px',
    
   });




    /*------------------ABOUT HTML START-----------------------*/
   
//
   $('.about-team-slider').slick({
      prevArrow:'<a href=""><i class="slider-arrow slider-arrow-right fas fa-chevron-right"></i></a>',
      nextArrow:'<a href=""><i class="slider-arrow slider-arrow-left fas fa-chevron-left"></i></a>',
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 10000,
      centerMode: true,
      centerPadding: '0px',
      
     });
   /*------------------ABOUT HTML END-----------------------*/


   /*-----------------CounterDown---------------------*/
   $('#count-text').countdownCube( {
    
      
         });
   /*-----------------CounterDown---------------------*/

})
