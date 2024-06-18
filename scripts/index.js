function addActivity() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('imageUrl').value;

    if (title && description && imageUrl) {
        const activityContainer = document.getElementById('activitiesContainer');
        
        const activityCard = document.createElement('div');
        activityCard.classList.add('activity-card');

        const activityTitle = document.createElement('h3');
        activityTitle.textContent = title;
        activityTitle.classList.add('activity-Title');

        const activityDescription = document.createElement('p');
        activityDescription.textContent = description;
        activityDescription.classList.add('activity-Description');

        const activityImage = document.createElement('img');
        activityImage.src = imageUrl;
        activityImage.alt = title;


        activityCard.appendChild(activityImage);
        activityCard.appendChild(activityTitle);
        activityCard.appendChild(activityDescription);

        activityContainer.appendChild(activityCard);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}