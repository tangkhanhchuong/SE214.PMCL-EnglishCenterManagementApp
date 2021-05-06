import React, { useState } from 'react'
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom"
import { Formik, Form, FastField } from 'formik';
import {
    Alert, Card, CardHeader, CardBody, Button
} from 'reactstrap';
import Page from 'components/Page';
import PageSpinner from 'components/PageSpinner';

import { Courses } from 'core/HttpRequests'
import InputField from 'components/Form/Formik/InputField'
import SelectField from 'components/Form/Formik/SelectField'

import { DURATIONS, SCHEDULES, MAX_NUM_STUDENTS } from '../constants'

const AddCoursePage = () => {

    const delayRedirectTime = 3000

    const history = useHistory()

    const { mutate, isSuccess } = useMutation(Courses.add)

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/classes')
        }, delayRedirectTime)
    }

    const onAdd = (values) => {
        mutate(values, {
            mutationKey: 'add_class',
            onError: (err) => { console.log(err); },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        name: '', course_id: '', fee: 0, description: ''
    }

    return (
        <Page
            breadcrumbs={[{ name: 'Courses' }]}
            title="Add Course"
        >
            <Card style={{ maxWidth: '600px' }}>
                <CardHeader>
                    <h4><strong>Add Course</strong></h4>
                </CardHeader>
                {isSuccess ?
                    (<Alert color="success">
                        Course was added
                    </Alert>) : <></>
                }
                <Formik
                    initialValues={initialValues}
                    onSubmit={onAdd}
                >
                    <Form>
                        <CardBody>
                            <FastField
                                name='course_id'
                                component={InputField}
                                label='Course Id: '
                            />
                            <FastField
                                name='name'
                                component={InputField}
                                label='Course Name: '
                            />
                            <FastField
                                name='fee'
                                component={InputField}
                                label='Fee (VND): '
                                type='number'
                            />
                            <FastField
                                name='description'
                                component={InputField}
                                label='Description: '
                                type='textarea'
                            />
                            <Button color='success' type='submit'>Add</Button>
                        </CardBody>
                    </Form>
                </Formik>
            </Card>
        </Page >
    )
}

export default AddCoursePage

