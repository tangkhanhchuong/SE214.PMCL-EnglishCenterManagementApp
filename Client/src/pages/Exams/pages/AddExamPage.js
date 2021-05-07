import React from 'react'
import { useMutation } from "react-query"
import { useHistory } from "react-router-dom"
import { Formik, Form, FastField } from 'formik'
import { Alert, Card, CardHeader, CardBody, Button, Col } from 'reactstrap'
import Page from 'components/Page'

import { Exams } from 'core/HttpRequests'

import InputField from 'components/Form/Formik/InputField'
import SelectField from 'components/Form/Formik/SelectField'

const AddExamPage = () => {

    const delayRedirectTime = 3000

    const history = useHistory()

    const { isSuccess, mutate } = useMutation(Exams.add)

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/exams')
        }, delayRedirectTime)
    }

    const onAdd = (values) => {
        mutate(values, {
            mutationKey: 'add_exam',
            onError: (err) => { console.log(err) },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        exam_id: '', exam_time: '', exam_date: '', exam_type: '',
        duration: '', description: '', class_id: ''
    }

    return (
        <div>
            <Page
                breadcrumbs={[{ name: 'Exams' }]}
                title="Add Exam"
            >
                <Col xs={6}>
                    <Card className=" d-flex  justify-content-around">
                        {isSuccess ?
                            (<Alert color="success">
                                Exam was added
                            </Alert>) : <></>
                        }
                        <CardHeader>
                            <h4><strong>Add Exam</strong></h4>
                        </CardHeader>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onAdd}
                        >
                            <Form>
                                <CardBody className=" d-flex flex-row  justify-content-around">
                                    <div className="flex-grow-1 p-3">
                                        <FastField
                                            name='name'
                                            component={InputField}
                                            label='Class Id'
                                        />
                                        <FastField
                                            name='exam_date'
                                            component={InputField}
                                            label='Exam Date'
                                            type='date'
                                        />
                                        <FastField
                                            name='exam_time'
                                            component={InputField}
                                            label='Exam Time'
                                            type='time'
                                        />
                                        <FastField
                                            name='exam_type'
                                            component={SelectField}
                                            label='Exam Type'
                                            options={['Weekly', 'Middle Term', 'Final Term']}
                                            minWidth={180}
                                        />
                                        <FastField
                                            name='duration'
                                            component={InputField}
                                            label='Duration'
                                            type='number'
                                        />
                                        <FastField
                                            name='description'
                                            component={InputField}
                                            label='Description'
                                            type='textarea'
                                        />
                                        <Button type='submit' color='success'>Add</Button>
                                    </div >
                                </CardBody>
                            </Form>
                        </Formik>
                    </Card>
                </Col>
            </Page>
        </div >
    )
}

export default AddExamPage

