const createEventForm = document.getElementById('create-event-form');
const createEventBtn = document.getElementById('create-event-btn');
const eventsList = document.getElementById('events-list');

let events = [];

// Cargar eventos desde el almacenamiento interno
if (localStorage.getItem('events')) {
  events = JSON.parse(localStorage.getItem('events'));
}

// Agregar fecha de creación a cada evento
events.forEach((event) => {
  event.createdAt = new Date();
});

// Mostrar eventos en la lista cuando se carga la página
function renderEvents() {
  eventsList.innerHTML = '';
  events.forEach((event) => {
    const eventHTML = `
      <div class="card mb-3 ${event.completed? 'bg-success' : ''}">
        <h5 class="card-title">${event.title}</h5>
        <p class="card-text">${event.description}</p>
        <p class="card-text">Creado el ${formatDate(event.createdAt)}</p>
        <button class="btn btn-sm btn-success" onclick="markAsCompleted(${events.indexOf(event)})">Marcar como completada</button>
        <button class="btn btn-sm btn-danger" onclick="deleteEvent(${events.indexOf(event)})">Eliminar</button>
      </div>
    `;
    eventsList.innerHTML += eventHTML;
  });
}
renderEvents();

createEventBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const eventTitle = document.getElementById('event-title').value;
  const eventDescription = document.getElementById('event-description').value;

  // Validar que el título y la descripción no estén vacíos
  if (!eventTitle.trim() ||!eventDescription.trim()) {
    alert('Por favor, ingrese un título y una descripción para el evento');
    return;
  }

  // Validar que el título no se repita
  const existingEvent = events.find((event) => event.title === eventTitle);
  if (existingEvent) {
    alert('Ya existe un evento con ese título');
    return;
  }

  const newEvent = {
    title: eventTitle,
    description: eventDescription,
    createdAt: new Date(),
    completed: false
  };

  events.push(newEvent);

  // Guardar eventos en el almacenamiento interno
  localStorage.setItem('events', JSON.stringify(events));

  renderEvents();

  // Limpiar campos de formulario
  document.getElementById('event-title').value = '';
  document.getElementById('event-description').value = '';
});

// Marcar un evento como completado
function markAsCompleted(eventIndex) {
  events[eventIndex].completed = true;
  localStorage.setItem('events', JSON.stringify(events));
  renderEvents();
}

// Eliminar un evento
function deleteEvent(eventIndex) {
  events.splice(eventIndex, 1);
  localStorage.setItem('events', JSON.stringify(events));
  renderEvents();
}

// Formatear fecha
function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('es-ES', options);
}