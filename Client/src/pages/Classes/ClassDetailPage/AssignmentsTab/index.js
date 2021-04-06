import React from 'react'
import { Button } from 'reactstrap'

import ViewAssignments from './ViewAssignments'

const instructorInClass = [
    { id: "18520010", fullName: "TK Chuong", email: "chuong@gmail.com", phone: "11111" }
]


const AssignmentsTab = ({ classId, currentUrl }) => {
    const userRoleId = localStorage.getItem("roleId")

    return (
        <div>
            <h2>{classId}</h2>
            <ViewAssignments />
        </div>
    )
}

export default AssignmentsTab
