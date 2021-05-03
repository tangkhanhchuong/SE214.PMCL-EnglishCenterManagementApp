const router = require('express').Router()

const controller = require('./students_controller')

router.route('/')
    .get(controller.GetStudents)
    .post(controller.CreateStudent)

router.route('/:id')
    .get(controller.GetStudentDetails)
    .patch(controller.EditStudent)
    .delete(controller.RemoveStudent)

module.exports = router