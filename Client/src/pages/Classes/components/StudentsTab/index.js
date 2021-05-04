import React from 'react'

import StudentsInClass from './StudentsInClass'
import AddStudentClassForm from './AddStudentClassForm'

const InstructorsTab = ({ classId }) => {

    return (
        <div className="d-flex flex-row justify-content-between">
            <StudentsInClass />
            <AddStudentClassForm />
        </div>
    )
}

export default InstructorsTab
