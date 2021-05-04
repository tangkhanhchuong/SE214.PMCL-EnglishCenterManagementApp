const express = require('express')

const materialsController = require('./materials_controller')

const router = express.Router()

router.route('/')
    .get(materialsController.GetAllMaterials)
    .post(materialsController.CreateMaterial)

router.route('/:id')
    .get(materialsController.GetMaterialDetails)
    .patch(materialsController.EditMaterial)
    .delete(materialsController.DeleteMaterial)

module.exports = router
