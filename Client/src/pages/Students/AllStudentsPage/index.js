import React, { useState } from 'react'

import { Card, Table, Button, CardHeader, CardBody, Col, Row } from 'reactstrap'
import Page from 'components/Page'
import { NavLink } from 'react-router-dom'

import StudentRow from './StudentRow'
import studentsData from './studentsData'

const AllStudentsPage = () => {
    let getAllStudents = () => {
        return (
            studentsData.data.map((row, index) => {
                return (
                    <StudentRow key={index} history={row} />
                )
            })
        )
    }

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Students' }]}
        >
            <Card className="m-3">
                <CardHeader><h4>All Students</h4></CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <Card body>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            {
                                                studentsData.columTitles.map((col, index) => (
                                                    <th key={index}>{col}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getAllStudents()
                                        }
                                    </tbody>
                                </Table>
                            </Card>
                            <Card body></Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Page>
    )
}

export default AllStudentsPage
