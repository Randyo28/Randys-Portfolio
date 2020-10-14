/*jshint esversion: 6 */
/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.1.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- CUSTOM JS SCRIPTS -----------*/

// (function($) {
//   'use strict';
//   $(function() {
//     // Code here executes When the DOM is loaded...
//   });
//   $(window).on('load', function() {
//     // Code here executes When the page is loaded
//
//   });
// }(jQuery));

        //Convert pdf to
//https://cloudconvert.com/pdf-to-html



  //Gsap
$(function(){


const landingPage = () => {

var tl = gsap.timeline();

tl.fromTo('.navbar-nav .nav-item',{
  x: 200,
  opacity:0,
},{
  delay:1,
  duration: 1,
  x:0,
  opacity:1,
});

tl.fromTo('.img-fluid',{
  x: -270,
  opacity:0,
},{
  opacity:1,
  duration: 1.5,
  x:0,
  ease: 'Power.easeInOut',
},
'>-1.2'
);

tl.fromTo('.social-icons .icon',{
  y: 50,
  opacity:0,
},{
  duration: 0.5,
  y:0,
  opacity:1,
  stagger: 0.2,
},
'>-1'
);

tl.fromTo('.home-area .fixed-wrapper .social-icons .icon',{
color:'#007bff',
},{
  color: 'white',
  stagger: 0.2,
},
'>-1'
);



tl.fromTo('.navbar-menu',{
  x: 200,
  opacity:0,
},{
  duration: 1.5,
  x:0,
  opacity:1,
},
'>-1.6'
);

};

$(window).on('load', function() {
landingPage();
console.log('function loaded');
 });


$('.close-btn').on('click',function(){
  landingPage();
  console.log('it worked');
});

const aboutPage = () => {

var tl = gsap.timeline();

tl.fromTo('.info-section', {
  y:300,
}, {
  y:0,
  duration: 2,
  ease: 'Power.easeInOut',
});



// tl.fromTo('.services-section',{
//   x:-500,
//   ease: 'sine.easeOut',
// },{
//   x:0,
//   duration:3,
// //   scrollTrigger: {
// //   trigger:'.services-section',
// //   start: "bottom bottom",
// //   end: "bottom bottom",
// //   scrub:true,
// //   duration: 5,
// //   delay: 3,
// // }
// });
};
// const about2 = () => {
//   gsap.registerPlugin(ScrollTrigger);
// var tl = gsap.timeline({ScrollTrigger:{
//   trigger:'.services-section',
//     start: "top 50%",
//      end: "bottom 50%",
//      markers:true,
//      scrub:true,
//      duration: 3,
// }});
//
// tl.fromTo('.single-section',{
//   x:-200,
// },{
//   x:0,
// });
//
// };



$('.about').on('click',function(){
  aboutPage();
  // about2();
  console.log('it worked');
});


const resumePage = () =>{
  var tl = gsap.timeline();

tl.fromTo('.section-heading', {
  y:-200,
},{
  y:0,
  duration: 2,
  ease: 'Power.easeInOut',
});

tl.fromTo('.education', {
  x:-150,
},{
  x:0,
  duration: 2,
  ease: 'Power.easeInOut',
},
'>-1.5'
);

tl.fromTo('.experience', {
  x:150,
},{
  x:0,
  duration: 2,
  ease: 'Power.easeInOut',
},
'>-1.7'
);

};

$('.resume').on('click',function(){
  resumePage();
});


const portfolioPage = () => {
var tl = gsap.timeline();

tl.fromTo('.lightbox-content', {
  scale:0,
},{
  scale:1,
  duration: 1.5,
  ease: 'Power.easeInOut',
});

};

$('.portfolio').on('click',function(){
  portfolioPage();
  console.log('it worked');
});








});







    //Scroll-triggers
// ScrollTrigger.defaults({
//     markers:true
//   });

// tl.fromTo("", {
//   x:'100%',
//   ease: "none",
// }, {
//   x:0,
//   scrollTrigger: {
//     trigger: '#main-services',
//     // toggleActions: 'play reverse',
//     start: 'top bottom',
//     end: 'center center',
//      scrub: 1,
//     id:"",
//   }
// });
