const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  let seconds  = 30;
  let timer;
  //


  //
  const timerElement = document.getElementById("timer");
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");

  function displayEmoji() {
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timerElement.textContent = `Time: ${seconds}s`;
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(() => {
      resultElement.textContent = ""; // Clear the result message after a short delay
    }, 2000); // Adjust the delay as needed

    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }


    displayEmoji();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
    startTimer();
    guessInput.focus();
  });

  function startTimer() {
    timer = setInterval(() => {
      seconds--;
      timerElement.textContent = `Time: ${seconds}s`;

      if (seconds <= 0) {
        clearInterval(timer);
        alert("Time's up! Your score: " + score);
        resetGame();
      }
    }, 1000);
  }
  resetGame = () => { 
    guessInput.disabled = true;
    clearInterval(timer);

  }