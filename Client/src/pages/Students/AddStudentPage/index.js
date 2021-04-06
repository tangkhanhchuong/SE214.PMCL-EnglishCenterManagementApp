import React from 'react'

import {
    Form, Input, Label, FormGroup,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Page from 'components/Page';
import { NavLink } from 'react-router-dom';

const AddStudentPage = () => {
    return (
        <div>
            <Page
                className="allAssignments"
                breadcrumbs={[{ name: 'Students' }]}
            >
                <div className="d-flex flex-row  justify-content-around">
                    <div className="card p-3" style={{ minWidth: "400px !important", width: "600px" }}>
                        <Form className="p-3">
                            <h4>Personal Information</h4>
                            <hr />
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Student Id</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label>Gender</Label>
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
                                <Label>Date Of Birth</Label>
                                <Input type="date" />
                                <br />
                            </FormGroup>
                        </Form >
                    </div >
                    <div className="card p-3" style={{ minWidth: "400px !important", width: "600px" }}>
                        <Form className="p-3">
                            <h4>Contact Information</h4>
                            <hr />

                            <FormGroup>
                                <Label>Phone</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Street Information</Label>
                                <Input />
                                <br />
                                <Label>Province</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Ward</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>District</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Province</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>City</Label>
                                <Input />
                                <br />
                            </FormGroup>
                            <FormGroup>
                                <Label>Country</Label>
                                <Input />
                                <br />
                            </FormGroup>
                        </Form >
                    </div >
                </div>
            </Page>
        </div>
    )
}

export default AddStudentPage
