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





  //Gsap

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
  stagger:0.2,
},
'>-1'
);

tl.fromTo('.navbar-menu',{
  x: 200,
  opacity:0,
},{
  duration: 1,
  x:0,
  opacity:1,
},
'>-1.6'
);

};

landingPage();



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
