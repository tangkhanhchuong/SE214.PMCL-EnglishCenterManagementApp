import React from 'react'
import { Card, CardHeader, CardBody, Table } from 'reactstrap'
import {
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DescriptionsTab = ({ classDetails }) => {
    const { class_id, name, course_id, duration, max_students, time_slot, students, instructors } = classDetails

    return (
        <Card className="flex-grow-1 mr-3">
            <CardHeader className="d-flex flex-row justify-content-between">
                <div><h4>Class Details</h4></div>
                <div>
                    <Link to="" className="btn btn-success p-2"><FaEye size="25" /></Link>
                    <Link to="" className="btn btn-warning p-2 ml-2 mr-2"><FaPen size="25" /></Link>
                    <Link to="" className="btn btn-danger p-2"><FaTrash size="25" /></Link>
                </div>
            </CardHeader>
            <CardBody>
                <Card>
                    <Table striped>
                        <tbody>
                            <tr>
                                <th>Class Id:</th>
                                <td>{class_id}</td>
                            </tr>
                            <tr>
                                <th>Class Name:</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Course Id:</th>
                                <td>{course_id}</td>
                            </tr>
                            <tr>
                                <th>Duration:</th>
                                <td>{duration}</td>
                            </tr>
                            <tr>
                                <th>Time slot:</th>
                                <td>{time_slot}</td>
                            </tr>
                            <tr>
                                <th>Number of instructors:</th>
                                <td>{instructors.length}</td>
                            </tr>
                            <tr>
                                <th>Number of students:</th>
                                <td>{students.length}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default DescriptionsTab
