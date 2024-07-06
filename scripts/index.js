// Clase Activity
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

// Clase Repository
class Repository {
    constructor() {
        this.activities = [];
        this.currentId = 0;  // Para generar IDs únicos
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(this.currentId++, title, description, imgUrl);
        this.activities.push(newActivity);
        return newActivity;
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

// Función de inicialización para crear una instancia del repositorio
function initRepository() {
    return new Repository();
}

// Instancia del repositorio
const activityRepo = initRepository();

// Función para convertir una instancia de Activity en un elemento HTML
function createActivityElement(activity) {
    // Extraer propiedades de la actividad utilizando destructuring
    const { id, title, description, imgUrl } = activity;

    // Crear los elementos HTML que formarán parte de la tarjeta
    const cardActivities = document.createElement('div');
    cardActivities.classList.add('card-activities');
    cardActivities.setAttribute('data-id', id);

    const activityTitle = document.createElement('h3');
    activityTitle.textContent = title;
    activityTitle.classList.add('activity-Title');

    const activityDescription = document.createElement('p');
    activityDescription.textContent = description;
    activityDescription.classList.add('activity-Description');

    const activityImage = document.createElement('img');
    activityImage.src = imgUrl;
    activityImage.alt = title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        removeActivity(id);
    });

    // Appendear los elementos creados anteriormente al <div>
    cardActivities.appendChild(activityImage);
    cardActivities.appendChild(activityTitle);
    cardActivities.appendChild(activityDescription);
    cardActivities.appendChild(deleteButton);

    // Retornar el <div> finalizado con todos los elementos correspondientes dentro
    return cardActivities;
}

// Función para convertir todas las instancias de Activity en elementos HTML y agregarlos al contenedor correspondiente
function displayAllActivities() {
    // Seleccionar el contenedor donde queremos agregar las actividades
    const activityContainer = document.getElementById('activitiesContainer');

    // Vaciar el contenido actual del contenedor
    activityContainer.innerHTML = '';

    // Obtener el listado completo de actividades mediante el método correspondiente de una instancia de Repository
    const allActivities = activityRepo.getAllActivities();

    // Mapear el listado de actividades para convertirlos todos en elementos HTML
    const activityElements = allActivities.map(createActivityElement);

    // Appendear todos los elementos HTML del nuevo array dentro del contenedor seleccionado
    activityElements.forEach(activityElement => {
        activityContainer.appendChild(activityElement);
    });
}

// Función handler para el evento del botón
function handlerbtnact() {
    // Seleccionar los inputs de title, description e imgUrl
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const imageUrlInput = document.getElementById('imageUrl');

    // Tomar los valores ingresados en los inputs y guardarlos en variables
    const title = titleInput.value;
    const description = descriptionInput.value;
    const imageUrl = imageUrlInput.value;

    // Validar que estos valores estén completos
    if (!title || !description || !imageUrl) {
        alert('Por favor, complete todos los campos.');
        return; // Cortar el proceso si hay datos incompletos
    }

    // Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad
    activityRepo.createActivity(title, description, imageUrl);

    // Invocar la función que implementamos en el punto anterior para “refrescar” el contenedor de actividades
    displayAllActivities();

    // Limpiar los inputs después de agregar la actividad
    titleInput.value = '';
    descriptionInput.value = '';
    imageUrlInput.value = '';
}

// Función para eliminar una actividad y actualizar la interfaz
function removeActivity(id) {
    activityRepo.deleteActivity(id);
    displayAllActivities();
}

// Event listener para el botón de agregar actividad
document.getElementById('addActivityBtn').addEventListener('click', handlerbtnact);

// Mostrar todas las actividades en la carga inicial de la página
document.addEventListener('DOMContentLoaded', () => {
    displayAllActivities();
});
