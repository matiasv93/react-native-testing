import express from 'express'
import { Product } from '@monorepo-template/lib/interfaces/product'

const routes = express.Router()

interface Response {
  list: Product[]
}

const response: Response = {
  list: [{ name: 'test' }]
}

routes.get('/', (req, res) => {
  return res.json(response)
})

export default routes
