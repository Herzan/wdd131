// Get the current year for the copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Get the last modified date and time
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString(); // Converts to local date and time string

// Display the last modified date and time in the footer
document.getElementById('last-modified').textContent = formattedDate;

// Form validation for the newsletter signup
document.querySelector("form").addEventListener("submit", function(event) {
    var email = document.querySelector("input[name='email']").value;
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
    }
});
