import React, { useState } from 'react'
import {
    Card, CardBody, CardHeader,
    Form, FormGroup, FormText,
    Button, Input, Label, Alert
} from 'reactstrap'
import { useMutation, useQuery } from 'react-query'

import { Notices, Classes } from 'core/HttpRequests'
import TagInput from './TagInput'

const AddNoticeForm = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [classesId, setClassesId] = useState([])

    const { data, isSuccess } = useQuery('classes', Classes.list)
    const { mutate, isSuccess: isAddSuccess } = useMutation(Notices.add)

    const onAddNotice = (e) => {
        e.preventDefault()
        mutate({ title, content, classesId }, {
            mutationKey: 'notices',
            onError: (err) => { console.log(err); }
        })
    }

    if (!isSuccess) return <></>
    const classes = data.data.data.classes.map(c => ({ id: c.class_id, text: c.class_id }))

    return (
        <Card className="flex-grow-1 ml-3">
            <CardHeader>
                <h4><b>Add Notice</b></h4>
            </CardHeader>
            {isAddSuccess ? <Alert color='success'>Notice was posted</Alert> : <></>}
            <CardBody>
                <Form onSubmit={onAddNotice}>
                    <FormGroup>
                        <Label>Title: </Label>
                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>To: </Label>
                        <TagInput suggestions={classes} onTagsChanged={(tags) => { setClassesId(tags.map(t => t.text)) }} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Content: </Label>
                        <Input type='textarea' rows='8' value={content} onChange={(e) => setContent(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" color='success'>Add</Button>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    )
}

export default AddNoticeForm