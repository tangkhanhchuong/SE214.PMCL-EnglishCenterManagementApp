import React from 'react'
import { useMutation } from "react-query"
import { useHistory } from "react-router-dom"
import { Formik, Form, FastField } from 'formik'
import { Alert, Card, CardHeader, CardBody, Button } from 'reactstrap'
import Page from 'components/Page'

import { Instructors } from 'core/HttpRequests'

import InputField from 'components/Form/Formik/InputField'
import RadioField from 'components/Form/Formik/RadioField'

const AddInstructorPage = () => {

    const delayRedirectTime = 3000

    const history = useHistory()

    const { isSuccess, mutate } = useMutation(Instructors.add)

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/instructors')
        }, delayRedirectTime)
    }

    const onAdd = (values) => {
        mutate(values, {
            mutationKey: 'add_instructor',
            onError: (err) => { console.log(err) },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        name: '',
        gender: 'Male', dob: '',
        phone: '', email: '', address: ''
    }

    return (
        <div>
            <Page
                breadcrumbs={[{ name: 'Instructors' }]}
                title="Add Instructor"
            >
                <Card className=" d-flex  justify-content-around">
                    {isSuccess ?
                        (<Alert color="success">
                            Instructor was added
                        </Alert>) : <></>
                    }
                    <CardHeader>
                        <h4><strong>Add Instructor</strong></h4>
                    </CardHeader>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onAdd}
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
                                    />
                                    <FastField
                                        name='gender'
                                        component={RadioField}
                                        label='Gender'
                                        values={["Male", "Female"]}
                                    />
                                    <FastField
                                        name='dob'
                                        component={InputField}
                                        label='Date of birth'
                                        type='date'
                                    />
                                </div >
                                <div className="flex-grow-1 p-3">
                                    <h4>Contact Information</h4>
                                    <br />
                                    <FastField
                                        name='phone'
                                        component={InputField}
                                        label='Phone'
                                        type="phone"
                                    />
                                    <FastField
                                        name='email'
                                        component={InputField}
                                        label='Email'
                                    />
                                    <FastField
                                        name='address'
                                        component={InputField}
                                        label='Address'
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

export default AddInstructorPage

