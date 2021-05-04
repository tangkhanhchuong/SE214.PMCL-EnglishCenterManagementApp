const router = require('express').Router()

const controller = require('./notifications_controller')

router.route('/')
    .get(controller.GetNotifications)
    .post(controller.CreateNotification)

router.route('/:id')
    .get(controller.GetNotificationDetails)
    .delete(controller.RemoveNotification)

module.exports = router