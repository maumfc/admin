const returnBtn = document.getElementById('return-btn');

let events = loadEvents();


// Función para cargar los eventos desde el almacenamiento local
function loadEvents() {
  return JSON.parse(localStorage.getItem('events')) || [];
}

// Mostrar eventos en la lista cuando se carga la página
renderEvents();

returnBtn.addEventListener('click', () => {
  window.location.href = 'login.html';
});
// Función para mostrar eventos en la lista
function renderEvents() {
  const eventsListEventsContainer = document.getElementById('events-list-events');
  const eventsListTasksContainer = document.getElementById('events-list-tasks');

  eventsListEventsContainer.innerHTML = '';
  eventsListTasksContainer.innerHTML = '';

  events.forEach((event) => {
    console.log(event); // Agregar esta línea para verificar si cada evento se está cargando correctamente

    const eventHTML = `
      <div class="card mb-3 ${event.completed? 'bg-success' : ''}">
        <h5 class="card-title">${event.title}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text">Creado el ${formatDate(event.createdAt)}</p>
        <p class="card-text">Tipo: ${event.type}</p>
        <button class="btn btn-sm btn-success" onclick="markAsCompleted(${events.indexOf(event)})">Marcar como completada</button>
      </div>
    `;

    if (event.type === 'evento') {
      eventsListEventsContainer.innerHTML += eventHTML;
    } else if (event.type === 'tarea') {
      eventsListTasksContainer.innerHTML += eventHTML;
    }
  });
}

// Marcar un evento como completado
function markAsCompleted(eventIndex) {
  events[eventIndex].completed = true;
  localStorage.setItem('events', JSON.stringify(events));
  renderEvents();
}

// Formatear fecha
function formatDate(date) {
  const dateObject = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return dateObject.toLocaleDateString('es-ES', options);
}