import React from 'react'
import { Form, Label, FormGroup } from 'reactstrap'
import { useRouteMatch } from 'react-router-dom'

import ShadowCard from 'components/Card/ShadowCard'
import studentsData from '../../AllStudentsPage/studentsData'

const GeneralInformation = () => {
    const currentStudentId = useRouteMatch().params.studentId

    const { fullName, studentId, gender, phone, email, dob, streetInfo, ward, district, province, city, country }
        = studentsData.data.find(stu => stu.studentId == currentStudentId)

    return (
        <div>
            <div className="d-flex flex-row  justify-content-around">
                <ShadowCard className="p-2 m-2">
                    <Form className="p-3" style={{ minWidth: "400px !important", width: "600px" }}>
                        <h4>Student's General Information</h4>
                        <hr />
                        <FormGroup className="d-flex flex-column">
                            <Label><strong>Full Name: </strong></Label>
                            <Label>{fullName}</Label>
                            <hr />
                            <Label><strong>Student Id: </strong></Label>
                            <Label>{studentId}</Label>
                            <hr />
                            <Label><strong>Gender: </strong></Label>
                            <Label>{gender}</Label>
                            <hr />
                            <Label><strong>Phone: </strong></Label>
                            <Label>{phone}</Label>
                            <hr />
                            <Label><strong>Email Address: </strong></Label>
                            <Label>{email}</Label>
                            <hr />
                            <Label><strong>Date Of Birth: </strong></Label>
                            <Label>{dob}</Label>
                            <hr />
                        </FormGroup>
                    </Form >
                </ShadowCard>
                <ShadowCard className="p-2 m-2">
                    <Form className="p-3" style={{ minWidth: "400px !important", width: "600px" }}>
                        <h4>Student's Address</h4>
                        <hr />
                        <FormGroup className="d-flex flex-column">
                            <Label><strong>Street Information: </strong></Label>
                            <Label>{streetInfo}</Label>
                            <hr />
                            <Label><strong>Ward: </strong></Label>
                            <Label>{ward}</Label>
                            <hr />
                            <Label><strong>District: </strong></Label>
                            <Label>{district}</Label>
                            <hr />
                            <Label><strong>Province: </strong></Label>
                            <Label>{province}</Label>
                            <hr />
                            <Label><strong>City: </strong></Label>
                            <Label>{city}</Label>
                            <hr />
                            <Label><strong>Country: </strong></Label>
                            <Label>{country}</Label>
                            <hr />
                        </FormGroup>
                    </Form >
                </ShadowCard >
            </div>
        </div>
    )
}

export default GeneralInformation
