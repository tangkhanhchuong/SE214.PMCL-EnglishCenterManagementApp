import React from 'react'
import { useQuery } from 'react-query'
import { Card, CardBody, CardHeader, Table } from 'reactstrap'

import { Notices } from 'core/HttpRequests'

const NoticesList = () => {
    const convertDate = (date) => {
        if (!date) return
        const yourDate = new Date(date).toISOString().split('T')[0]
        return yourDate
    }

    const { data, isSuccess } = useQuery('notifications', Notices.list)

    if (!isSuccess) return <></>

    const { notifications } = data.data.data

    const getStudentsInClass = () => {
        return (
            notifications.map((row, index) => {
                const { title, content, posted_at, class_id } = row
                return (
                    <tr key={`rows_${index}`}>
                        <td>{title}</td>
                        <td>{content}</td>
                        <td>{class_id ? class_id.join(', ') : 'All'}</td>
                        <td>{convertDate(posted_at)}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <Card className="flex-grow-1 ml-3">
            <CardHeader><h4><b>All Notices</b></h4></CardHeader>
            <CardBody>
                <Card body>
                    <Table >
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>To</th>
                                <th>Posted At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStudentsInClass()
                            }
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default NoticesList
