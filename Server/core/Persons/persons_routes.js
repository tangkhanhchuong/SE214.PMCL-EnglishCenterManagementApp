const express = require('express')

const personsController = require('./persons_controller')

const router = express.Router()

router.get('/students/:studentId', personsController.GetStudentDetails)

router.get('/students', personsController.GetAllStudents)

router.get('/instructors/:instructorId', personsController.GetInstructorDetails)

router.get('/instructors', personsController.GetAllInstructors)

router.get('/attendees', personsController.GetAllAttendees)

router.get('/information', personsController.GetAllPersonalInformation)

module.exports = router
