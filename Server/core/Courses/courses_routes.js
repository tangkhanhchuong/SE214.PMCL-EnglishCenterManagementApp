const express = require('express');

const { courseController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', courseController.getCourses);

router.post('/', authToken, courseController.insertCourse);

router.get('/:id/classes', courseController.getClassesInCourse);

router.get('/:id', authToken, courseController.getCourseDetail);


module.exports = router;
