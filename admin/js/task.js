// Función para obtener las tareas guardadas en Local Storage
function getTasks() {
    return getData('tasks');
  }
  
  // Función para agregar una tarea a la lista de tareas
  function addTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    saveData('tasks', tasks);
  }
  
  // Función para eliminar una tarea de la lista de tareas
  function removeTask(task) {
    const tasks = getTasks();
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      saveData('tasks', tasks);
    }
  }