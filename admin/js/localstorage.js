// Función para guardar datos en Local Storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Función para obtener datos de Local Storage
  function getData(key) {
    return JSON.parse(localStorage.getItem(key));
  }