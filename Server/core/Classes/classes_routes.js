const express = require('express')

const classController = require('./classes_controller')

const router = express.Router()

router.route('/')
    .get(classController.GetAllClasses)
    .post(classController.CreateClass)

router.route('/:classId')
    .get(classController.GetClassDetails)
    .patch(classController.UpdateClass)
    .delete(classController.DeleteClass)

router.route('/:classId/students')
    .get(classController.GetStudentsInClass)

router.route('/:classId/instructors')
    .get(classController.GetInstructorsInClass)

module.exports = router
