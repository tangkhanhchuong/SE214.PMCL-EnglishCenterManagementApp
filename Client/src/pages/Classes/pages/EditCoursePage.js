import React from 'react'
import { useMutation, useQuery } from "react-query"
import { useHistory } from "react-router-dom"
import { useRouteMatch } from 'react-router-dom'
import { Formik, Form, FastField } from 'formik'
import { Alert, Card, CardHeader, CardBody, Button, Col } from 'reactstrap'

import PageSpinner from 'components/PageSpinner'
import Page from 'components/Page'
import InputField from 'components/Form/Formik/InputField'
import { Courses } from 'core/HttpRequests'

const EditForm = ({ course }) => {
    // const convertDate = (date) => {
    //     if (!date) return
    //     const yourDate = new Date(date).toISOString().split('T')[0]
    //     return yourDate
    // }

    const { course_id, name, fee, description } = course

    const delayRedirectTime = 3000

    const { isSuccess, mutate } = useMutation(Courses.edit)
    const history = useHistory()

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/classes')
        }, delayRedirectTime)
    }

    const onEdit = (values) => {
        mutate({ courseId: values.course_id, updatedCourse: values }, {
            mutationKey: 'edit_course',
            onError: (err) => { console.log(err) },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        course_id, name, fee, description
    }


    return (
        <Col xs={6}>
            <Card className=" d-flex  justify-content-around">
                {isSuccess ?
                    (<Alert color="success">
                        Course was edited
                    </Alert>) : <></>
                }
                <CardHeader>
                    <h4><strong>Edit Course</strong></h4>
                </CardHeader>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onEdit}
                >
                    <Form>
                        <CardBody className=" d-flex flex-row  justify-content-around">
                            <div className="flex-grow-1 p-3">
                                <FastField
                                    name='course_id'
                                    component={InputField}
                                    label='Course Id:'
                                    value={course_id}
                                    disable
                                />
                                <FastField
                                    name='fee'
                                    component={InputField}
                                    label='Course Name:'
                                    value={name}
                                />
                                <FastField
                                    name='fee'
                                    component={InputField}
                                    label='Fee (VND):'
                                    type='number'
                                    value={fee}
                                />
                                <FastField
                                    name='description'
                                    component={InputField}
                                    label='Description'
                                    type='textarea'
                                    rows='5'
                                    value={description}
                                />
                                <Button type='submit' color='warning'>Edit</Button>
                            </div >
                        </CardBody>
                    </Form>
                </Formik>
            </Card>
        </Col>
    )
}

const EditCoursePage = () => {

    const currentCourseId = useRouteMatch().params.courseId

    const { data, isLoading } = useQuery('course_details', Courses.details.bind(this, currentCourseId))

    return (
        <Page
            breadcrumbs={[{ name: 'Courses' }]}
            title="Edit Course"
        >
            {
                isLoading ? <PageSpinner /> : (
                    <Col>
                        <EditForm course={data.data.data.course} />
                    </Col>
                )
            }
        </Page>
    )
}

export default EditCoursePage

