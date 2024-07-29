const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Cargar tareas guardadas al cargar la página
loadTasks();

taskForm.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();

    if(taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='delete'>Eliminar</button>
        `;
        taskList.appendChild(taskItem)
        taskInput.value = '';

        saveTasks(); // Guardar tareas al agregar una nueva

        const deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            saveTasks(); // Guardar tareas al eliminar una
        })
    }
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='delete'>Eliminar</button>
        `;
        taskList.appendChild(taskItem)

        const deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            saveTasks(); // Guardar tareas al eliminar una
        });
    });
}

function saveTasks() {
    const taskItems = Array.from(taskList.querySelectorAll('li span'));
    const taskTexts = taskItems.map(item => item.textContent);
    localStorage.setItem('tasks', JSON.stringify(taskTexts))
}