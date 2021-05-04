import React from 'react'
import { Form, Label, FormGroup, Card } from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { Students } from 'core/HttpRequests'
import Page from 'components/Page'

import boy_avatar from 'assets/img/icons/boy_cat.png'
import girl_avatar from 'assets/img/icons/girl_cat.png'

const Avatar = styled.img`
        width: 150px;
        height: 150px;
        border-radius: 50%;
    `

const StudentDetailsPage = () => {
    const currentStudentId = useRouteMatch().params.studentId

    const { data, isLoading } = useQuery('student_details', Students.details.bind(this, currentStudentId))

    if (isLoading) return <></>

    const { name, student_id, gender, phone, email, dob, avatar_url, address, participatedClasses } = data.data.data.student
    return (
        <Page
            className="DetailPage"
            breadcrumbs={[{ name: 'Students' }, { name: currentStudentId }]}
            title={`Student Id: ${currentStudentId}`} >
            <Card className="justify-content-between">
                <Form className="p-3">
                    <h4><strong>Student's Information</strong></h4>
                    <hr />
                    <Avatar className="m-3" src={`${gender === 'Male' ? boy_avatar : girl_avatar}`} alt="" />
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
                            <Label>{participatedClasses.map((participatedClass) => participatedClass.class_id).join(', ')}</Label>
                        </FormGroup>
                    </div>
                </Form >
            </Card>
        </Page>
    )
}

export default StudentDetailsPage
