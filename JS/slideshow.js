
// Slideshow
let slideIndex;
document.addEventListener("DOMContentLoaded", async function() {

    document.querySelectorAll(".dropdown > a").forEach((dropdown) => {
      dropdown.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentElement.classList.toggle("active");
      });
    });
    slideIndex = 1;
    showSlides(slideIndex);
    
  });
// Next/Prev Controls
async function plusSlides(n) {
  await showSlides((slideIndex += n));
}

setTimeout(() => {
    plusSlides(1);
}, 100);

// Show Specific Slide
async function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  await sleep(100)
  slides[slideIndex - 1].style.display = "block";
}

// Auto Slideshow
setInterval(() => {
  plusSlides(1);
}, 6000);