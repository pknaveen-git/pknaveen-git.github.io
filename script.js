const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const headingText1 = document.getElementById("heading-text-1");
const headingText2 = document.getElementById("heading-text-2");

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
const animateWords = (words, element) => {
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
  // Make the heading texts visible after click
  headingText1.style.visibility = "visible";
  headingText2.style.visibility = "visible";

  const words1 = splitText(headingText1.textContent);
  headingText1.innerHTML = ""; // Clear original text
  words1.forEach(word => headingText1.appendChild(word)); // Append new word spans
  animateWords(words1, headingText1); // Animate words of first heading

  // After the first heading animation completes, animate the second heading
  setTimeout(() => {
    const words2 = splitText(headingText2.textContent);
    headingText2.innerHTML = ""; // Clear original text
    words2.forEach(word => headingText2.appendChild(word)); // Append new word spans
    animateWords(words2, headingText2); // Animate words of second heading
  }, words1.length * 800 + 800); // Delay second animation after first heading animation

  // Trigger button animations after both heading animations are completed
  setTimeout(() => {
    animateButtons(words1);
  }, (words1.length * 800) + (words2.length * 800) + 1600);
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
