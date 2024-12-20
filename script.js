// Get the content container
const content = document.getElementById("content");

// Wait for the user to click anywhere on the page
document.addEventListener("click", () => {
  // Remove the "hidden" class and add the "visible" class
  content.classList.remove("hidden");
  content.classList.add("visible");
}, { once: true }); // Ensures the event listener runs only once

// Handle "No" button behavior
const noButton = document.getElementById("no-btn");
noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
});

// Handle "Yes" button behavior
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

yesButton.addEventListener("click", () => {
  // Play the sound when "Yes" is clicked
  document.getElementById('yesSound').play();
  
  // Display the popup
  popup.style.display = "block";
  
  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});

// Hide the popup initially
popup.style.display = "none";
