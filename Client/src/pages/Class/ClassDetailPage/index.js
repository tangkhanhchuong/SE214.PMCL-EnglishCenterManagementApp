import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import Page from 'components/Page'

import WorkSpace from './WorkSpace'
import ClassAttendees from './ClassAttendees'

const ClassDetailPage = (props) => {
    const [isInWorkSpace, setIsInWorkSpace] = useState(true)

    const classId = props.match.params.classId

    const currentUrl = props.match.url

    return (
        <>
            <Page
                className="ClassDetailPage"
                breadcrumbs={[{ name: 'My Classes' }, { name: currentUrl.split('/')[2] }]} >
                <NavLink to="/classes" style={{ textDecoration: 'none' }}>
                    <Button className="mb-3 mr-3" color="success">Back</Button>
                </NavLink>
                <Button className="mb-3" color='primary' onClick={() => { setIsInWorkSpace(prev => !prev) }}>{isInWorkSpace ? "Attendees" : "Work Space"}</Button >
                <h2>{isInWorkSpace ? "Work Space" : "Attendees List"}</h2>
                {
                    isInWorkSpace ? <WorkSpace /> : <ClassAttendees classId={classId} currentUrl={currentUrl} />
                }
            </Page>
        </>
    )
}

export default ClassDetailPage