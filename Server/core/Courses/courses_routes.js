const express = require('express');

const courseController = require('./courses_controller');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', courseController.getAllCourses);

// router.post('/', authToken, courseController.insertCourse);

// router.get('/:id/classes', courseController.getClassesInCourse);

router.get('/:courseId', courseController.getCourseDetails);


module.exports = router;
