import React from 'react'
import { useMutation, useQuery } from "react-query"
import { useHistory } from "react-router-dom"
import { useRouteMatch } from 'react-router-dom'
import { Formik, Form, FastField } from 'formik'
import { Alert, Card, CardHeader, CardBody, Button, Col, Container, Row } from 'reactstrap'

import PageSpinner from 'components/PageSpinner'
import Page from 'components/Page'
import InputField from 'components/Form/Formik/InputField'
import SelectField from 'components/Form/Formik/SelectField'
import { Classes, Courses } from 'core/HttpRequests'
import { DURATIONS, SCHEDULES, MAX_NUM_STUDENTS } from '../constants'

const EditForm = ({ classDetails }) => {
    const { data: coursesData, isLoading: fetchCoursesLoading } = useQuery('courses', Courses.list)

    const convertDate = (date) => {
        if (!date) return
        const yourDate = new Date(date).toISOString().split('T')[0]
        return yourDate
    }

    const { name, course_id, max_students, schedule, from, to, duration, begin_at } = classDetails


    const delayRedirectTime = 3000

    const { isSuccess, mutate } = useMutation(Classes.edit)
    const history = useHistory()

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/classes')
        }, delayRedirectTime)
    }

    const onEdit = (values) => {
        // const { is_working } = values
        // values = { ...values, is_working: is_working[0] === 'on' ? true : false }
        // mutate({ info: values, id: instructor.instructor_id }, {
        //     mutationKey: 'edit_instructor',
        //     onError: (err) => { console.log(err) },
        //     onSuccess: onSuccess
        // })
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
        <Card className=" d-flex justify-content-around">
            {isSuccess ?
                (<Alert color="success">
                    Class was Edited
                </Alert>) : <></>
            }
            <CardHeader>
                <h4><strong>Edit Class</strong></h4>
            </CardHeader>
            <Formik
                initialValues={initialValues}
                onSubmit={onEdit}
            >
                <Form>
                    <CardBody>
                        <Container>
                            <Row>
                                <Col sm={5} >
                                    <h4><b>Class Information</b></h4>
                                    <br />
                                    <FastField
                                        name='name'
                                        component={InputField}
                                        label='Class Name: '
                                        value={name}
                                    />
                                    <FastField
                                        name='course_id'
                                        component={SelectField}
                                        label='Course Id: '
                                        minWidth='120px'
                                        options={coursesData.data.data.courses.map(c => c.course_id)}
                                        value={course_id}

                                    />
                                    <FastField
                                        name='max_students'
                                        component={SelectField}
                                        label='Max number of students: '
                                        options={MAX_NUM_STUDENTS}
                                        unit='students'
                                        value={max_students}
                                    />
                                </Col >
                                <Col sm={1}></Col>
                                <Col sm={6}>
                                    <h4><b>Schedule</b></h4>
                                    <br />
                                    <FastField
                                        name='schedule'
                                        component={SelectField}
                                        label='Days in week: '
                                        options={SCHEDULES}
                                        minWidth='170px'
                                        initValue={schedule}
                                    />
                                    <div className='d-flex flex-row'>
                                        <FastField
                                            name='from'
                                            component={InputField}
                                            label='From: '
                                            type='time'
                                            value={from}
                                        />
                                        <div style={{ width: '50px' }}></div>
                                        <FastField
                                            name='to'
                                            component={InputField}
                                            label='To: '
                                            type='time'
                                            value={to}
                                        />
                                    </div>
                                    <FastField
                                        name='duration'
                                        component={SelectField}
                                        label='Duration: '
                                        options={DURATIONS}
                                        minWidth='80px'
                                        unit='months'
                                        value={duration}
                                    />
                                    <FastField
                                        name='begin_at'
                                        component={InputField}
                                        label='Begin At: '
                                        type='date'
                                        value={begin_at}
                                    />
                                    <Button className="mt-3" type='submit' color="success">Edit</Button>
                                </Col >
                            </Row>
                        </Container>
                    </CardBody>
                </Form>
            </Formik>
        </Card>
    )
}

const EditClassPage = () => {

    const currentClassId = useRouteMatch().params.classId

    const { data, isLoading } = useQuery('classes_details', Classes.details.bind(this, currentClassId))

    return (
        <Page
            breadcrumbs={[{ name: 'Classes' }]}
            title="Edit Class"
        >
            {
                isLoading ? <PageSpinner /> : <EditForm classDetails={data.data.data.class} />
            }
        </Page>
    )
}

export default EditClassPage

