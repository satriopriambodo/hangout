const express = require('express')
const router = express.Router()
const destination = require('../controllers/destinationController')
const loginCheck = require('../middlewares/loginCheck')

router.get('/',destination.destinationAll)
router.get('/:location',destination.destinationLocation)

router.use(loginCheck)

router.get('/buy/:id/:location',destination.buyForm)
router.post('/buy',destination.buy)

module.exports = router