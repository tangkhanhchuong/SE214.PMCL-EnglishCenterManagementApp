import React, { useState, useEffect } from 'react'
import {
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import InstructorsList from './InstructorsList'
import AddInstructor from './AddInstructor'

const instructorsInClass = [
    { id: "18520010", fullName: "TK Chuong" }
]

const InstructorsTab = ({ classId }) => {

    const [instructorsList, setInstructorsList] = useState(instructorsInClass)

    return (
        <div className="d-flex flex-row justify-content-between">
            <InstructorsList instructorsList={instructorsList} />
            <AddInstructor setInstructorsList={setInstructorsList} />
        </div>
    )
}

export default InstructorsTab
