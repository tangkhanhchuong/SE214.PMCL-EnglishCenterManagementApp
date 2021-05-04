import React, { useState } from 'react'
import {
    Card, CardBody, CardHeader,
    Form, FormGroup, FormText,
    Button, Input, Label, Alert
} from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'
import { useMutation } from 'react-query'

import { Classes, Students } from 'core/HttpRequests'

const AddStudentClassForm = (props) => {
    const classId = useRouteMatch().params.classId
    const [studentId, setStudentId] = useState('')
    const [name, setName] = useState('')

    const { mutate: mutateDetails } = useMutation(Students.details)
    const { mutate: mutateAdd, isSuccess: isAddSuccess } = useMutation(Classes.addStudentToClass)

    const onFindSuccess = (data) => {
        const name = data.data.data.student.name
        if (name) setName(name)
    }

    const onAddSuccess = (data) => {

    }

    const getStudentNameById = (studentId) => {
        mutateDetails(studentId, {
            mutationKey: 'student_details',
            onError: (err) => { console.log(err); },
            onSuccess: onFindSuccess
        })
    }

    const onStudentIdFieldChange = (e) => {
        const value = e.target.value
        const lastChar = value[value.length - 1]
        if (isNaN(parseInt(lastChar))) e.target.value = value.slice(0, -1)
        setStudentId(e.target.value)
        setName('')
        if (e.target.value.length > 7) {
            getStudentNameById(e.target.value)
        }
    }

    const onAddStudentToClass = (e) => {
        e.preventDefault()
        mutateAdd({ studentId, classId }, {
            mutationKey: 'student_details',
            onError: (err) => { console.log(err); },
            onSuccess: onAddSuccess
        })
    }

    return (
        <Card className="flex-grow-1 ml-3" style={{ maxHeight: "440px" }
        }>
            <CardHeader><h4>Add Student</h4></CardHeader>
            <CardBody>
                <Form onSubmit={onAddStudentToClass}>
                    <FormGroup>
                        <Label>Role in class</Label>
                        <Input disabled value="Student" />
                    </FormGroup>
                    <FormGroup>
                        <Label>Student ID</Label>
                        <Input value={studentId} onChange={onStudentIdFieldChange} maxLength={8} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Full Name</Label>
                        <Input value={name} disabled />
                        <FormText>This field is generated automatically</FormText>
                    </FormGroup>
                    {isAddSuccess ? <Alert color="success" >Student was added to class</Alert> : <></>}
                    <FormGroup style={{ textAlign: 'right' }}>
                        <Button color="success" disabled={name === '' ? true : false}>Add</Button>
                    </FormGroup>

                </Form>
            </CardBody>
        </Card>
    )
}

export default AddStudentClassForm