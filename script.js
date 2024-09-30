let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;
let wallet = localStorage.getItem('wallet') ? parseInt(localStorage.getItem('wallet')) : 0;

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Score: ${score}`;
}

function updateWallet() {
  const walletElement = document.getElementById('wallet');
  walletElement.textContent = `Wallet: ${wallet}`;
}

function claimScore() {
  wallet += score;
  score = 0;
  localStorage.setItem('wallet', wallet);
  localStorage.setItem('score', score);
  updateScore();
  updateWallet();
}

document.addEventListener('DOMContentLoaded', (event) => {
  const logo = document.getElementById('logo');
  const claimButton = document.getElementById('claim-button');

  logo.addEventListener('click', () => {
    score++;
    updateScore();
  });

  claimButton.addEventListener('click', claimScore);

  updateScore();
  updateWallet();
});
