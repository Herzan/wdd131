// Function to handle form submission
function handleFormSubmission(event) {
    // Prevent form submission for validation
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const installationDate = document.getElementById('installationDate').value;

    // Check if all required fields are filled out
    if (!productName || !rating || !installationDate) {
        displayMessage("Please complete all required fields.");
    } else {
        // If all fields are filled, simulate form submission (could also send data via AJAX, etc.)
        displayMessage("Form submitted successfully!");
        // Optional: You could clear the form or redirect to another page
        // document.getElementById('reviewForm').reset();
    }
}

// Function to populate product options in the dropdown
function populateProductSelect(products) {
    const productSelect = document.getElementById('productName');
    
    // Clear existing options (if any)
    productSelect.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = 'Select a Product...';
    productSelect.appendChild(defaultOption);

    // Populate the select element with products
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Set the value to the product id
        option.textContent = product.name; // Set the display text to the product name
        productSelect.appendChild(option); // Append the option to the select element
    });
}

// Function to display messages to the user
function displayMessage(message) {
    // Create a message box element
    const messageBox = document.createElement('div');
    messageBox.textContent = message;
    messageBox.style.position = 'fixed';
    messageBox.style.top = '20px';
    messageBox.style.right = '20px';
    messageBox.style.backgroundColor = '#f44336'; // Red background for error
    messageBox.style.color = 'white';
    messageBox.style.padding = '10px';
    messageBox.style.borderRadius = '5px';
    messageBox.style.zIndex = '1000';

    // Append the message box to the body
    document.body.appendChild(messageBox);

    // Remove the message box after 3 seconds
    setTimeout(() => {
        document.body.removeChild(messageBox);
    }, 3000);
}

// Function to set the current year and last modified date
function setFooterInfo() {
    // Get the current year for the copyright
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Get the last modified date and time
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString(); // Converts to local date and time string

    // Display the last modified date and time in the footer
    document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;
}

// Initialize event listeners
document.getElementById('reviewForm').addEventListener('submit', handleFormSubmission);

// Initialize product dropdown
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product dropdown
populateProductSelect(products);

// Set footer information
setFooterInfo();
