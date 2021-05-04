import React from 'react'
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom"
import { useRouteMatch } from 'react-router-dom'
import { Formik, Form, FastField } from 'formik';
import {
    Alert, Card, CardHeader, CardBody, Button
} from 'reactstrap';

import PageSpinner from 'components/PageSpinner'
import Page from 'components/Page';
import InputField from 'components/Form/Formik/InputField'
import RadioField from 'components/Form/Formik/RadioField'
import { Students } from 'core/HttpRequests'

const EditForm = ({ student }) => {
    const convertDate = (date) => {
        if (!date) return
        const yourDate = new Date(date).toISOString().split('T')[0]
        return yourDate
    }

    const { name, gender, dob, phone, email, address, student_id, is_studying } = student

    const delayRedirectTime = 3000

    const { isSuccess, mutate } = useMutation(Students.edit)
    const history = useHistory()

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/students')
        }, delayRedirectTime)
    }

    const onEdit = (values) => {
        const { is_studying } = values
        values = { ...values, is_studying: is_studying[0] === 'on' ? true : false }
        mutate({ info: values, id: student.student_id }, {
            mutationKey: 'edit_student',
            onError: (err) => { console.log(err); },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        name, gender, dob, phone, email, address, student_id, is_studying
    }

    const validate = values => {
        // const errors = {};
        // if (!values.email) {
        //     errors.email = 'Required';
        // } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //     errors.email = 'Invalid email address';
        // }
        // return errors;
    }

    return (
        <Card className=" d-flex  justify-content-around">
            {isSuccess ?
                (<Alert color="warning">
                    Student' information was updated
                </Alert>) : <></>
            }
            <CardHeader>
                <h4><strong>Edit Student</strong>: {student_id}</h4>
            </CardHeader>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onEdit}
            >
                <Form>
                    <CardBody className=" d-flex flex-row  justify-content-around">
                        <div className="flex-grow-1 p-3">
                            <h4>Personal Information</h4>
                            <br />
                            <FastField
                                name='name'
                                component={InputField}
                                label='Full Name'
                                value={name}
                            />
                            <FastField
                                name='gender'
                                component={RadioField}
                                label='Gender'
                                values={["Male", "Female"]}
                                value={gender}
                            />
                            <FastField
                                name='dob'
                                component={InputField}
                                label='Date of birth'
                                type='date'
                                value={convertDate(dob)}
                            />
                            <FastField
                                name='is_studying'
                                component={InputField}
                                label='Is Studying'
                                type='checkbox'
                                value={is_studying}
                            />
                        </div >
                        <div className="flex-grow-1 p-3">
                            <h4>Contact Information</h4>
                            <br />
                            <FastField
                                name='phone'
                                component={InputField}
                                label='Phone'
                                value={phone}
                            />
                            <FastField
                                name='email'
                                component={InputField}
                                label='Email'
                                value={email}
                            />
                            <FastField
                                name='address'
                                component={InputField}
                                label='Address'
                                value={address}
                            />
                            <Button className="mt-3" type='submit' color="warning">Edit</Button>
                        </div >
                    </CardBody>
                </Form>
            </Formik>
        </Card>
    )
}

const EditStudentPage = () => {

    const currentStudentId = useRouteMatch().params.studentId

    const { data, isLoading } = useQuery('student_details', Students.details.bind(this, currentStudentId))

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Students' }]}
            title="Edit Student"
        >
            {
                isLoading ? <PageSpinner /> : <EditForm student={data.data.data.student} />
            }
        </Page>
    )
}

export default EditStudentPage

