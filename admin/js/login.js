const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
    // Redireccionar a la página de administración
    window.location.href = 'admin.html';
  } else if (username === 'user' && password === 'password') {
    // Redireccionar a la página de eventos
    window.location.href = 'events.html';
  } else {
    alert('Credenciales incorrectas');
  }
});