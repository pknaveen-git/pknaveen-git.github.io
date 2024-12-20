const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");

// Function to apply dust effect animation to text line by line
const animateLine = (line, delay, callback) => {
  const words = splitText(line.textContent);
  line.innerHTML = ""; // Clear original text
  words.forEach(word => line.appendChild(word)); // Append each word wrapped in a span
  animateWords(words, delay, callback);
};

// Function to split text into words and wrap in spans
const splitText = (text) => {
  return text.split(" ").map(word => {
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = word;
    return span;
  });
};

// Function to animate each word in a line
const animateWords = (words, delay, callback) => {
  words.forEach((word, index) => {
    setTimeout(() => {
      word.classList.add("dust-animation");
      if (index === words.length - 1 && callback) callback();
    }, delay + index * 800); // 800ms delay between each word
  });
};

// Function to animate buttons
const animateButtons = (delay) => {
  setTimeout(() => {
    noButton.classList.add("dust-animation");
  }, delay);

  setTimeout(() => {
    yesButton.classList.add("dust-animation");
  }, delay + 800); // 800ms delay between buttons
};

// Event listener for click to trigger animations
document.body.addEventListener("click", () => {
  line1.style.visibility = "visible";
  line2.style.visibility = "visible";

  // Animate first line, then second line, then buttons
  animateLine(line1, 0, () => {
    animateLine(line2, 800, () => {
      animateButtons(800);
    });
  });
});

// Event listener for 'No' button
noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
});

// Event listener for 'Yes' button
yesButton.addEventListener("click", () => {
  document.getElementById('yesSound').play(); // Play sound
  popup.style.display = "block"; // Show popup
  setTimeout(() => popup.style.display = "none", 3000); // Hide popup after 3s
});

// Hide popup initially
popup.style.display = "none";
