import {pool} from './database.js'
import './dotenv.js'
import plantData from '../data/plants.js'

const createPlantsTable = async() => {
    const createTableQuery = `
        DROP TABLE IF EXISTS plants;

        CREATE TABLE IF NOT EXISTS plants (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            slug VARCHAR(255) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 plants table created successfully')
    } catch (err) {
        console.error('⚠️ error creating plants table', err)
    }
}

const seedPlantsTable = async() => {
    await createPlantsTable()

    plantData.forEach((plant) => {
        const insertQuery = {
            text: 'INSERT INTO plants (name, slug, audience, image, description) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            plant.name,
            plant.slug,
            plant.audience,
            plant.image,
            plant.description
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting plant', err)
                return
            }
            console.log(`✅ ${plant.name} added successfully`)
        })
    })
}

seedPlantsTable()
