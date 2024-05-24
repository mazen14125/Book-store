function goToPage(pageUrl) {
  window.location.href = pageUrl;
}
function toggleDetails(book) {
  const details = book.querySelector('.details');
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('DOMContentLoaded', function () {
  const showAnotherPageButton = document.getElementById('showAnotherPageButton');

  if (showAnotherPageButton) {
      showAnotherPageButton.addEventListener('click', function () {
          window.location.href = 'mas.html';
      });
  }
});
function toggleDetails(book) {
  var details = book.querySelector('.details');
  var amazonLink = book.dataset.amazonLink; // Get the Amazon link from data attribute
  if (details.style.display === 'block') {
      details.style.display = 'none';
  } else {
      details.style.display = 'block';
      if (amazonLink) {
          details.innerHTML += '<p>Amazon Link: <a href="' + amazonLink + '" target="_blank">' + amazonLink + '</a></p>'; // Show Amazon link
      }
  }
}function redirectToAmazon(url) {
  window.open(url, '_blank');
}

