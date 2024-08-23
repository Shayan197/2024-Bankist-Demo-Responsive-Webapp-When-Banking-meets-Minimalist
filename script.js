// ############################ DOM ELEMENTS ########################
//nav
const navbar = document.querySelector("nav");
//section # 2
const transfer = document.getElementById("transfer");
const loan = document.getElementById("loan");
const closing = document.getElementById("closing");
const section2h5 = document.getElementById("section2h5");
const section2p = document.getElementById("section2p");
const section2img = document.getElementById("section-2-img");
const section2Span = document.getElementById("section-2-span");

//section # 3
const slide1 = document.getElementById("slide-1");
const slide2 = document.getElementById("slide-2");
const slide3 = document.getElementById("slide-3");

const btnForward = document.getElementById('btnForward');
const btnBackward = document.getElementById("btnBackward");
const slides = document.querySelectorAll(".slide"); // Get all slides

btnForward.addEventListener('click',function(){
  slide1.style.left = '100%';
  slide2.style.left = '0'
})
// ############################ VERIABELS ########################
//section # 2
let heading1 = "Tranfser money to anyone, instantly! No fees, no BS.";
let paragraph1 =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
let heading2 = "Buy a home or make your dreams come true, with instant loans.";
let heading3 = "No longer need your account? No problem! Close it instantly.";
let paragraph2 =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let paragraph3 =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
let array = [
  "./images/credit-card-svgrepo-com.svg",
  "./images/home-svgrepo-com.svg",
  "./images/user-xmark-alt-1-svgrepo-com.svg",
  "var(--color-secondary-opacity)",
  "var(--color-primary-opacity)",
  "var(--color-tertiary-opacity)"
];
//section # 3
const totalSlides = slides.length;
let count = 0;

// ############################ EVENT LISTNERS ########################

// For Smooth Scroll & Added Listner On Window Object
window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    navbar.style.background = "rgba(255, 255, 255, 0.815)";
    navbar.style.position = "fixed";
  } else {
    navbar.style.position = "relative";
    navbar.style.background = "transparent";
  }
});
//section # 2
transfer.addEventListener("click", function () {
  transfer.style.position = "relative";
  transfer.style.bottom = ".5rem";
  loan.style.bottom = "0";
  closing.style.bottom = "0";
  changeh5AndParagraph(heading1, paragraph1, array[0],array[3]);
});
loan.addEventListener("click", function () {
  loan.style.position = "relative";
  loan.style.bottom = ".5rem";
  transfer.style.bottom = "0";
  closing.style.bottom = "0";
  changeh5AndParagraph(heading2, paragraph2, array[1],array[4]);
});
closing.addEventListener("click", function () {
  closing.style.position = "relative";
  closing.style.bottom = ".5rem";
  loan.style.bottom = "0";
  transfer.style.bottom = "0";
  changeh5AndParagraph(heading3, paragraph3, array[2],array[5]);
});

//SECTION # 3
// Event listener for forward button
btnForward.addEventListener("click", function () {
  count = (count + 1) % totalSlides;
  showSlide(count);
});

// Event listener for backward button
btnBackward.addEventListener("click", function () {
  count = (count - 1 + totalSlides) % totalSlides;
  showSlide(count);
});

// Initialize the slider
showSlide(count);

// ############################ FUNCIONS ########################
//section # 2
function changeh5AndParagraph(h5, p, img, background) {
  section2h5.innerHTML = h5;
  section2p.innerHTML = p;
  section2img.src = img;
  section2Span.style.background = background;
}
//section # 3
// Function to show the current slide based on the count
function showSlide(index) {
  slides.forEach((slide, i) => {
      if (i === index) {
          slide.style.position = "absolute";
          slide.style.left = "50%";
          slide.style.transform = "translateX(-50%)";
          slide.style.opacity = "1";
      } else if (i === (index - 1 + totalSlides) % totalSlides) {
          slide.style.position = "absolute";
          slide.style.right = "100%";
          slide.style.transform = "translateX(-50%)";
          slide.style.opacity = "0";
      } else if (i === (index + 1) % totalSlides) {
          slide.style.position = "absolute";
          slide.style.left = "100%";
          slide.style.transform = "translateX(-50%)";
          slide.style.opacity = "0";
      } else {
          slide.style.position = "absolute";
          slide.style.left = "100%";
          slide.style.transform = "translateX(-50%)";
          slide.style.opacity = "0";
      }
  });
}