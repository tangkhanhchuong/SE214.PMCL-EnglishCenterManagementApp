import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, CardBody, CardHeader,
    Button
} from 'reactstrap'
import { useQuery } from 'react-query'

import NoticeItem from 'components/NoticeItem'

import { Notices } from 'core/HttpRequests'

const DBNoticeBoard = () => {
    const { data, isSuccess } = useQuery('notifications', Notices.list)

    if (!isSuccess) return <></>

    const notifications = data.data.data.notifications.slice(0, 3)

    return (
        <Card>
            <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <span>Notice Board</span>
                    <Button>
                        <Link style={{ color: 'white' }} to='/notifications'><small>View All</small></Link>
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                {notifications.map(s => <NoticeItem key={s.notification_id} {...s} />)}
            </CardBody>
        </Card>
    )
}

export default DBNoticeBoard
