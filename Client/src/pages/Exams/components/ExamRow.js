import React from 'react'
import { Link } from 'react-router-dom'
import {
    FaUserCircle,
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'


const ExamRow = ({ exam, index }) => {
    const { exam_id, class_id, exam_time, exam_date, exam_type, duration, description } = exam
    return (
        <tr >
            <td>{exam_id}</td>
            <td>{class_id}</td>
            <td>{exam_time}</td>
            <td >{exam_date}</td>
            <td >{exam_type}</td>
            <td >{duration}</td>
            <td >{description}</td>
            <td>
                <Link to={`/exams/${exam_id}`} className="btn btn-success p-2"><FaEye size="25" /></Link>
                <Link to={`/exams/${exam_id}/edit`} className="btn btn-warning p-2 ml-2 mr-2"><FaPen size="25" /></Link>
                <Link to={`/exams/${exam_id}`} className="btn btn-danger p-2"><FaTrash size="25" /></Link>
            </td>
        </tr>
    )
}

export default ExamRow