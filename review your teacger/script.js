const reviewForm = document.querySelector('.review-form');
const reviewsContainer = document.querySelector('.reviews-container');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const teacherName = document.getElementById('teacher-name').value;
  const subject = document.getElementById('subject').value;
  const rating = document.querySelector('input[name="rating"]:checked');
  const reviewText = document.getElementById('review-text').value;

  if (rating && reviewText) {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');

    const reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');

    const reviewInfo = document.createElement('div');
    reviewInfo.classList.add('review-info');

    const teacherNameElement = document.createElement('h3');
    teacherNameElement.textContent = teacherName;

    const subjectElement = document.createElement('p');
    subjectElement.textContent = `Subject: ${subject}`;

    reviewInfo.appendChild(teacherNameElement);
    reviewInfo.appendChild(subjectElement);

    const reviewContent = document.createElement('div');
    reviewContent.classList.add('review-content');
    reviewContent.textContent = reviewText;

    const reviewRating = document.createElement('div');
    reviewRating.classList.add('review-rating');
    reviewRating.textContent = `Rating: ${rating.value}/5`;

    reviewHeader.appendChild(reviewInfo);
    reviewCard.appendChild(reviewHeader);
    reviewCard.appendChild(reviewContent);
    reviewCard.appendChild(reviewRating);

    reviewsContainer.appendChild(reviewCard);

    reviewForm.reset();
  } else {
    alert('Please select a rating and write a review.');
  }
});
document.addEventListener("DOMContentLoaded", function() {
    const reviewsContainer = document.querySelector(".reviews-container");

    // Function to create a new review element
    function createReview(teacher, subject, rating, reviewText) {
      const review = document.createElement("div");
      review.classList.add("review");
      review.innerHTML = `
        <h3>Teacher: ${teacher}</h3>
        <p>Subject: ${subject}</p>
        <p>Rating: ${rating} stars</p>
        <p>Review: ${reviewText}</p>
      `;
      reviewsContainer.appendChild(review);
    }

    // Sample reviews data
    const reviewsData = [
      { teacher: "John Doe", subject: "Mathematics", rating: 5, reviewText: "John is an excellent teacher. He explains complex concepts with clarity and patience." },
      { teacher: "Jane Smith", subject: "Science", rating: 4, reviewText: "Jane is very knowledgeable and makes science interesting with her engaging teaching methods." },
      { teacher: "Michael Johnson", subject: "History", rating: 4, reviewText: "Michael's passion for history reflects in his teaching. His lectures are both informative and entertaining." }
    ];

    // Add reviews to the container
    reviewsData.forEach(review => {
      createReview(review.teacher, review.subject, review.rating, review.reviewText);
    });
  });