const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Verificar si el usuario ya existe
    if (localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users.find((user) => user.username === username)) {
            alert('El usuario ya existe');
            return;
        }
    }

    // Crear nuevo usuario
    const user = {
        username,
        password,
        email,
    };

    // Agregar usuario a la lista de usuarios
    if (localStorage.getItem('users')) {
        const users = JSON.parse(localStorage.getItem('users'));
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        localStorage.setItem('users', JSON.stringify([user]));
    }

    // Redireccionar a la página de login
    window.location.href = 'index.html';
});