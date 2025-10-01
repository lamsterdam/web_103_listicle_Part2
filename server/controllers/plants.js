import { pool } from '../config/database.js'

const getPlants = async (req, res) => {
     try {
        const results = await pool.query('SELECT * FROM plants ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch {
        res.status(409).json( { error: error.message } )
    }
}

export default {
    getPlants
}