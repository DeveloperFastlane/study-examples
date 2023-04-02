let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.querySelector(".timer-display");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");
const timerModes = document.querySelectorAll(".timer-modes button");

function updateTimerDisplay() {
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          clearInterval(timer);
          isRunning = false;
          updateControlsState();
          return;
        }
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }, 1000);
    isRunning = true;
    updateControlsState();
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  updateControlsState();
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateTimerDisplay();
  updateControlsState();
}

function updateControlsState() {
  startButton.disabled = isRunning;
  pauseButton.disabled = !isRunning;
  resetButton.disabled = !isRunning;
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

timerModes.forEach((mode) => {
  mode.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    updateControlsState();

    if (mode.classList.contains("pomodoro")) {
      minutes = 25;
    } else if (mode.classList.contains("short-break")) {
      minutes = 5;
    } else if (mode.classList.contains("long-break")) {
      minutes = 15;
    }
    seconds = 0; // 초를 초기화합니다.
    updateTimerDisplay();
  });
});


updateTimerDisplay();