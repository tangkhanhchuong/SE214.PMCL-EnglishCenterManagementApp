import React from 'react'

import InstructorsInClass from './InstructorsInClass'
import AddInstructorClassForm from './AddInstructorClassForm'

const InstructorsTab = () => {


    return (
        <div className="d-flex flex-row justify-content-between">
            <InstructorsInClass />
            <AddInstructorClassForm />
        </div>
    )
}

export default InstructorsTab
