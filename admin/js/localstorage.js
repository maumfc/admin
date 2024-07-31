// Función para guardar datos en Local Storage
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Función para obtener datos de Local Storage
function getData(key) {
  return JSON.parse(localStorage.getItem(key));
}// localStorage.js
let users = [];

if (localStorage.getItem('users')) {
users = JSON.parse(localStorage.getItem('users'));
}

// Función para guardar datos en Local Storage
function saveData(key, data) {
localStorage.setItem(key, JSON.stringify(data));
}

// Función para obtener datos de Local Storage
function getData(key) {
return JSON.parse(localStorage.getItem(key));
}

// Función para registrar un nuevo usuario
function registerUser(username, password) {
const existingUser = users.find((u) => u.username === username);
if (existingUser) {
  throw new Error('Usuario ya existe');
}
const newUser = { username, password }; 
users.push(newUser);
saveData('users', users);
}

// Función para iniciar sesión
function loginUser(username, password) {
const user = users.find((u) => u.username === username && u.password === password);
if (!user) {
  throw new Error('Credenciales incorrectas');
}
return user;
}

// Función para obtener el usuario actual
function getCurrentUser() {
const user = getData('currentUser');
return user;
}

// Función para establecer el usuario actual
function setCurrentUser(user) {
saveData('currentUser', user);
}

// Función para eliminar el usuario actual
function removeCurrentUser() {
localStorage.removeItem('currentUser');
}

// Exportar las funciones
export {
saveData,
getData,
registerUser,
loginUser,
getCurrentUser,
setCurrentUser,
removeCurrentUser
};