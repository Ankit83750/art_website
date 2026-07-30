// Placeholder for future interactions

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.opacity = "0.6";
    });

    link.addEventListener("mouseleave", () => {
        link.style.opacity = "1";
    });
});