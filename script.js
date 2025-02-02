// Paths to meme audio and visuals
const MEME_ASSETS = {
  "sad-cat": {
    audio: "audio/sad-cat.mp3",
    image: "images/sad-cat.gif"
  },
  "sad-hamster": {
    audio: "audio/sad-hamster.mp3",
    image: "images/sad-hamster.gif"
  },
  "happy-cat": {
    audio: "audio/happy-cat.mp3",
    image: "images/happy-cat.gif"
  }
};

// Handle button click events
document.querySelectorAll(".option").forEach(button => {
  button.addEventListener("click", event => {
    const choice = event.target.dataset.choice;
    playMeme(choice);
  });
});

// Function to play meme based on button choice
function playMeme(choice) {
  // Clear the meme container and hide buttons
  const memeContainer = document.getElementById("memeContainer");
  memeContainer.innerHTML = "";  // Clear the previous meme
  document.querySelector(".button-group").style.display = "none"; // Hide buttons

  // Create and append meme image
  const memeImage = document.createElement("img");
  memeImage.src = MEME_ASSETS[choice].image;
  memeImage.alt = `${choice} meme`;
  memeContainer.appendChild(memeImage);

  // Play meme audio
  const memeAudio = new Audio(MEME_ASSETS[choice].audio);
  memeAudio.loop = true;  // Loop the audio
  memeAudio.play()
    .then(() => console.log("Audio is playing"))
    .catch(error => console.error("Audio play error:", error));
}
