// Elements
const content = document.getElementById("content");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

// Display content with animation on page load
document.addEventListener("DOMContentLoaded", () => {
  content.classList.remove("hidden");
  content.classList.add("visible");
});

// "No" button movement
noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
});

// "Yes" button click action
yesButton.addEventListener("click", () => {
  document.getElementById("yesSound").play();
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});
