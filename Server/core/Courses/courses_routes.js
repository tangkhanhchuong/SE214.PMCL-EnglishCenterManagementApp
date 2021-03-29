const express = require('express')

const courseController = require('./courses_controller')
const authToken = require('../../utils/helpers/token-decoder')

const router = express.Router()

router.route('/')
    .get(courseController.GetAllCourses)
    .post(courseController.CreateCourse)



router.route('/:courseId')
    .get(courseController.GetCourseDetails)
    .patch(courseController.UpdateCourse)
    .delete(courseController.DeleteCourse)


module.exports = router
