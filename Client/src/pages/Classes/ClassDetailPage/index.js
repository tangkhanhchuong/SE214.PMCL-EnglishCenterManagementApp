import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

import Page from 'components/Page'

const MaterialsTab = React.lazy(() => import('./MaterialsTab'))
const ParticipantsTab = React.lazy(() => import('./ParticipantsTab'))
const GradesTab = React.lazy(() => import('./GradesTab'))
const AssignmentsTab = React.lazy(() => import('./AssignmentsTab'))

const ClassDetailPage = (props) => {
    const [isInWorkSpace, setIsInWorkSpace] = useState(true)

    const location = useLocation().pathname
    const classId = location.split('/')[2]

    return (
        <Page
            className="ClassDetailPage"
            breadcrumbs={[{ name: 'My Classes' }, { name: classId }]} >
            <Tabs defaultActiveKey="assignments" id="uncontrolled-tab-example">
                <Tab eventKey="materials" title="Materials">
                    <div className="p-3">
                        <MaterialsTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="participants" title="Participants">
                    <div className="p-3">
                        <ParticipantsTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="grades" title="Grades">
                    <div className="p-3">
                        <GradesTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="assignments" title="Assignments">
                    <div className="p-3">
                        <AssignmentsTab classId={classId} />
                    </div>
                </Tab>
            </Tabs>
        </Page>
    )
}

export default ClassDetailPage