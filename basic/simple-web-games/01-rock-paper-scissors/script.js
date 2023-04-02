const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
const message = document.getElementById('message');

const choices = ['바위', '가위', '보'];

rockBtn.addEventListener('click', () => playGame('바위'));
scissorsBtn.addEventListener('click', () => playGame('가위'));
paperBtn.addEventListener('click', () => playGame('보'));

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  if (playerChoice === computerChoice) {
    message.textContent = `비겼습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}`;
  } else if (
    (playerChoice === '바위' && computerChoice === '가위') ||
    (playerChoice === '가위' && computerChoice === '보') ||
    (playerChoice === '보' && computerChoice === '바위')
  ) {
    message.textContent = `축하합니다! 당신이 이겼습니다! 당신: ${playerChoice}, 컴퓨터: ${computerChoice}`;
  } else {
    message.textContent = `아쉽네요! 당신이 졌습니다. 당신: ${playerChoice}, 컴퓨터: ${computerChoice}`;
  }
}