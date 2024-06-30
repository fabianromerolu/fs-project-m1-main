class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

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

// Instancia del repositorio
const activityRepo = new Repository();

// Función para agregar actividades a la interfaz
function addActivity() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('imageUrl').value;

    if (title && description && imageUrl) {
        const newActivity = activityRepo.createActivity(title, description, imageUrl);
        displayActivity(newActivity);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function displayActivity(activity) {
    const activityContainer = document.getElementById('activitiesContainer');
    
    const cardActivities = document.createElement('div');
    cardActivities.classList.add('card-activities');
    cardActivities.setAttribute('data-id', activity.id);

    const activityTitle = document.createElement('h3');
    activityTitle.textContent = activity.title;
    activityTitle.classList.add('activity-Title');

    const activityDescription = document.createElement('p');
    activityDescription.textContent = activity.description;
    activityDescription.classList.add('activity-Description');

    const activityImage = document.createElement('img');
    activityImage.src = activity.imgUrl;
    activityImage.alt = activity.title;

    cardActivities.appendChild(activityImage);
    cardActivities.appendChild(activityTitle);
    cardActivities.appendChild(activityDescription);

    activityContainer.appendChild(cardActivities);
}

// Ejemplo de uso de deleteActivity
function removeActivity(id) {
    activityRepo.deleteActivity(id);
    const activityContainer = document.getElementById('activitiesContainer');
    const activityToDelete = activityContainer.querySelector(`div[data-id="${id}"]`);
    if (activityToDelete) {
        activityContainer.removeChild(activityToDelete);
    }
}

// Event listener para el botón de agregar actividad
document.getElementById('addActivityBtn').addEventListener('click', addActivity);
