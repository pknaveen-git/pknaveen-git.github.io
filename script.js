const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const heading = document.querySelector("h1");

noButton.style.visibility = 'hidden'; // Initially hide the "No" button
yesButton.style.visibility = 'hidden'; // Initially hide the "Yes" button
heading.style.visibility = 'hidden'; // Initially hide the heading text

noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
});

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

// Function to animate text appearing word by word
const words = heading.innerText.split(" ");
heading.innerText = ""; // Clear the existing text

let delay = 0;
words.forEach((word, index) => {
  setTimeout(() => {
    heading.innerHTML += word + " "; // Add the word back
    heading.style.visibility = 'visible'; // Make the text visible once added
  }, delay);
  delay += 800; // 800ms delay between each word
});

// Function to animate buttons appearing after the text
setTimeout(() => {
  noButton.style.visibility = 'visible'; // Show the "No" button
}, delay); // Show "No" button after all text has appeared

setTimeout(() => {
  yesButton.style.visibility = 'visible'; // Show the "Yes" button
}, delay + 800); // Show "Yes" button 800ms after "No" button
