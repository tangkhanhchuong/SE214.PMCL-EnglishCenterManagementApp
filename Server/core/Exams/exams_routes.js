const router = require('express').Router()

const controller = require('./exams_controller')

router.route('/')
    .get(controller.GetExams)
    .post(controller.CreateExam)

router.route('/:id')
    .get(controller.GetExamDetails)
    .patch(controller.EditExam)
    .delete(controller.RemoveExam)

module.exports = router