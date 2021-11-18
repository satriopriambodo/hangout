const express = require('express')
const router = express.Router()
const Controller = require('../controllers/profileController')

router.get('/:id', Controller.getId)
router.get('/:id/edit', Controller.getEdit)
router.post('/:id/edit', Controller.postEdit)
router.get('/:id/delete', Controller.getDelete)

module.exports = router