import express from 'express'
import customerController from '../controllers/customerController.js'
const router = express.Router()

router.get('/', customerController.get)

router.get('/delete', customerController.delete)

router.delete('/', customerController.delete)

router.get('/update', customerController.update)

router.post('/', customerController.create)

export default router