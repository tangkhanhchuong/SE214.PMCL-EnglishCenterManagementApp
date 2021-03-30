const express = require('express');

const feesController = require('./fees_controller');

const router = express.Router();

router.get('/students', feesController.GetAllStudents);

router.get('/instructors', feesController.GetAllInstructors);

router.get('/attendees', feesController.GetAllAttendees);

module.exports = router;
