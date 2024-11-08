// Function to unmute the video and hide the button
function unmuteVideo() {
  const video = document.getElementById("myVideo");
  const unmuteButton = document.getElementById("unmuteButton");
  
  video.muted = false;      // Unmute the video
  unmuteButton.style.display = "none";  // Hide the button
}
