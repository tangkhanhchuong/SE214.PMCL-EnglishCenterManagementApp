import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaUserCircle,
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'


const StudentRow = ({ student, index }) => {
    const { student_id, name, avatar, gender, is_studying } = student

    return (
        <tr >
            <th scope="row" >{index + 1}</th>
            <td>{name}</td>
            <td><FaUserCircle size="40" color="grey" /></td>
            <td>{student_id}</td>
            <td>{gender}</td>
            <td >{is_studying.toString()}</td>
            <td>
                <Link to={`/students/${student_id}`} className="btn btn-success p-2"><FaEye size="25" /></Link>
                <Link to={`/students/${student_id}/edit`} className="btn btn-warning p-2 ml-2 mr-2"><FaPen size="25" /></Link>
                <Link to={`/students/${student_id}`} className="btn btn-danger p-2"><FaTrash size="25" /></Link>
            </td>
        </tr>
    )
}

export default StudentRow