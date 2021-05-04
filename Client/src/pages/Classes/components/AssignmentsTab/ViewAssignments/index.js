import React from 'react'
import { Card, CardHeader, CardBody, Col, Row, Table } from 'reactstrap'

import ShadowCard from 'components/Card/ShadowCard'

import assignmentsData from './assignmentsData'
import AssignmentRow from './AssignmentRow'

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
        <Table striped>
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
    )
}

const ViewAssignments = () => {

    return (
        <div className="d-flex flex-row">
            <AssignmentsList />
        </div>
    )
}

export default ViewAssignments
