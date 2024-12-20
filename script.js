const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const textElement = document.querySelector("h1");

// Function to reveal an element with dust particle animation
function revealElement(element, delay) {
  element.style.opacity = "0";
  element.style.display = "inline-block";
  setTimeout(() => {
    element.classList.add("dust-animation");
  }, delay);
}

// Function to display text word by word
function displayTextSequentially() {
  const text = textElement.innerText;
  const words = text.split(" ");
  textElement.innerHTML = ""; // Clear original text

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.style.opacity = "0";
    span.className = "word";
    textElement.appendChild(span);

    setTimeout(() => {
      span.style.opacity = "1";
      span.classList.add("dust-animation");
    }, index * 300); // 300ms delay per word
  });

  // After the last word, reveal buttons sequentially
  setTimeout(() => revealElement(noButton, 0), words.length * 300);
  setTimeout(() => revealElement(yesButton, 300), (words.length + 1) * 300);
}

// Trigger the animation on user click
window.addEventListener("click", () => {
  displayTextSequentially();
});
