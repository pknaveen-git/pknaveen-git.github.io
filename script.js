const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const headingText = document.querySelector("h1");

// Function to split the heading text into words and wrap each word in a span
const splitText = (text) => {
  const words = text.split(" ");
  return words.map(word => {
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = word;
    return span;
  });
};

// Function to animate each word one by one
const animateWords = (words) => {
  words.forEach((word, index) => {
    setTimeout(() => {
      word.classList.add("dust-animation");
    }, index * 300); // 300ms gap between words
  });
};

// Initialize text animation after page load
window.addEventListener("load", () => {
  const words = splitText(headingText.textContent);
  headingText.innerHTML = ""; // Clear original text
  words.forEach(word => headingText.appendChild(word)); // Append new word spans
  animateWords(words); // Animate words one by one
});

// Event listener for 'No' button: Moves the button around
noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
});

// Event listener for 'Yes' button: Displays popup and plays sound
yesButton.addEventListener("click", () => {
  // Play the sound when "Yes" is clicked
  document.getElementById('yesSound').play();
  
  // Display the popup
  popup.style.display = "block";
  
  // Hide the popup after 2 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});

// Hide the popup initially
popup.style.display = "none";

// Function to animate buttons after text animation is complete
const animateButtons = () => {
  setTimeout(() => {
    noButton.classList.add("dust-animation");
  }, 1500); // No button appears after 1.5s

  setTimeout(() => {
    yesButton.classList.add("dust-animation");
  }, 1800); // Yes button appears after 1.8s
};

// Trigger button animation after the words are animated
window.addEventListener("load", animateButtons);
