    // Function to play audio
    function playAudio() {
      var audio = document.getElementById('myAudio');
      audio.play();
    }

    // Function to restart audio when it ends
    function restartAudio() {
      var audio = document.getElementById('myAudio');
      audio.currentTime = 0; // Reset to the beginning
      audio.play();
    }

    // Add click event listener to play audio
    document.addEventListener('click', playAudio);

    // Add event listener to restart audio when it ends
    document.getElementById('myAudio').addEventListener('ended', restartAudio);

    // Hide the default controls
    var audioElement = document.getElementById('myAudio');
    audioElement.controls = false;