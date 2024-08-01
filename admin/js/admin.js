const createEventForm = document.getElementById('create-event-form');
const createEventBtn = document.getElementById('create-event-btn');
const saveChangesBtn = document.getElementById('save-changes-btn');
const eventsList = document.getElementById('events-list');
const returnBtn = document.getElementById('return-btn');

let events = [];
let isEditing = false;
let editedEventIndex = -1;

// Cargar eventos desde el almacenamiento local
if (localStorage.getItem('events')) {
  events = JSON.parse(localStorage.getItem('events'));
} else {
  events = [];
}

// Agregar fecha de creación a cada evento
events.forEach((event) => {
  event.createdAt = new Date();
});

// Mostrar eventos en la lista cuando se carga la página
renderEvents();

// Función para guardar los eventos en el almacenamiento local
function saveEvents() {
  localStorage.setItem('events', JSON.stringify(events));

}

// Función para cargar los eventos desde el almacenamiento local
function loadEvents() {
  return JSON.parse(localStorage.getItem('events')) || [];
}

// Toggle buttons
function toggleButtons() {
  if (isEditing) {
    createEventBtn.style.display = 'none';
    saveChangesBtn.style.display = 'block';
  } else {
    createEventBtn.style.display = 'block';
    saveChangesBtn.style.display = 'none';
  }
}

// Agregar evento nuevo
createEventBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const eventTitle = document.getElementById('event-title').value;
  const eventDescription = document.getElementById('event-description').value;
  const eventType = document.getElementById('event-type').value;

  // Validar que el título y la descripción no estén vacíos
  if (!eventTitle.trim() || !eventDescription.trim()) {
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
    completed: false,
    type: eventType
  };

  events.push(newEvent);
  saveEvents();
  renderEvents();

  // Limpiar campos de formulario
  document.getElementById('event-title').value = '';
  document.getElementById('event-description').value = '';
});

// Save changes
saveChangesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const eventTitle = document.getElementById('event-title').value.trim();
  const eventDescription = document.getElementById('event-description').value.trim();
  const eventType = document.getElementById('event-type').value.trim();

  if (!eventTitle || !eventDescription || !eventType) {
    alert('Por favor, complete todos los campos antes de guardar');
    return;
  }

  events[editedEventIndex].title = eventTitle;
  events[editedEventIndex].description = eventDescription;
  events[editedEventIndex].type = eventType;
  events[editedEventIndex].hidden = false; // Mostrar el evento de nuevo
  saveEvents();
  isEditing = false;
  editedEventIndex = -1;
  document.getElementById('event-title').value = '';
  document.getElementById('event-description').value = '';
  toggleButtons();
  renderEvents();
});

// Editar un evento
function editEvent(eventIndex) {
  isEditing = true;
  editedEventIndex = eventIndex;
  const event = events[eventIndex];
  document.getElementById('event-title').value = event.title;
  document.getElementById('event-description').value = event.description;
  document.getElementById('event-type').value = event.type;
  toggleButtons();
  renderEvents();
}

// Mostrar eventos en la lista cuando se carga la página
function renderEvents() {
  const eventsListEventsContainer = document.getElementById('events-list-events');
  const eventsListTasksContainer = document.getElementById('events-list-tasks');

  eventsListEventsContainer.innerHTML = '';
  eventsListTasksContainer.innerHTML = '';

  events.forEach((event) => {
    if (!isEditing || events.indexOf(event)!== editedEventIndex) { // Solo mostrar eventos que no estén siendo editados
      const eventHTML = `
        <div class="card mb-3 ${event.completed? 'bg-success' : ''}">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text">${event.description}</p>
          <p class="card-text">Creado el ${formatDate(event.createdAt)}</p>
          <p class="card-text">Tipo: ${event.type}</p>
          <button class="btn btn-sm btn-success" onclick="markAsCompleted(${events.indexOf(event)})">Marcar como completada</button>
          <button class="btn btn-sm btn-primary" onclick="editEvent(${events.indexOf(event)})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="deleteEvent(${events.indexOf(event)})">Eliminar</button>
        </div>
      `;

      if (event.type === 'evento') {
        eventsListEventsContainer.innerHTML += eventHTML;
      } else if (event.type === 'tarea') {
        eventsListTasksContainer.innerHTML += eventHTML;
      }
    }
  });
}

// Marcar un evento como completado
function markAsCompleted(eventIndex) {
  events[eventIndex].completed = true;
  saveEvents();
  renderEvents();
}

// Eliminar un evento
function deleteEvent(eventIndex) {
  events.splice(eventIndex, 1);
  saveEvents();
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

returnBtn.addEventListener('click', () => {
  window.location.href = 'login.html';
});