import React from 'react'
import { Card, CardHeader, CardBody, Table } from 'reactstrap'
import {
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DescriptionsTab = ({ classId }) => {
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
                                <td>{classId}</td>
                            </tr>
                            <tr>
                                <th>Class Name:</th>
                                <td>English 4.21</td>
                            </tr>
                            <tr>
                                <th>Course Id:</th>
                                <td>ENG4</td>
                            </tr>
                            <tr>
                                <th>Course Name:</th>
                                <td>English 4</td>
                            </tr>
                            <tr>
                                <th>Number of instructors:</th>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>Number of students:</th>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default DescriptionsTab
