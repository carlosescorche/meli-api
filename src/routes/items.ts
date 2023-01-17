import express from 'express'
import searchItems from '../services/search'
import getItemDetail from '../services/detail'

const router = express.Router()

// Permite realizar busquedas de productos según 
// parametros de consultas.
router.get('/', function (req, res) {
  searchItems(req.query).then((resp) => {
    res.status(200).send(resp)
  }).catch(() => {
    res.status(500).send('Internal Server Error')
  })
})

// Permite obtener la información de un producto 
// según el id dado. 
router.get('/:id', (req, res) => {
  const id = req.params.id ?? ''
  getItemDetail(id).then((resp) => {
    res.status(200).send(resp)
  }).catch((e) => {
    // Responde 404 en caso de no haber encontrado 
    // el producto de lo contrario recae en error 500.
    if (e.response.status === 404) {
      res.status(404).send('Item Not Found')
    } else {
      res.status(500).send('Internal Server Error')
    }
  })
})

export default router
