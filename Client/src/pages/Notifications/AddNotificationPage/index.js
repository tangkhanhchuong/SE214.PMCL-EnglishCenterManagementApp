import React from 'react'
import { Button, Form, Input, Label, FormGroup } from 'reactstrap'

import Page from 'components/Page'
import ShadowCard from 'components/Card/ShadowCard'
import FileUploads from 'components/FileUploads/MultipleFileUpload'

const AddPaymentPage = () => {
    return (
        <div>
            <Page
                breadcrumbs={[{ name: 'Notifications' }, { name: 'Add Notifications' }]}
            >
                <div className="mt-3 row d-flex justify-content-center">
                    <ShadowCard className="col-lg-8 text-left text-dark border rounded p-3">
                        <Form >
                            <div className="d-flex flex-row justify-content-between"><h4>ADD NOTIFICATIONS</h4></div>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input />
                                <Label>Content</Label>
                                <Input type="textarea" />
                                <Label>File</Label>
                                <FileUploads />
                            </FormGroup>
                        </Form >
                    </ShadowCard >
                </div>
            </Page>
        </div>
    )
}

export default AddPaymentPage
