// Función para registrarse
function register(username, password) {
    // Simulación de registro
    if (username !== '' && password !== '') {
      // Redireccionar a la página de inicio de sesión
      window.location.href = 'login.html';
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
  
  // Agregar evento de click para registrarse
  document.getElementById('register').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    register(username, password);
  });