function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("nav-active");
}

//About JS ------------->


// Toggle More Text
function toggleText() {
  let moreText = document.getElementById("moreText");
  let moreBtn = document.getElementById("moreBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    moreBtn.textContent = " show less";
  } else {
    moreText.style.display = "none";
    moreBtn.textContent = " more...";
  }
}

/*-----------------Cursor JS-----------------*/

document.addEventListener("DOMContentLoaded", function () {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorDrone = document.querySelector(".cursor-drone");

  document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;

      // Move cursor elements
      cursorDot.style.transform = `translate(${x}px, ${y}px)`;
      cursorDrone.style.transform = `translate(${x}px, ${y}px)`;
  });
});


// Footer JS --------------------------------

document.addEventListener("DOMContentLoaded", () => {
  function openModal(type) {
      const modal = document.getElementById("modal");
      const title = document.getElementById("modal-title");
      const text = document.getElementById("modal-text");

      if (type === "terms") {
          title.innerText = "Terms of Use";
          text.innerHTML = "By using this website, you agree to comply with our terms. The content, images, and materials on this site are owned by TechtoGreen. Unauthorized use or reproduction is strictly prohibited.";
      } else if (type === "privacy") {
          title.innerText = "Privacy Policy";
          text.innerHTML = "We respect your privacy. Your data will not be shared without your consent. We collect minimal information to improve your experience. For more details, contact us.";
      }

      modal.style.display = "flex";
  }

  function closeModal() {
      document.getElementById("modal").style.display = "none";
  }

  window.openModal = openModal;
  window.closeModal = closeModal;

  window.onclick = function(event) {
      const modal = document.getElementById("modal");
      if (event.target === modal) {
          closeModal();
      }
  };
});

