import React from 'react'
import { Card, CardBody, CardHeader, Table } from 'reactstrap'
import {
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const studentsInClass = [
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11112" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11112" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11112" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11112" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" },
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11112" },
]

const StudentsList = () => {
    let getStudentsInClass = () => {
        return (
            studentsInClass.map((row, index) => {
                return (
                    <tr key={`rows_${index}`}>
                        <th scope="row">{row.id}</th>
                        <td>{row.fullName}</td>
                        <td>
                            <Link to="" className="btn btn-success p-2"><FaEye size="25" /></Link>
                            <Link to="" className="btn btn-warning p-2 ml-2 mr-2"><FaPen size="25" /></Link>
                            <Link to="" className="btn btn-danger p-2"><FaTrash size="25" /></Link>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <Card className="flex-grow-1 mr-3">
            <CardHeader><h4>Instructors</h4></CardHeader>
            <CardBody>
                <Card body>
                    <Table >
                        <thead>
                            <tr>
                                <th>Instructor Id</th>
                                <th>Full Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStudentsInClass()
                            }
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default StudentsList
