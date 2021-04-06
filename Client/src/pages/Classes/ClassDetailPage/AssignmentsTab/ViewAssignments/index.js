import React from 'react'
import { Card, CardHeader, CardBody, Col, Row, Table } from 'reactstrap'

import ShadowCard from 'components/Card/ShadowCard'

import assignmentsData from './assignmentsData'
import AssignmentRow from './AssignmentRow'
import AddAssignment from './AddAssignment'

const AssignmentsList = () => {
    const getAllAssignments = () => {
        return (
            <>
                {assignmentsData.data.map((row, index) => {
                    return (
                        <AssignmentRow key={index} history={row} />
                    )
                })}
            </>
        )
    }

    return (
        <ShadowCard className="m-3">
            <CardHeader><h4>All Assignments</h4></CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        <Card body>
                            <Table hover>
                                <thead>
                                    <tr>
                                        {
                                            assignmentsData.columTitles.map((col, index) => (
                                                <th key={index}>{col}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getAllAssignments()
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </ShadowCard>
    )
}

const ViewAssignments = () => {

    return (
        <div className="d-flex flex-row">
            <AssignmentsList />
            <AddAssignment />
        </div>
    )
}

export default ViewAssignments
