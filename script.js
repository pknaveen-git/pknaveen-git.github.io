// Select the video element
const video = document.getElementById("myVideo");

let playCount = 0; // Initialize play count

// Add an event listener to track when the video ends
video.addEventListener("ended", () => {
  playCount += 1; // Increment play count
  
  if (playCount < 2) {
    video.currentTime = 0; // Restart the video
    video.play(); // Play again
  } else {
    video.pause(); // Stop after 2 plays
  }
});
