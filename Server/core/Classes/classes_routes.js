const express = require('express')

const classesController = require('./classes_controller')

const router = express.Router()

router.route('/')
    .get(classesController.GetAllClasses)
    .post(classesController.CreateClass)

router.route('/:classId')
    .get(classesController.GetClassDetails)
    .patch(classesController.UpdateClass)
    .delete(classesController.DeleteClass)

router.route('/:classId/students')
    .get(classesController.GetStudentsInClass)

router.route('/:classId/instructors')
    .get(classesController.GetInstructorsInClass)

module.exports = router
