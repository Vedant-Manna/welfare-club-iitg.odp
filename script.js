const feedbackForm = document.getElementById('feedbackForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (e) {
    setTimeout(() => {
      feedbackForm.style.display = 'none';
      thankYouMessage.style.display = 'block';
    }, 500); // Small delay for smoothness
  });
}
