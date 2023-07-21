// Get references to the sections and buttons
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
const changeButton = document.getElementById("changeButton");
const contactForm = document.getElementById("contactForm"); // Added reference to the contact form

// Add click event listeners to the buttons
changeButton.addEventListener("click", () => {
  // Change the text of the button when clicked
  if (changeButton.textContent === "Click Me") {
    changeButton.textContent = "Clicked!";
  } else {
    changeButton.textContent = "Click Me";
  }
});

// Function to toggle the display of a section when its button is clicked
const toggleSection = (section) => {
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
};

// Add click event listeners to the section headers
aboutSection.addEventListener("click", () => toggleSection(aboutSection));
projectsSection.addEventListener("click", () => toggleSection(projectsSection));
contactSection.addEventListener("click", () => toggleSection(contactSection));
