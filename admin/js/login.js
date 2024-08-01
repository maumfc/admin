const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar si el usuario existe
    if (localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find((user) => user.username === username);
        if (user && user.password === password) {
            // Redireccionar a la página de administración
            window.location.href = 'admin.html';
        } else {
            alert('Credenciales incorrectas');
        }
    } else {
        alert('No hay usuarios registrados');
    }
});