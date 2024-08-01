const eventsList = document.getElementById('events-list');

let events = [];

// Cargar eventos desde el almacenamiento interno
if (localStorage.getItem('events')) {
  events = JSON.parse(localStorage.getItem('events'));
}

eventsList.innerHTML = '';
events.forEach((event) => {
  eventsList.innerHTML += `
    <div class="card mb-3">
      <h5 class="card-title">${event.title}</h5>
      <p class="card-text">${event.description}</p>
    </div>
  `;
});