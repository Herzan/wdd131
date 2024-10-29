// Set last modified date in footer
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

// Wind chill calculation parameters
const temperature = 10; // in °C (set your own value or make dynamic)
const windSpeed = 5; // in km/h (set your own value or make dynamic)

/**
 * Calculates the wind chill factor based on temperature and wind speed.
 * Formula: 13.12 + 0.6215 * temp - 11.37 * (speed^0.16) + 0.3965 * temp * (speed^0.16)
 * @param {number} temp - The temperature in Celsius.
 * @param {number} speed - The wind speed in km/h.
 * @returns {number} The calculated wind chill factor.
 */
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

/**
 * Displays the wind chill factor if the conditions are met.
 * Conditions:
 * - Temperature should be <= 10 °C
 * - Wind speed should be > 4.8 km/h
 */
function displayWindChill() {
  // Check if the wind chill calculation is applicable
  const windChill = (temperature <= 10 && windSpeed > 4.8) 
                    ? `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C` 
                    : "N/A";
  
  // Update the wind chill element with the calculated or "N/A" value
  document.getElementById('wind-chill').textContent = windChill;
}

// Initialize display functions
displayWindChill();

// Additional: Auto-update year in footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

