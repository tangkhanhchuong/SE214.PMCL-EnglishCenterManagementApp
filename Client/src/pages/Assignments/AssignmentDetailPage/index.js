import React, { useState } from 'react'

import { Button } from 'reactstrap'
import Page from 'components/Page'
import { NavLink, useRouteMatch } from 'react-router-dom'

import AssignmentContentPage from './AssignmentContentPage'
import SubmissionsPage from './ViewSubmissionsPage'

const AssignmentDetailPage = () => {
    const [viewContent, setViewContent] = useState(true)

    const { path, url, params } = useRouteMatch()
    console.log(params);

    const onChangeViewMode = () => {
        setViewContent((prev) => !prev)
    }

    return (
        <Page
            className="AssignmentDetailPage"
            breadcrumbs={[{ name: 'My Classes' }, { name: params.assignmentId }]}>
            <Button onClick={onChangeViewMode}>{viewContent ? "View Submission" : "View Content"}</Button>
            <div className="mt-3">
                {viewContent ? <AssignmentContentPage /> : <SubmissionsPage />}
            </div>
        </Page>
    )
}

export default AssignmentDetailPage
