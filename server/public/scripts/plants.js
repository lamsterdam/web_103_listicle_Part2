const renderPlants = async () => {
    const response = await fetch('/plants')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(plant => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${plant.image})`

            const name = document.createElement('h3')
            name.textContent = plant.name
            bottomContainer.appendChild(name)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + plant.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/plants/${plant.id}`
            // link.href = `/plants/${plant.slug}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })

    } 
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Plants Available 😞'
        mainContent.appendChild(message)
    }
}

renderPlants()

// const requestedUrl = window.location.href.split('/').pop()
// if (requestedUrl) {
//     window.location.href = '../404.html'
// }
// else {
//     renderPlants()
// }
