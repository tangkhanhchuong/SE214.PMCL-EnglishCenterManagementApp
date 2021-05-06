import React, { useState } from 'react'
import {
    Card, CardBody, CardHeader,
    Form, FormGroup, FormText,
    Button, Input, Label, Alert
} from 'reactstrap'
import { useHistory } from "react-router-dom"
import { useMutation } from 'react-query'

import { Students } from 'core/HttpRequests'
import Page from 'components/Page'

const delayRedirectTime = 3000

const PayTuitionPage = () => {
    const [studentId, setStudentId] = useState('')
    const [classId, setClassId] = useState('')
    const [courseId, setCourseId] = useState('')
    const [paidAt, setPaidAt] = useState('')
    const [fee, setFee] = useState('')
    const [name, setName] = useState('')

    const { mutate: mutateDetails } = useMutation(Students.details)
    const { mutate: mutatePay, isSuccess: isPaySuccess } = useMutation(Students.pay)

    const history = useHistory()

    const onFindSuccess = (data) => {
        const { name, participatedClasses } = data.data.data.student
        if (name) setName(name)

        const lastedClass = participatedClasses[0]
        if (!lastedClass) return
        const { class_id, course_id, paid_at, fee } = lastedClass
        setClassId(class_id)
        setCourseId(course_id)
        setPaidAt(paid_at)
        setFee(fee)
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
        setCourseId('')
        setClassId('')
        setPaidAt('')
        setFee('')
        setName('')
        if (e.target.value.length > 7) {
            getStudentNameById(e.target.value)
        }
    }

    const onPaySuccess = () => {
        setTimeout(() => {
            history.push(`/students/${studentId}`)
        }, delayRedirectTime)
    }

    const onPayTuition = (e) => {
        e.preventDefault()

        mutatePay({ studentId, classId }, {
            mutationKey: 'pay_tuition',
            onError: (err) => { console.log(err); },
            onSuccess: onPaySuccess
        })
    }

    return (
        <Page
            breadcrumbs={[{ name: 'Students' }]}
            title="Pay Tuition"
        >
            <Card className="flex-grow-1 ml-3" style={{ maxWidth: '600px' }}>
                <CardHeader><h4>Pay Tuition</h4></CardHeader>
                <CardBody>
                    <Form onSubmit={onPayTuition}>
                        {paidAt ?
                            (<Alert color="warning">
                                Tuition was paid {paidAt.split('T')[0]}
                            </Alert>) : <></>
                        }
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
                        <FormGroup>
                            <Label>Course ID</Label>
                            <Input maxLength={8} value={courseId ? courseId : ''} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label>Class ID</Label>
                            <Input maxLength={8} value={classId ? classId : ''} disabled />
                        </FormGroup>
                        <FormGroup>
                            <Label>Tuition</Label>
                            <Input maxLength={8} value={fee ? fee : ''} disabled />
                        </FormGroup>
                        <FormGroup style={{ textAlign: 'right' }}>
                            <Button color="success" disabled={(name === '' || paidAt) ? true : false}>Pay</Button>
                        </FormGroup>
                        {isPaySuccess ?
                            (<Alert color="success">
                                Tuition was paid
                            </Alert>) : <></>
                        }
                    </Form>
                </CardBody>
            </Card>
        </Page>
    )
}

export default PayTuitionPage