const storage = window.localStorage;

// Función para guardar un item en el almacenamiento local
function setItem(key, value) {
  storage.setItem(key, JSON.stringify(value));
}

// Función para obtener un item del almacenamiento local
function getItem(key) {
  return JSON.parse(storage.getItem(key));
}

// Función para eliminar un item del almacenamiento local
function removeItem(key) {
  storage.removeItem(key);
}

// Función para limpiar el almacenamiento local
function clearStorage() {
  storage.clear();
}

export { setItem, getItem, removeItem, clearStorage };