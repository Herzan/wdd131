const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  const productSelect = document.getElementById('productName');
  
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id; // Set the value to the product id
      option.textContent = product.name; // Set the display text to the product name
      productSelect.appendChild(option); // Append the option to the select element
  });
  

// Get the current year for the copyright
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date and time
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString(); // Converts to local date and time string

// Display the last modified date and time in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;
