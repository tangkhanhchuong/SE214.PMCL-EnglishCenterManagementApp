import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

import ViewAssignments from './ViewAssignments'

const instructorInClass = [
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" }
]


const AssignmentsTab = ({ classId, currentUrl }) => {
    const userRoleId = localStorage.getItem("roleId")

    return (
        <Card>
            <CardHeader>
                <h4>All Assignments</h4>
            </CardHeader>
            <CardBody>
                <ViewAssignments />
            </CardBody>
        </Card>
    )
}

export default AssignmentsTab
