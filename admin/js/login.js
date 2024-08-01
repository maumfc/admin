const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const returnBtn = document.getElementById('return-btn');

returnBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'events.html';
});


loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificar credenciales
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    if (user.role === 'admin') {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'events.html';
    }
  } else {
    alert('Credenciales incorrectas');
  }
});


registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'register.html';
  });