import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

import ShadowCard from 'components/Card/ShadowCard'

const AddMaterial = () => {
    return (
        <div className="row d-flex justify-content-center m-3">
            <ShadowCard className="col-lg-8 text-left text-dark border rounded p-3">
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
            </ShadowCard >
        </div>
    )
}

export default AddMaterial
