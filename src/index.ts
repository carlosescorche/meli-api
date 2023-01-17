import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import itemsRouter from './routes/items'

dotenv.config()
const { PORT = '8080' } = process.env

const app = express()
app.use(cors())
app.use(express.json())

// Implementa el `router` encargado en disponibilizar 
// las rutas de buscar y obtener productos.
app.use('/api/items', itemsRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
