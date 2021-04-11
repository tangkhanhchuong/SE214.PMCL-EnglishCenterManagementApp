import React from 'react'

import {
    Form, Input, Label, FormGroup,
    Card, CardHeader, CardBody
} from 'reactstrap';
import Page from 'components/Page';

const AddStudentPage = () => {
    return (
        <div>
            <Page
                className="allAssignments"
                breadcrumbs={[{ name: 'Students' }]}
                title="Add Student"
            >
                <Card className=" d-flex  justify-content-around">
                    <CardHeader>
                        <h4><strong>Add Student</strong></h4>
                    </CardHeader>
                    <CardBody className=" d-flex flex-row  justify-content-around">
                        <div className="flex-grow-1">
                            <Form className="p-3">
                                <h4><b>Personal Information</b></h4>
                                <br />
                                <FormGroup>
                                    <Label><b>First Name</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Last Name</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Student Id</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <Label><b>Gender</b></Label>
                                    <div className="d-flex flex-row">
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio1" />{' '}
                                        Male
                                    </Label>
                                        </FormGroup>
                                        <FormGroup check className="ml-3">
                                            <Label>
                                                <Input type="radio" name="radio1" />{' '}
                                        Female
                                    </Label>
                                        </FormGroup>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Date Of Birth</b></Label>
                                    <Input type="date" />
                                </FormGroup>
                            </Form >
                        </div >
                        <div className="flex-grow-1">
                            <Form className="p-3">
                                <h4><b>Contact Information</b></h4>
                                <br />
                                <FormGroup>
                                    <Label><b>Phone</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Email</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Street Information</b></Label>
                                    <Input />
                                    <Label><b>Province</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Ward</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>District</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Province</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>City</b></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Country</b></Label>
                                    <Input />
                                </FormGroup>
                            </Form >
                        </div >
                    </CardBody>
                </Card>
            </Page>
        </div>
    )
}

export default AddStudentPage
