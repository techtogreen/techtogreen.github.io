
// Progress JS ------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const progressSection = document.getElementById("progressSection");
    let started = false; // Ensures the animation runs only once
  
    if (!progressSection) {
        console.error("❌ progressSection not found!");
        return; // Exit if section is missing
    }
  
    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 1500; // Animation duration in milliseconds
        const interval = 40;
        const increment = target / (duration / interval);
  
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, interval);
            } else {
                counter.innerText = target + "+";
            }
        };
  
        updateCounter();
    };
  
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started) {
            started = true;
            counters.forEach(counter => animateCounter(counter));
        }
    }, { threshold: 0.5 });
  
    observer.observe(progressSection);
  });
  