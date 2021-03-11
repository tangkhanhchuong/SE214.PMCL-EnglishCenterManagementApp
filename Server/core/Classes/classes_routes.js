const express = require('express');

const classController = require('./classes_controller');

const router = express.Router();

router.get('/', classController.getAllClasses);

// router.post('/', authToken, courseController.insertCourse);

// router.get('/:id/classes', courseController.getClassesInCourse);

router.get('/:classId', classController.getClassDetails);

module.exports = router;
