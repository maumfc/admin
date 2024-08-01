const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const roleInput = document.getElementById('role');

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const role = roleInput.value.trim();

  // Validar que el nombre de usuario y contraseña no estén vacíos
  if (username === '' || password === '') {
    alert('Por favor, ingrese un nombre de usuario y contraseña válidos');
    return;
  }

  // Validar que la contraseña tenga al menos 8 caracteres
  if (password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres');
    return;
  }

  // Validar que la contraseña contenga al menos una letra mayúscula, una letra minúscula y un número
  if (!password.match(/[a-z]/) ||!password.match(/[A-Z]/) ||!password.match(/[0-9]/)) {
    alert('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número');
    return;
  }

  // Crear nuevo usuario
  const user = {
    username,
    password,
    role
  };

  // Guardar usuario en el almacenamiento interno
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  // Redireccionar a la página de inicio de sesión
  window.location.href = 'login.html';
});