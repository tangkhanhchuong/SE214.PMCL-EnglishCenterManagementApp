const express = require('express')

const coursesController = require('./courses_controller')
const authToken = require('../../utils/helpers/token-decoder')

const router = express.Router()

router.route('/')
    .get(coursesController.GetAllCourses)
    .post(coursesController.CreateCourse)



router.route('/:courseId')
    .get(coursesController.GetCourseDetails)
    .patch(coursesController.UpdateCourse)
    .delete(coursesController.DeleteCourse)


module.exports = router
