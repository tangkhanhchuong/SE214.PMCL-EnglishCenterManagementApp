import React from 'react'
import { useMutation, useQuery } from "react-query"
import { useHistory } from "react-router-dom"
import { useRouteMatch } from 'react-router-dom'
import { Formik, Form, FastField } from 'formik'
import { Alert, Card, CardHeader, CardBody, Button } from 'reactstrap'

import PageSpinner from 'components/PageSpinner'
import Page from 'components/Page'
import InputField from 'components/Form/Formik/InputField'
import RadioField from 'components/Form/Formik/RadioField'
import { Instructors } from 'core/HttpRequests'

const EditForm = ({ instructor }) => {
    const convertDate = (date) => {
        if (!date) return
        const yourDate = new Date(date).toISOString().split('T')[0]
        return yourDate
    }

    const { name, gender, dob, phone, email, address, instructor_id, is_working } = instructor

    const delayRedirectTime = 3000

    const { isSuccess, mutate } = useMutation(Instructors.edit)
    const history = useHistory()

    const onSuccess = () => {
        setTimeout(() => {
            history.push('/instructors')
        }, delayRedirectTime)
    }

    const onEdit = (values) => {
        const { is_working } = values
        values = { ...values, is_working: is_working[0] === 'on' ? true : false }
        mutate({ info: values, id: instructor.instructor_id }, {
            mutationKey: 'edit_instructor',
            onError: (err) => { console.log(err) },
            onSuccess: onSuccess
        })
    }

    const initialValues = {
        name, gender, dob, phone, email, address, instructor_id, is_working
    }

    return (
        <Card className=" d-flex  justify-content-around">
            {isSuccess ?
                (<Alert color="success">
                    Instructor's information was updated
                </Alert>) : <></>
            }
            <CardHeader>
                <h4><strong>Edit Instructor</strong>: {instructor_id}</h4>
            </CardHeader>
            <Formik
                initialValues={initialValues}
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
                                name='is_working'
                                component={InputField}
                                label='Is Working'
                                type='checkbox'
                                value={is_working}
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

const EditInstructorPage = () => {

    const currentInstructorId = useRouteMatch().params.instructorId

    const { data, isLoading } = useQuery('instructor_details', Instructors.details.bind(this, currentInstructorId))

    return (
        <Page
            breadcrumbs={[{ name: 'Instructors' }]}
            title="Edit Instructor"
        >
            {
                isLoading ? <PageSpinner /> : <EditForm instructor={data.data.data.instructor} />
            }
        </Page>
    )
}

export default EditInstructorPage

