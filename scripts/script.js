// On page load, check if the count of completed reviews exists in localStorage
window.onload = function() {
    // Retrieve the current count of reviews (default to 0 if not set)
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;  // Initialize review count if not found in localStorage
    }
    
    // Display the current review count
    document.getElementById('reviewCountDisplay').innerText = `Completed Reviews: ${reviewCount}`;
};

// Function to handle form submission
function handleFormSubmission(event) {
    // Prevent form submission for validation
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const installationDate = document.getElementById('installationDate').value;

    // Validate form fields
    if (!productName || !rating || !installationDate) {
        displayMessage("Please complete all required fields.");
    } else {
        // Get current review count from localStorage and increment it
        let reviewCount = localStorage.getItem('reviewCount');
        if (!reviewCount) {
            reviewCount = 0;
        }
        reviewCount++;

        // Save the updated count back to localStorage
        localStorage.setItem('reviewCount', reviewCount);

        // Display a success message
        displayMessage("Form submitted successfully!");

        // Update the displayed review count
        document.getElementById('reviewCountDisplay').innerText = `Completed Reviews: ${reviewCount}`;

        // Optionally, reset the form after submission
        document.getElementById('reviewForm').reset();
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
    messageBox.style.backgroundColor = '#4CAF50'; // Green background for success
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

// Initialize product dropdown with sample products
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product dropdown
populateProductSelect(products);

// Add event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', handleFormSubmission);
