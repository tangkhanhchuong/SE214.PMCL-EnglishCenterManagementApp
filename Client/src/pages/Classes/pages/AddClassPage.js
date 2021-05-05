import React, { useState } from 'react'
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router-dom"
import { Formik, Form, FastField } from 'formik';
import {
    Alert, Card, CardHeader, CardBody, Button
} from 'reactstrap';
import Page from 'components/Page';
import PageSpinner from 'components/PageSpinner';

import { Classes, Courses } from 'core/HttpRequests'
import InputField from 'components/Form/Formik/InputField'
import SelectField from 'components/Form/Formik/SelectField'

import { DURATIONS, SCHEDULES, MAX_NUM_STUDENTS } from '../constants'

const AddClassPage = () => {
    const { data: coursesData, isLoading: fetchCoursesLoading } = useQuery('courses', Courses.list)

    const delayRedirectTime = 3000

    const history = useHistory()

    const { isSuccess, mutate } = useMutation(Classes.add)

    if (fetchCoursesLoading) return <PageSpinner />

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/classes')
        }, delayRedirectTime)
    }

    const onAdd = (values) => {
        const { from, to } = values
        values = { ...values, time_slot: `${from}-${to}` }

        mutate(values, {
            mutationKey: 'add_class',
            onError: (err) => { console.log(err); },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        name: '',
        course_id: '',
        max_students: '',
        schedule: '',
        from: '',
        to: '',
        duration: '',
        begin_at: ''
    }

    return (
        <div>
            <Page
                breadcrumbs={[{ name: 'Classes' }]}
                title="Add Class"
            >
                <Card className=" d-flex  justify-content-around">
                    {isSuccess ?
                        (<Alert color="success">
                            Class was added
                        </Alert>) : <></>
                    }
                    <CardHeader>
                        <h4><strong>Add Class</strong></h4>
                    </CardHeader>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onAdd}
                    >
                        <Form>
                            <CardBody className=" d-flex flex-row  justify-content-around">
                                <div className="flex-grow-1 p-3">
                                    <br />
                                    <FastField
                                        name='name'
                                        component={InputField}
                                        label='Class Name: '
                                    />
                                    <FastField
                                        name='course_id'
                                        component={SelectField}
                                        label='Course Id: '
                                        minWidth='120px'
                                        options={coursesData.data.data.courses.map(c => c.course_id)}

                                    />
                                    <FastField
                                        name='max_students'
                                        component={SelectField}
                                        label='Max number of students: '
                                        options={MAX_NUM_STUDENTS}
                                        unit='students'
                                    />
                                </div >
                                <div className="flex-grow-1 p-3">
                                    <br />
                                    <FastField
                                        name='schedule'
                                        component={SelectField}
                                        label='Schedule: '
                                        options={SCHEDULES}
                                        minWidth='170px'
                                    />
                                    <div className='d-flex flex-row'>
                                        <FastField
                                            name='from'
                                            component={InputField}
                                            label='From: '
                                            type='time'
                                        />
                                        <div style={{ width: '50px' }}></div>
                                        <FastField
                                            name='to'
                                            component={InputField}
                                            label='To: '
                                            type='time'
                                        />
                                    </div>
                                    <FastField
                                        name='duration'
                                        component={SelectField}
                                        label='Duration: '
                                        options={DURATIONS}
                                        minWidth='80px'
                                        unit='months'
                                    />
                                    <FastField
                                        name='begin_at'
                                        component={InputField}
                                        label='Begin At: '
                                        type='date'
                                    />
                                    <Button className="mt-3" type='submit' color="success">Add</Button>
                                </div >
                            </CardBody>
                        </Form>
                    </Formik>
                </Card>
            </Page>
        </div >
    )
}

export default AddClassPage

