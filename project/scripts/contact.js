// Set the current year for the copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set the last modified date
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString(); // Format to local date and time
document.getElementById('last-modified').textContent = formattedDate;

// Select the form and feedback container
const form = document.getElementById('contact-form');
const feedback = document.getElementById('feedback');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Simulate form submission with a delay for demonstration purposes
    setTimeout(() => {
        feedback.textContent = 'Your message has been sent!';  // Set feedback message
        feedback.style.display = 'block'; // Show feedback message
        form.reset(); // Reset form fields
    }, 1000); // Simulate delay of 1 second
});

