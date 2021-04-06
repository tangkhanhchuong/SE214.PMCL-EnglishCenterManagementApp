import React, { useState } from 'react'

import { Card, Container, CardHeader, CardBody, CardBlock } from 'reactstrap'
import Page from 'components/Page'
import { NavLink } from 'react-router-dom'

import notificationsData from './notificationsData'
import NotificationRow from './NotificationRow'

const AllNotificationsPage = () => {
    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Notifications' }]}
        >
            <Container className="d-flex flex-row justify-content-center">
                <Card className="mt-3" style={{ maxWidth: "800px", minWidth: "600px" }}>
                    <CardHeader className="d-flex flex-row justify-content-center"><h4>All Notifications</h4></CardHeader>
                    <CardBody>
                        {
                            notificationsData.data.slice(0).reverse().map(noti => (
                                <CardBlock>
                                    <NotificationRow noti={noti} />
                                    <hr />
                                </CardBlock>
                            ))
                        }
                    </CardBody>
                </Card>
            </Container>
        </Page >
    )
}

export default AllNotificationsPage
