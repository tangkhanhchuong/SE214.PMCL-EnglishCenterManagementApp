import React from 'react'

import StudentsList from './StudentsList'
import AddStudent from './AddStudent'

const InstructorsTab = ({ classId }) => {

    return (
        <div className="d-flex flex-row justify-content-between">
            <StudentsList />
            <AddStudent />
        </div>
    )
}

export default InstructorsTab
