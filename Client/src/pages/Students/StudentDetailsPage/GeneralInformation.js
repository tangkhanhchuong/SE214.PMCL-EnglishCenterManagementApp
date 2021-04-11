import React, { useEffect, useState, useCallback } from 'react'
import { Form, Label, FormGroup, Card } from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'

import ShadowCard from 'components/Card/ShadowCard'
import { Students } from 'core/HttpRequests'

const GeneralInformation = () => {
    const currentStudentId = useRouteMatch().params.studentId

    const [studentData, setStudentData] = useState()

    const fetchStudents = useCallback(async () => {
        const data = await Students.details(currentStudentId)
        console.log(data);
        setStudentData(data.data.student)
    }, [])

    useEffect(() => {
        fetchStudents()
    }, [])

    if (!studentData) return <></>
    return (
        <Card className="d-flex flex-row  justify-content-between">
            <span className="p-2 flex-grow-1">
                <Form className="p-3">
                    <h4><strong>Student's General Information</strong></h4>
                    <hr />
                    <FormGroup className="d-flex flex-column">
                        <Label><strong>Full Name: </strong>{studentData.name}</Label>
                        <hr />
                        <Label><strong>Student Id: </strong>{studentData.student_id}</Label>
                        <hr />
                        <Label><strong>Gender: </strong>{studentData.gender}</Label>
                        <hr />
                        <Label><strong>Phone: </strong>{studentData.phone}</Label>
                        <hr />
                        <Label><strong>Email Address: </strong>{studentData.email}</Label>
                        <hr />
                        <Label><strong>Date Of Birth: </strong>{studentData.dob}</Label>
                        <hr />
                    </FormGroup>
                </Form >
            </span>
            <span className="p-2 flex-grow-1">
                <Form className="p-3" style={{ minWidth: "400px !important", width: "550px" }}>
                    <h4><strong>Student's Address</strong></h4>
                    <hr />
                    <FormGroup className="d-flex flex-column">
                        <Label><strong>Street Information: </strong>{studentData.street_info}</Label>
                        <hr />
                        <Label><strong>Ward: </strong>{studentData.ward}</Label>
                        <hr />
                        <Label><strong>District: </strong>{studentData.district}</Label>
                        <hr />
                        <Label><strong>Province: </strong>{studentData.province}</Label>
                        <hr />
                        <Label><strong>City: </strong>{studentData.city}</Label>
                        <hr />
                        <Label><strong>Country: </strong>{studentData.country}</Label>
                        <hr />
                    </FormGroup>
                </Form >
            </span >
        </Card>
    )
}

export default GeneralInformation
