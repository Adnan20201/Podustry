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
})
