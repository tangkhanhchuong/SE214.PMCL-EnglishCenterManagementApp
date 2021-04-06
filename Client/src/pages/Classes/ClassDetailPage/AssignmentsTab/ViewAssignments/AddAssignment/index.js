import React from 'react'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap'

import MultipleFileUpload from 'components/FileUploads/MultipleFileUpload'
import ShadowCard from 'components/Card/ShadowCard'

const AddAssignment = () => {

    return (
        <ShadowCard className="m-3 flex-grow-1" style={{ "maxWidth": "500px" }} >
            <CardHeader><h4>New Assignment</h4></CardHeader>
            <CardBody>
                <Form className="p-3">
                    <FormGroup>
                        <Label>Title</Label>
                        <Input />
                        <br />
                    </FormGroup>
                    <FormGroup>
                        <Label>Assignment Content</Label>
                        <Input type="textarea" rows="4" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Attached Files</Label>
                        <MultipleFileUpload />
                        <FormText color="muted">
                            This is attached files
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label>Notices</Label>
                        <Input type="textarea" rows="2" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDate">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                        />
                    </FormGroup>
                    <Button color="primary">Add</Button>
                </Form>
            </CardBody>
        </ShadowCard>
    )
}

export default AddAssignment
