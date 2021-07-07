import React, { useEffect, useState } from 'react'
import { Form, Label, FormGroup, Card, CardBody, Button } from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import {Formik} from 'formik'

import { Students } from 'core/HttpRequests'
import Page from 'components/Page'

import boy_avatar from 'assets/img/icons/boy_cat.png'
import girl_avatar from 'assets/img/icons/girl_cat.png'
import { FastField } from 'formik'
import InputField from 'components/Form/Formik/InputField'
import RadioField from 'components/Form/Formik/RadioField'
import Input from 'reactstrap/lib/Input'

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const Profile = ({me}) => {
    const [profile, setProfile] = useState(me)
    const [isEditMode, setIsEditMode] = useState(false)
    
    const convertDate = (date) => {
        if (!date) return
        const yourDate = new Date(date).toISOString().split('T')[0]
        return yourDate
    }

    const { name, student_id, gender, phone, email, dob, address, participatedClasses, is_studying } = profile
    const initialValues = {
        name, gender, dob, phone, email, address, student_id, is_studying
    }

    const onEdit = (e) => {
        e.preventDefault()

        const newName = e.target["name"].value
        const newPhone = e.target["phone"].value
        const newGender = e.target["gender"].value
        const newEmail = e.target["email"].value
        const newDob = e.target["dob"].value
        const newAddress = e.target["address"].value
        const newIsStudying = e.target["is_studying"].value == "on" ? true : false

        const newStudent = {
            name: newName, 
            phone: newPhone, 
            gender: newGender, 
            email: newEmail, 
            dob: newDob, 
            address: newAddress, 
            is_studying: newIsStudying, 
            participatedClasses, 
            student_id
        }
        setProfile(newStudent)
    }

    useEffect(() => {
        setIsEditMode(false)
    }, [profile])

    if(isEditMode) {
        return (
            <Formik
                initialValues={initialValues}
            >
                <Form onSubmit={onEdit}>
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
        )
    }
    return (
        <Form className="p-3">
            <hr />
            <div style={{display: 'flex', flexDirection: "row", alignItems: 'flex-end'}}>
                <Avatar className="m-3" src={`${gender === 'Male' ? boy_avatar : girl_avatar}`} alt="" />
                <Button color="warning" type="button" onClick={() => setIsEditMode(true)}>Edit Profile</Button>
            </div>
            <div className="mb-3 d-flex flex-row">
                <FormGroup className="m-3 d-flex flex-column">
                    <Label><strong>Full Name: </strong></Label>
                    <Label><strong>Student Id: </strong></Label>
                    <Label><strong>Gender: </strong></Label>
                    <Label><strong>Phone: </strong></Label>
                    <Label><strong>Email Address: </strong></Label>
                    <Label><strong>Date Of Birth: </strong></Label>
                    <Label><strong>Address: </strong></Label>
                    <Label><strong>Participated Classes: </strong></Label>
                </FormGroup>
                <FormGroup className="m-3 d-flex flex-column">
                    <Label>{name}</Label>
                    <Label>{student_id}</Label>
                    <Label>{gender}</Label>
                    <Label>{phone}</Label>
                    <Label>{email}</Label>
                    <Label>{dob}</Label>
                    <Label>{address}</Label>
                    <Label>{participatedClasses.map((participatedClass) => `${participatedClass.class_id}${participatedClass.paid_at ? ' (Paid)' : ''}`).join(', ')}</Label>
                </FormGroup>
            </div>
        </Form >
    )
}

const ProfilePage = () => {
    const { data, isLoading } = useQuery('student_details', Students.details.bind(this, 'STU-56032'))

    if (isLoading) return <></>

    const me = data.data.data.student

    return (
        <Page
            breadcrumbs={[{ name: 'Profile' }]}
            title="Profile" >
            {
                me.info_id ? 
                <Card className="justify-content-between">
                    <Profile me={me} /> : 
                </Card> : 
                <h1>This profile does not exist</h1>
            }
        </Page>
    )
}

export default ProfilePage
