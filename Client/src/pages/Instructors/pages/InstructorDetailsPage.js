import React from 'react'
import { Form, Label, FormGroup, Card } from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { Instructors } from 'core/HttpRequests'
import Page from 'components/Page'

import boy_avatar from 'assets/img/icons/boy_cat.png'
import girl_avatar from 'assets/img/icons/girl_cat.png'

const Avatar = styled.img`
        width: 150px;
        height: 150px;
        border-radius: 50%;
    `

const InstructorDetailsPage = () => {
    const currentInstructorId = useRouteMatch().params.instructorId

    const { data, isLoading } = useQuery('instructor_details', Instructors.details.bind(this, currentInstructorId))

    if (isLoading) return <></>

    const { name, instructor_id, gender, phone, email, dob, address, participatedClasses, start_working_at } = data.data.data.instructor

    return (
        <Page
            className="DetailPage"
            breadcrumbs={[{ name: 'Instructors' }, { name: currentInstructorId }]}
            title="Instructor's Details">
            <Card className="justify-content-between">
                <Form className="p-3">
                    <h4><strong>Instructor: </strong>{currentInstructorId}</h4>
                    <hr />
                    <Avatar className="m-3" src={`${gender === 'Male' ? boy_avatar : girl_avatar}`} alt="" />
                    <div className="mb-3 d-flex flex-row">
                        <FormGroup className="m-3 d-flex flex-column">
                            <Label><strong>Full name: </strong></Label>
                            <Label><strong>Instructor Id: </strong></Label>
                            <Label><strong>Gender: </strong></Label>
                            <Label><strong>Phone: </strong></Label>
                            <Label><strong>Email address: </strong></Label>
                            <Label><strong>Date of birth: </strong></Label>
                            <Label><strong>Address: </strong></Label>
                            <Label><strong>Start working at: </strong></Label>
                            <Label><strong>Participated Classes: </strong></Label>
                        </FormGroup>
                        <FormGroup className="m-3 d-flex flex-column">
                            <Label>{name}</Label>
                            <Label>{instructor_id}</Label>
                            <Label>{gender}</Label>
                            <Label>{phone}</Label>
                            <Label>{email}</Label>
                            <Label>{dob}</Label>
                            <Label>{address}</Label>
                            <Label>{start_working_at.split('T')[0]}</Label>
                            <Label>{participatedClasses.map((participatedClass) => `${participatedClass.class_id}${participatedClass.paid_at ? ' (Paid)' : ''}`).join(', ')}</Label>
                        </FormGroup>
                    </div>
                </Form >
            </Card>
        </Page>
    )
}

export default InstructorDetailsPage
