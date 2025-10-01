const renderPlant = async () => {
    // const requestedID = parseInt(window.location.href.split('/').pop())
    const requestedSlug = window.location.pathname.split('/').pop()
    const response = await fetch('/plants')
    const data = await response.json()

    const plantContent = document.getElementById('plant-content')
    let plant
    if (data) {
        plant = data.find(plant => plant.slug === requestedSlug)
    }

    if (plant) {
        document.getElementById('image').src = plant.image
        document.getElementById('name').textContent = plant.name
        document.getElementById('audience').textContent = 'Great For: ' + plant.audience
        document.getElementById('description').textContent = plant.description
        document.title = `PlantGuide = ${plant.name}`

    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Plants Available 😞'
        plantContent.appendChild(message)
    }
}

renderPlant()