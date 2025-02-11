const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

document.addEventListener("DOMContentLoaded", async () => {
    await sleep(1000)
    const progressSection = document.getElementById("progressSection");
    const counters = document.querySelectorAll(".counter");

    if (!progressSection) {
        console.warn("Progress section not found; skipping progress animation.");
        // Set each counter to its target value immediately
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            counter.innerText = target + "+";
        });
        return; // Exit if the progress section is missing
    }

    let started = false; // Ensures the animation runs only once

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
