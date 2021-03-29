const express = require('express');

const classController = require('./persons_controller');

const router = express.Router();

router.get('/students', classController.GetAllStudents);

router.get('/instructors', classController.GetAllInstructors);

module.exports = router;
