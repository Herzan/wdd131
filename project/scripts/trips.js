// Get the current year for the copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Get the last modified date and time
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString(); // Converts to local date and time string

// Display the last modified date and time in the footer
document.getElementById('last-modified').textContent = formattedDate;

let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.querySelectorAll('.slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    }
}

// Auto-play feature for the slider
setInterval(() => {
    moveSlide(1);
}, 5000); // Change slide every 5 seconds