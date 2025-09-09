document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop actual form submit (for now)
            alert("Thanks! We'll get back to you soon.");
            contactForm.reset(); // Clear the form fields
        });
    }
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
});