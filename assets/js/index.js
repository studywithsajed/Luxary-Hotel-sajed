// toggleBar menu 
const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header-area")

const toggleNavbar = () => {
  nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => toggleNavbar());

// scrollBartop

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block"; // Show the button
  } else {
    scrollBtn.style.display = "none"; // Hide the button
  }
}

// When the user clicks the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
