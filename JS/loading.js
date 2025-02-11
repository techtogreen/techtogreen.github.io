
/*-----------------Loading JS-----------------*/

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".preloader").style.opacity = "0"; // Fade out
        setTimeout(() => {
            document.querySelector(".preloader").style.display = "none"; // Remove
        }, 500); // Small delay for smooth transition
    }, 4000); // 4s delay
});