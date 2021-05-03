const router = require('express').Router()

const controller = require('./instructors_controller')

router.route('/')
    .get(controller.GetInstructors)
    .post(controller.CreateInstructor)

router.route('/:id')
    .get(controller.GetInstructorDetails)
    .patch(controller.EditInstructor)
    .delete(controller.RemoveInstructor)

module.exports = router