/*jshint esversion: 6 */


        //Convert pdf to
//https://cloudconvert.com/pdf-to-html



  //Gsap
$(function(){


const landingPage = () => {

var tl = gsap.timeline();

//Nav-list
tl.fromTo('.navbar-nav .nav-item',{
  x: 200,
  opacity:0,
},{
  delay:1,
  duration: 1,
  x:0,
  opacity:1,
});

//Logo
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

//Social-media-icon-bottom-right
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

//Social-media-stagger-effect
tl.fromTo('.home-area .fixed-wrapper .social-icons .icon',{
color:'#007bff',
},{
  color: 'white',
  stagger: 0.2,
},
'>-1'
);


//Mobile-Nav
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

tl.fromTo('.navbar-menu',{
  y: 0,
},{
  y:-10,
  duration: 1,
  repeat: -1,
  yoyo: true
}
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
// },{
//   x:0,
//   ease: 'sine.easeOut',
// });

// ScrollTrigger.create({
//   trigger: ".services-section",
//   start: "top top",
//   end: "bottom 50%+=100px",
//   animation: tween,
// });

};
// const about2 = () => {
//   var tl = gsap.timeline();

//   tl.fromTo('.services-section',{
//     x:-500,
//   },{
//     x:0,
//     ease: 'sine.easeOut',
//     duration:3,
//   });
  
//   ScrollTrigger.create({
//     trigger: ".info-img",
//     start: "top center",
//     end: "bottom center",
//     animation: tl,
//     markers:true,
//   });

// };



$('.about').on('click',function(){
  aboutPage();
  about2();
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

tl.fromTo('.skills', {
  color:'#fff',
},{
  color: '#007bff',
  ease: 'Sine.easeInOut',
  repeat: -1,
  duration: 1.5,
  yoyo: true
});

};

$('.resume').on('click',function(){
  resumePage();
});


const portfolioPage = () => {
var tl = gsap.timeline();

tl.fromTo('.single-item', {
  scale:0,
},{
  scale:1,
  duration: 1.5,
  ease: 'Power.easeInOut',
  stagger:0.3,
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
