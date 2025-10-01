import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import plantData from '../data/plants.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', (req, res) => {
  res.status(200).json(plantData)
})

router.get('/:plantSlug', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/plant.html'))
})

export default router