// Temple Data Array
const temples = [
  {
    location: "Managua, Nicaragua",
    dedicated: "2018-08-19",
    size: "10,000",
    imageUrl: "images/Nicaragua.jfif"
  },
  {
    location: "Washington D.C., USA",
    dedicated: "1974-11-19",
    size: "156,558",
    imageUrl: "images/St._George.jpg"
  },
  {
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    size: "253,015",
    imageUrl: "images/Salt_lake.jpg"
  },
  {
    location: "Provo, Utah, United States",
    dedicated: "1972-02-09",
    size: "128,325",
    imageUrl: "images/Provo_UTah.jfif"
  },
  {
    location: "Miami, Florida, United States",
    dedicated: "2014-05-04",
    size: "28,000",
    imageUrl: "images/Miami.jfif"
  },
  {
    location: "San Diego, California, United States",
    dedicated: "1993-04-30",
    size: "72,000",
    imageUrl: "images/diego.jpg"
  },
  {
    location: "Chicago, Illinois, United States",
    dedicated: "1985-08-09",
    size: "37,000",
    imageUrl: "images/chicago-illinois.jfif"
  },
  {
    location: "Los Angeles, California, United States",
    dedicated: "1956-03-11",
    size: "190,614",
    imageUrl: "images/angels.jfif"
  },
  {
    location: "Manhattan, New York, United States",
    dedicated: "2004-06-13",
    size: "34,800",
    imageUrl: "images/manhatan.jfif"
  },
  {
    location: "Phoenix, Arizona, United States",
    dedicated: "2014-11-16",
    size: "58,000",
    imageUrl: "images/phoenix.jpg"
  },
  {
    location: "Toronto, Ontario, Canada",
    dedicated: "2004-04-30",
    size: "119,000",
    imageUrl: "images/Ontario.jpg"
},
{
  location: "Edmonton, Alberta, Canada",
  dedicated: "1999-10-17",
  size: "62,000",
  imageUrl: "images/Edmonto.jpg"
}
];

// Function to display all temples
function displayTemples(filteredTemples) {
  const templeCardsContainer = document.getElementById('temple-cards');
  templeCardsContainer.innerHTML = ""; // Clear existing content

  filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');
      templeCard.innerHTML = `
          <figure>
              <img src="${temple.imageUrl}" alt="${temple.location}" width="250" height="167" loading="lazy">
              <figcaption>${temple.location}</figcaption>
          </figure>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.size} sq ft</p>
      `;
      templeCardsContainer.appendChild(templeCard);
  });
}

// Filters
function filterOld() {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(temple => parseInt(temple.size.replace(/,/g, '')) > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(temple => parseInt(temple.size.replace(/,/g, '')) < 10000);
  displayTemples(smallTemples);
}

// Initial Display of All Temples
document.addEventListener('DOMContentLoaded', () => displayTemples(temples));

// Event Listeners for Buttons
document.querySelector('nav').addEventListener('click', (e) => {
  if (e.target.textContent === 'Home') displayTemples(temples);
  else if (e.target.textContent === 'Old') filterOld();
  else if (e.target.textContent === 'New') filterNew();
  else if (e.target.textContent === 'Large') filterLarge();
  else if (e.target.textContent === 'Small') filterSmall();
});
document.addEventListener("DOMContentLoaded", () => {
  // Footer Date and Last Modified
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;

  const lastModifiedDate = document.lastModified;
  document.getElementById("last-modified").textContent = lastModifiedDate;

  // Responsive Hamburger Menu
  const hamburgerButton = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");

  hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburgerButton.classList.toggle("open");
    hamburgerButton.textContent = hamburgerButton.classList.contains("open") ? "X" : "☰";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("show");
      hamburgerButton.classList.remove("open");
      hamburgerButton.textContent = "☰";
    }
  });
});
