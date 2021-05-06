const { HttpStatus } = require("../Http/index")
const db = require('../Database/postgres_connector')

const GetNotifications = async (req, res) => {
    const notices = await db('notifications as n')
        .join('notification_class as nc', 'nc.notification_id', 'n.notification_id')
        .select()

    const merged = Object.values(notices.reduce((a, n) => {
        a[n.notification_id] = a[n.notification_id] || { ...n, notification_id: n.notification_id, class_id: new Set() }
        a[n.notification_id].class_id.add(n.class_id)
        return a
    }, {})).map((n) => ({ ...n, notification_id: n.notification_id, class_id: [...n.class_id] }))

    const toAllNotices = await db('notifications')
        .where('to_all', true)
        .select()

    const finalNotices = [...merged, ...toAllNotices]

    HttpStatus.ok(res, {
        count: finalNotices.length,
        notifications: finalNotices.sort((a, b) => {
            const aPost = new Date(a.posted_at)
            const bPost = new Date(b.posted_at)
            return (aPost <= bPost) ? 1 : -1
        })
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
    const { title, content, classesId } = req.body

    const notification_id = Math.random().toString().split('.')[1].slice(0, 8)
    const posted_at = new Date(Date.now())
    const to_all = classesId.indexOf('All') !== -1

    const [newNotification] = await db('notifications')
        .insert({
            notification_id, title, content, posted_at, to_all
        })
        .returning(['notification_id', 'title', 'content', 'posted_at', 'to_all'])

    if (!to_all) {
        for (let class_id of classesId) {
            const [newNotificationClass] = await db('notification_class')
                .insert({
                    class_id, notification_id
                })
                .returning(['class_id', 'notification_id'])
        }
    }

    HttpStatus.ok(res)
}

const RemoveNotification = (req, res) => {

}

module.exports = {
    GetNotifications,
    GetNotificationDetails,
    CreateNotification,
    RemoveNotification,
}

