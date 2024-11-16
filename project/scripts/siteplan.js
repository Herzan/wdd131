document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Year Update
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    // Last Modified Date
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    // Form Validation Example
    const form = document.querySelector(".newsletter-signup form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for subscribing!");
    });
});
