import React, { useState } from 'react'

import { Card, Table, Button, CardHeader, CardBody, Col, Row } from 'reactstrap'
import Page from 'components/Page'
import { NavLink } from 'react-router-dom'

import NotificationRow from './NotificationRow'
import notificationData from './notificationData'

const AllNotificationPage = () => {
    let getAllNotifications = () => {
        console.log(notificationData.data);
        return (
            notificationData.data.map((row, index) => {
                return (
                    <NotificationRow key={index} history={row} />
                )
            })
        )
    }

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Notifications' }]}
        >
            <NavLink to='/notifications/add'><Button>Add Notification</Button></NavLink>
            <Card className="m-3">
                <CardHeader><h2>All Notifications</h2></CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <Card body>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            {
                                                notificationData.columTitles.map((col, index) => (
                                                    <th key={index}>{col}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getAllNotifications()
                                        }
                                    </tbody>
                                </Table>
                            </Card>
                            <Card body></Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Page>
    )
}

export default AllNotificationPage
