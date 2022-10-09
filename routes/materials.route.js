const express = require('express')
const router = express.Router()
const materialController = require('./../controllers/material.controller')

router.get('/', materialController.getAll)

router.get('/:id', materialController.getOne)

module.exports = router
