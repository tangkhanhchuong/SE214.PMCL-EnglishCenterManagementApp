import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import Page from 'components/Page'

const MaterialsTab = React.lazy(() => import('../components/MaterialsTab'))
const StudentsTab = React.lazy(() => import('../components/StudentsTab'))
const InstructorsTab = React.lazy(() => import('../components/InstructorsTab'))
const GradesTab = React.lazy(() => import('../components/GradesTab'))
const AssignmentsTab = React.lazy(() => import('../components/AssignmentsTab'))
const DescriptionsTab = React.lazy(() => import('../components/DescriptionsTab'))

const ClassDetailPage = (props) => {

    const location = useLocation().pathname
    const classId = location.split('/')[2]

    return (
        <Page
            className="ClassDetailPage"
            breadcrumbs={[{ name: 'My Classes' }, { name: classId }]}
            title={`Class ${classId}`} >
            <Tabs defaultActiveKey="students">
                <Tab eventKey="students" title="Students">
                    <div className="p-3">
                        <StudentsTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="instructors" title="Instructors">
                    <div className="p-3">
                        <InstructorsTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="grades" title="Grades">
                    <div className="p-3">
                        <GradesTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="materials" title="Materials">
                    <div className="p-3">
                        <MaterialsTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="descriptions" title="Descriptions">
                    <div className="p-3">
                        <DescriptionsTab classId={classId} />
                    </div>
                </Tab>
            </Tabs>
        </Page>
    )
}

export default ClassDetailPage