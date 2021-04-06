import React from 'react'

import { Button, Form, Input, Label, FormGroup } from 'reactstrap';
import Page from 'components/Page';
import { NavLink } from 'react-router-dom';

const AddPaymentPage = () => {
    return (
        <div>
            <Page
                className="allAssignments"
                breadcrumbs={[{ name: 'Payment' }]}
            >
                <NavLink to='/payment'><Button>Add Payment History</Button></NavLink>
                <div className="mt-3 row d-flex justify-content-center">
                    <div className="col-lg-8 text-left text-dark border rounded p-3">
                        <Form >
                            <h2>Add Payment</h2>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input />
                                <Label>Content</Label>
                                <Input type="textarea" />
                                <Label>File</Label>
                                <Input type="file" />
                            </FormGroup>
                        </Form >
                    </div >
                </div>
            </Page>
        </div>
    )
}

export default AddPaymentPage
