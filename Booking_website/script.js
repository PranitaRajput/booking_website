

 document.addEventListener('DOMContentLoaded', function () {
   const swiper = new Swiper('.swiper', {
     // Default parameters
     slidesPerView: 3, // Display 3 slides by default
     spaceBetween: 30, // Space between slides
     loop: true, // Enable looping
     //pagination: {
      // el: '.swiper-pagination',
      // clickable: true,
     //},
     navigation: {
      // nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     breakpoints: {
       // Responsive breakpoints
       0: {
         slidesPerView: 1, // Display 1 slide on smaller screens
         spaceBetween: 10,
       },
       768: {
         slidesPerView: 3, // Display 3 slides on medium to larger screens
         spaceBetween: 30,
       },
     },
   });
 });
 
  
  