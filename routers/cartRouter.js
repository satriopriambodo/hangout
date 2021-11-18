const express = require('express')
const router = express.Router()
const cart = require('../controllers/cartController')

router.get('/',cart.cartForm)
router.post('/',cart.cart)
router.get('/:id',cart.cartAll)
router.get('/:destinationId/:profileId/delete',cart.cartDelete)
router.get('/:dateId/:destinationId/:profileId/edit',cart.cartEdit)
router.post('/:dateId/:destinationId/:profileId/edit',cart.cartEditPost)

module.exports = router