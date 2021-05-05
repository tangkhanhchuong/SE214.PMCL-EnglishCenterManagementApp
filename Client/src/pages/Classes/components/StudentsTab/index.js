import React from 'react'

import StudentsInClass from './StudentsInClass'
import AddStudentClassForm from './AddStudentClassForm'

const StudentsTab = ({ classId }) => {

    return (
        <div className="d-flex flex-row justify-content-between">
            <StudentsInClass />
            <AddStudentClassForm />
        </div>
    )
}

export default StudentsTab
