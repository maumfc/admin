// Información de la fecha
const numeroFecha = document.getElementById('numeroFecha');
const textoFecha = document.getElementById('textoFecha');
const mesFecha = document.getElementById('mesFecha');
const añoFecha = document.getElementById('añoFecha');

// Contenedor de tareas
const contenedorTareas = document.getElementById('contenedorTareas');

const establecerFecha = () => {
    const fecha = new Date();
    numeroFecha.textContent = fecha.toLocaleString('es', { day: 'numeric' });
    textoFecha.textContent = fecha.toLocaleString('es', { weekday: 'long' });
    mesFecha.textContent = fecha.toLocaleString('es', { month: 'short' });
    añoFecha.textContent = fecha.toLocaleString('es', { year: 'numeric' });
};

const agregarNuevaTarea = event => {
    event.preventDefault();
    const { value } = event.target.tareaTexto;
    if (!value) return;
    const tarea = document.createElement('div');
    tarea.classList.add('tarea', 'bordeRedondeado');
    tarea.addEventListener('click', cambiarEstadoTarea);
    tarea.textContent = value;
    contenedorTareas.prepend(tarea);
    event.target.reset();
};

const cambiarEstadoTarea = event => {
    event.target.classList.toggle('hecha');
};

const ordenar = () => {
    const hechas = [];
    const porHacer = [];
    contenedorTareas.childNodes.forEach(el => {
        el.classList.contains('hecha') ? hechas.push(el) : porHacer.push(el);
    });
    return [...porHacer, ...hechas];
}

const renderizarTareasOrdenadas = () => {
    ordenar().forEach(el => contenedorTareas.appendChild(el));
}

establecerFecha();