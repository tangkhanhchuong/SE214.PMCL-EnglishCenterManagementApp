import React, { useState } from 'react'
import {
    Card, CardBody, CardHeader,
    Form, FormGroup, FormText,
    Button, Input, Label, Alert
} from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'
import { useMutation } from 'react-query'

import { Classes, Instructors } from 'core/HttpRequests'

const AddInstructorClassForm = (props) => {
    const classId = useRouteMatch().params.classId
    const [instructorId, setInstructorId] = useState('')
    const [name, setName] = useState('')

    const { mutate: mutateDetails } = useMutation(Instructors.details)
    const { mutate: mutateAdd, isSuccess: isAddSuccess } = useMutation(Classes.addInstructorToClass)

    const onFindSuccess = (data) => {
        const name = data.data.data.instructor.name
        if (name) setName(name)
    }

    const onAddSuccess = (data) => {

    }

    const getInstructorNameById = (instructorId) => {
        mutateDetails(instructorId, {
            mutationKey: 'instructor_details',
            onError: (err) => { console.log(err); },
            onSuccess: onFindSuccess
        })
    }

    const onInstructorIdFieldChange = (e) => {
        const value = e.target.value
        const lastChar = value[value.length - 1]
        if (isNaN(parseInt(lastChar))) e.target.value = value.slice(0, -1)
        setInstructorId(e.target.value)
        setName('')
        if (e.target.value.length > 4) {
            getInstructorNameById(`INS-${e.target.value}`)
        }
    }

    const onAddInstructorToClass = (e) => {
        e.preventDefault()
        mutateAdd({ instructorId: `INS-${instructorId}`, classId }, {
            mutationKey: 'instructor_details',
            onError: (err) => { console.log(err); },
            onSuccess: onAddSuccess
        })
    }

    return (
        <Card className="flex-grow-1 ml-3" style={{ maxHeight: "440px" }
        }>
            <CardHeader><h4>Add Instructor</h4></CardHeader>
            <CardBody>
                <Form onSubmit={onAddInstructorToClass}>
                    <FormGroup>
                        <Label>Role in class</Label>
                        <Input disabled value="Instructor" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Instructor ID</Label>
                        <div className='d-flex flex-row'>
                            <Label><i>INS - </i></Label>
                            <Input value={instructorId} onChange={onInstructorIdFieldChange} maxLength={5} style={{ maxWidth: '200px', marginLeft: '5px' }} />
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label>Full Name</Label>
                        <Input value={name} disabled />
                        <FormText>This field is generated automatically</FormText>
                    </FormGroup>
                    {isAddSuccess ? <Alert color="success" >Instructor was added to class</Alert> : <></>}
                    <FormGroup style={{ textAlign: 'right' }}>
                        <Button color="success" disabled={name === '' ? true : false}>Add</Button>
                    </FormGroup>

                </Form>
            </CardBody>
        </Card>
    )
}

export default AddInstructorClassForm