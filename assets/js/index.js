// toggleBar menu 
const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header-area")

const toggleNavbar = () => {
  nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => toggleNavbar());

// scrollBartop

const headerElement = document.querySelector('.header-top-area');

const footerElement = document.querySelector(".footer-area");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-top");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-style"></i>`;

footerElement.after(scrollElement);

const scrollTop = () => {
  headerElement.scrollIntoView({
    behavior: "smooth"
  })
}