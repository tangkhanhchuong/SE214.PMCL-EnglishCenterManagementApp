const express = require('express');

const classController = require('./persons_controller');

const router = express.Router();

router.get('/students', classController.getAllStudents);

// router.post('/', authToken, courseController.insertCourse);

// router.get('/:id/classes', courseController.getClassesInCourse);

router.get('/instructors', classController.getAllInstructors);

module.exports = router;
