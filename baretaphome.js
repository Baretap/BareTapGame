

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const walletAddress = document.getElementById('walletAddress').value;

  // Tallenna käyttäjän tiedot
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('walletAddress', walletAddress);

  alert('Rekisteröinti onnistui!');
});