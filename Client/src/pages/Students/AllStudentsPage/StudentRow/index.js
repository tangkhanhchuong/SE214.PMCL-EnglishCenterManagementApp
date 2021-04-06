import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaUserCircle,
    FaVenus,
    FaMars
} from 'react-icons/fa'


const StudentRow = ({ history }) => {
    const { studentId, fullName, avatar, gender, role } = history
    return (
        <tr >
            <th scope="row" >{studentId}</th>
            <td><FaUserCircle size="40" color="grey" /></td>
            <td>{fullName}</td>
            <td>{gender === "Male" ? <FaMars size="30" /> : <FaVenus size="30" />}</td>
            <td >{role}</td>
            <td><Link to={`/students/${studentId}`} className="btn btn-success m-3 p-2">Details</Link></td>
        </tr>
    )
}

export default StudentRow