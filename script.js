const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const headingText1 = document.querySelector("h1");
const headingText2 = document.querySelector("h2"); // Added-2

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
    }, index * 800); // 800ms gap between words
  });
};

// Function to animate buttons after text animation is complete
const animateButtons = (words) => {
  setTimeout(() => {
    noButton.classList.add("dust-animation");
  }, (words.length * 800) + 800); // No button appears after the last word and 800ms

  setTimeout(() => {
    yesButton.classList.add("dust-animation");
  }, (words.length * 800) + 1600); // Yes button appears after 800ms delay from No button
};

// Event listener for click on the body to start the animation
document.body.addEventListener("click", () => {
  // Make the heading text visible after click
  headingText1.style.visibility = "visible"; // This will make the text visible
  headingText2.style.visibility = "visible"; // This will make the text visible // Added-2

  const words = splitText(headingText1.textContent);
  const words = splitText(headingText2.textContent);
  headingText1.innerHTML = ""; // Clear original text
  headingText2.innerHTML = ""; // Clear original text // Added-2
  words.forEach(word => headingText1.appendChild(word)); // Append new word spans
  words.forEach(word => headingText2.appendChild(word)); // Append new word spans // Added-2
  animateWords(words); // Animate words one by one
  animateButtons(words); // Trigger button animations after text animation
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
