import React from 'react'
import { Form, Label, FormGroup } from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'

import Page from 'components/Page'
import GeneralInformation from './GeneralInformation'

const StudentDetailsPage = () => {

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Students' }]}
        >
            <GeneralInformation />
        </Page>
    )
}

export default StudentDetailsPage
