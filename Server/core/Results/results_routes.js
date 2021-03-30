const express = require('express')

const resultsController = require('./results_controller')
const authToken = require('../../utils/helpers/token-decoder')

const router = express.Router()

router.route('/')
    .get(resultsController.GetAllAttendees)
    .post(resultsController.GetAllAttendees)



router.route('/:courseId')
    .get(resultsController.GetAllAttendees)
    .patch(resultsController.GetAllAttendees)
    .delete(resultsController.GetAllAttendees)


module.exports = router
