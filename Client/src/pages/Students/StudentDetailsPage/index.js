import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import Page from 'components/Page'

const GeneralInformation = React.lazy(() => import('./GeneralInformation'))
const StudentTuition = React.lazy(() => import('./StudentTuition'))

const ClassDetailPage = (props) => {

    const location = useLocation().pathname
    const studentId = location.split('/')[2]

    return (
        <Page
            className="DetailPage"
            breadcrumbs={[{ name: 'Students' }, { name: studentId }]}
            title={`Student Id: ${studentId}`} >
            <Tabs defaultActiveKey="info">
                <Tab eventKey="info" title="Information">
                    <div className="p-3">
                        <GeneralInformation classId={studentId} />
                    </div>
                </Tab>
                <Tab eventKey="tuition" title="Tuition">
                    <div className="p-3">
                        <StudentTuition classId={studentId} />
                    </div>
                </Tab>
            </Tabs>
        </Page>
    )
}

export default ClassDetailPage