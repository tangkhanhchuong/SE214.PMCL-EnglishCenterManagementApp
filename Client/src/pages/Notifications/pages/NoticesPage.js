import React from 'react'
import { Col, Row } from 'reactstrap'

import Page from 'components/Page'
import NoticesList from '../components/NoticesList'
import AddNoticeForm from '../components/AddNoticeForm'

const NoticesPage = ({ classId }) => {

    return (
        <Page
            breadcrumbs={[{ name: 'Notices' }]}
            title="All Notices"
        >
            <Row>
                <Col lg="5" md="12" sm="12" xs="12">
                    <AddNoticeForm />
                </Col>
                <Col lg="7" md="12" sm="12" xs="12">
                    <NoticesList />
                </Col>
            </Row>
        </Page>
    )
}

export default NoticesPage
