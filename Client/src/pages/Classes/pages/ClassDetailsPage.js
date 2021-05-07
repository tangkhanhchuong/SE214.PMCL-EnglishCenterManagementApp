import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'

import Page from 'components/Page'
import PageSpinner from 'components/PageSpinner'
import { Classes } from 'core/HttpRequests'

const StudentsTab = React.lazy(() => import('../components/StudentsTab'))
const InstructorsTab = React.lazy(() => import('../components/InstructorsTab'))
const GradesTab = React.lazy(() => import('../components/GradesTab'))
const DescriptionsTab = React.lazy(() => import('../components/DescriptionsTab'))

const ClassDetailPage = (props) => {

    const location = useLocation().pathname
    const classId = location.split('/')[2]

    const { data, isLoading } = useQuery('class_details', Classes.details.bind(this, classId))

    if (isLoading) return <PageSpinner />

    const classDetails = data.data.data.class

    const { class_id, students, instructors } = classDetails
    return (
        <Page
            breadcrumbs={[{ name: 'Classes' }, { name: classId }]}
            title={`Class ${classId}`} >
            <Tabs defaultActiveKey="grades">
                <Tab eventKey="students" title="Students">
                    <div className="p-3">
                        <StudentsTab classId={classId} students={students} />
                    </div>
                </Tab>
                <Tab eventKey="instructors" title="Instructors">
                    <div className="p-3">
                        <InstructorsTab classId={classId} instructors={instructors} />
                    </div>
                </Tab>
                <Tab eventKey="grades" title="Grades">
                    <div className="p-3">
                        <GradesTab classId={classId} />
                    </div>
                </Tab>
                <Tab eventKey="descriptions" title="Descriptions">
                    <div className="p-3">
                        <DescriptionsTab classDetails={classDetails} />
                    </div>
                </Tab>
            </Tabs>
        </Page>
    )
}

export default ClassDetailPage