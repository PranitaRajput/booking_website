

 document.addEventListener('DOMContentLoaded', function () {
   const swiper = new Swiper('.swiper', {
     // Default parameters
     slidesPerView: 4, // Display 3 slides by default
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
         slidesPerView: 4, // Display 3 slides on medium to larger screens
         spaceBetween: 30,
       },
     },
   });
 });
 
 document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById('reviewForm');
  const reviewCards = document.getElementById('reviewCards');

  // Load reviews from localStorage on page load
  loadReviews();

  // Handle form submission
  reviewForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const rating = document.getElementById('rating').value;

    // Create a new review object
    const newReview = {
      name: name,
      title: title,
      message: message,
      rating: parseInt(rating)
    };

    // Save the review to localStorage
    saveReview(newReview);

    // Add the review to the DOM
    addReviewToDOM(newReview);

    // Clear the form
    reviewForm.reset();
  });

  // Function to save review to localStorage
  function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }

  // Function to load reviews from localStorage
  function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.forEach(review => addReviewToDOM(review));
  }

  // Function to add review to the DOM
  function addReviewToDOM(review) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'col-md-6', 'mb-4');
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${review.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${review.title}</h6>
          <p class="card-text">${review.message}</p>
          <div class="review-rating">${getStars(review.rating)}</div>
        </div>
      </div>
    `;
    reviewCards.appendChild(card);
  }

  // Function to display stars
  function getStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += '&#9733;'; // Filled star
      } else {
        stars += '&#9734;'; // Empty star
      }
    }
    return `<span class="text-warning">${stars}</span>`;
  }
});


  