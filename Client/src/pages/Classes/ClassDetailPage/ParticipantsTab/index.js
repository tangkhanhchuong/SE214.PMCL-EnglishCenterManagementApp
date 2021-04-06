import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const tableTypes = ['', '']

const studentsInClass = [
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11112" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11113" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11114" }
]

const instructorInClass = [
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" }
]


const ParticipantsTab = ({ classId }) => {
    const userRoleId = localStorage.getItem("roleId")

    let getParticipantsInClass = (kIndex) => {
        let joinerArr = kIndex === 0 ? studentsInClass : instructorInClass
        return (
            joinerArr.map((row, index) => {
                return (
                    <tr key={`rows_${kIndex}_${index}`}>
                        <th scope="row">{row.id}</th>
                        <td>{row.fullName}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <div>
            <h2>{classId}</h2>

            {tableTypes.map((tableType, index) => (
                <Row key={index}>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>{index === 0 ? 'Instructors' : 'Students'}</CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <Card body>
                                            <Table >
                                                <thead>
                                                    <tr>
                                                        <th>{`${index === 0 ? "Instructors" : "Students"} Id`}</th>
                                                        <th>Full Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        getParticipantsInClass(index)
                                                    }
                                                </tbody>
                                            </Table>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            ))}
        </div>
    )
}

export default ParticipantsTab
