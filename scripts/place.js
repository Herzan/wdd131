// Set last modified date in footer
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

// Wind chill calculation parameters (dynamic values)
const temperature = 10; // in °C (can be dynamic based on the actual data)
const windSpeed = 5; // in km/h (can be dynamic based on the actual data)

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

// Call the function to display wind chill
displayWindChill();

// Additional: Auto-update year in footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Weather icon change based on conditions
const weatherIcon = document.querySelector('.weather-icon');
const weatherConditions = 'sunny';  // Example condition, replace this with dynamic data (e.g., fetched from an API)

if (weatherConditions === 'sunny') {
  weatherIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                             <circle cx="12" cy="12" r="10" fill="#f0c420"/>
                             <line x1="12" y1="2" x2="12" y2="22" stroke="#f0a420" stroke-width="2"/>
                             <line x1="2" y1="12" x2="22" y2="12" stroke="#f0a420" stroke-width="2"/>
                           </svg>`;
} else if (weatherConditions === 'cloudy') {
  weatherIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                             <path fill="#a0a0a0" d="M19.36 10.04c-.56 0-1.09.09-1.58.26-.7-2.08-2.55-3.58-4.88-3.58-2.33 0-4.17 1.5-4.88 3.58-.49-.17-1.02-.26-1.58-.26-2.39 0-4.35 1.96-4.35 4.35s1.96 4.35 4.35 4.35h10.73c2.39 0 4.35-1.96 4.35-4.35s-1.96-4.35-4.35-4.35z"/>
                           </svg>`;
}
