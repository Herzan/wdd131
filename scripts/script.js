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
        // If all fields are filled, simulate form submission (could also send data via AJAX, etc.)
        displayMessage("Form submitted successfully!");
        // Optionally clear the form or redirect (this can be adjusted)
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