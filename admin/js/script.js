// Mostrar los eventos y tareas en la página
events.forEach((event) => {
    eventsList.innerHTML += `
      <li>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </li>
    `;
  });
  
  tasks.forEach((task) => {
    tasksList.innerHTML += `
      <li>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </li>
    `;
  });