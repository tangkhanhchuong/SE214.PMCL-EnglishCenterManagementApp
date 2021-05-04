const { HttpStatus } = require("../Http/index")
const db = require('../Database/postgres_connector')

const GetNotifications = async (req, res) => {
    const notifications = await db('notifications')
        .select()

    HttpStatus.ok(res, {
        count: notifications.length,
        notifications
    })
}

const GetNotificationDetails = async (req, res) => {
    const [notificationId] = req.params.id

    const notification = await db('notifications')
        .where('notification_id', notificationId)
        .select()

    HttpStatus.ok(res, {
        notification
    })
}

const CreateNotification = async (req, res) => {
    const { title, content, class_id } = req.body

    const notification_id = Math.random().toString().split('.')[1].slice(0, 8)
    const posted_at = new Date(Date.now())

    const [newNotification] = await db('notifications')
        .insert({
            notification_id, title, content, posted_at
        })
        .returning(['notification_id', 'title', 'content', 'posted_at'])

    const [newNotificationClass] = await db('notification_class')
        .insert({
            class_id, notification_id
        })
        .returning(['class_id', 'notification_id'])

    HttpStatus.ok(res, {
        ...newNotification, ...newNotificationClass
    })
}

const RemoveNotification = (req, res) => {

}

module.exports = {
    GetNotifications,
    GetNotificationDetails,
    CreateNotification,
    RemoveNotification,
}

