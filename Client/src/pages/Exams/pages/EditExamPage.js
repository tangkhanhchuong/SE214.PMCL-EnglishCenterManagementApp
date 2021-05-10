import React from 'react'
import { useMutation, useQuery } from "react-query"
import { useHistory } from "react-router-dom"
import { useRouteMatch } from 'react-router-dom'
import { Formik, Form, FastField } from 'formik'
import { Alert, Card, CardHeader, CardBody, Button, Col } from 'reactstrap'

import PageSpinner from 'components/PageSpinner'
import Page from 'components/Page'
import InputField from 'components/Form/Formik/InputField'
import SelectField from 'components/Form/Formik/SelectField'
import { Exams } from 'core/HttpRequests'

const EditForm = ({ exam }) => {
    const convertDate = (date) => {
        if (!date) return
        const yourDate = new Date(date).toISOString().split('T')[0]
        return yourDate
    }

    const { exam_id, class_id, exam_time, exam_date, exam_type, duration, description } = exam

    const delayRedirectTime = 3000

    const { isSuccess, mutate } = useMutation(Exams.edit)
    const history = useHistory()

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/exams')
        }, delayRedirectTime)
    }

    const onEdit = (values) => {
        alert(JSON.stringify(values, null, 4))
        // const { is_working } = values
        // values = { ...values, is_working: is_working[0] === 'on' ? true : false }
        // mutate({ info: values, id: instructor.instructor_id }, {
        //     mutationKey: 'edit_exam',
        //     onError: (err) => { console.log(err) },
        //     onSuccess: onSuccess
        // })
    }

    const initialValues = {
        exam_id, class_id, exam_time, exam_date, exam_type, duration, description
    }


    return (
        <Col xs={6}>
            <Card className=" d-flex  justify-content-around">
                {isSuccess ?
                    (<Alert color="success">
                        Exam was edited
                    </Alert>) : <></>
                }
                <CardHeader>
                    <h4><strong>Edit Exam</strong></h4>
                </CardHeader>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onEdit}
                >
                    <Form>
                        <CardBody className=" d-flex flex-row  justify-content-around">
                            <div className="flex-grow-1 p-3">
                                <FastField
                                    name='name'
                                    component={InputField}
                                    label='Class Id'
                                    value={class_id}
                                />
                                <FastField
                                    name='exam_date'
                                    component={InputField}
                                    label='Exam Date'
                                    type='date'
                                    value={convertDate(exam_date)}
                                />
                                <FastField
                                    name='exam_time'
                                    component={InputField}
                                    label='Exam Time'
                                    type='time'
                                    value={exam_time}
                                />
                                <FastField
                                    name='exam_type'
                                    component={SelectField}
                                    label='Exam Type'
                                    options={['Middle Term 1', 'Middle Term 2', 'Final Term']}
                                    minWidth={180}
                                />
                                <FastField
                                    name='duration'
                                    component={InputField}
                                    label='Duration (minutes)'
                                    value={duration}
                                    type='number'
                                />
                                <FastField
                                    name='description'
                                    component={InputField}
                                    label='Description'
                                    type='textarea'
                                    value={description}
                                />
                                <Button type='submit' color='success'>Add</Button>
                            </div >
                        </CardBody>
                    </Form>
                </Formik>
            </Card>
        </Col>
    )
}

const EditExamPage = () => {

    const currentExamId = useRouteMatch().params.examId

    const { data, isLoading } = useQuery('exam_details', Exams.details.bind(this, currentExamId))

    return (
        <Page
            breadcrumbs={[{ name: 'Exams' }]}
            title="Edit Exam"
        >
            {
                isLoading ? <PageSpinner /> : (
                    <Col>
                        <EditForm exam={data.data.data.exam} />
                    </Col>
                )
            }
        </Page>
    )
}

export default EditExamPage

