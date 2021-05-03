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

const CreateNotification = (req, res) => {

}

const RemoveNotification = (req, res) => {

}

const EditNotification = (req, res) => {

}

module.exports = {
    GetNotifications,
    GetNotificationDetails,
    CreateNotification,
    RemoveNotification,
    EditNotification
}

