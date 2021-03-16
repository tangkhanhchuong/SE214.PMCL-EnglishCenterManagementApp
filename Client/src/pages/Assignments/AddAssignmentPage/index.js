import React from 'react'

import { AuthForm } from 'pages/Auth'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddDocument = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-lg-8 text-left text-dark border rounded p-3">
                <Form >
                    <h2><strong>Add Document</strong></h2>
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
    )
}

export default AddDocument
