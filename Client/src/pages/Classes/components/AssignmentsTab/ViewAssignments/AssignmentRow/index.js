import React from 'react'
import { Link } from 'react-router-dom'
import { MdPageview, MdEdit, MdDelete } from 'react-icons/md'

const AssignmentRow = ({ history }) => {
    const { assignmentId, title, createdAt, dueAt } = history
    return (
        <tr >
            <th scope="row" >{title}</th>
            <td>{createdAt}</td>
            <td >{dueAt}</td>
            <td>
                <Link to={`/assignments/${assignmentId}`} className="btn btn-success p-2"><MdPageview size="25" /></Link>
                <Link to={`/assignments/${assignmentId}`} className="btn btn-warning p-2 mr-2 ml-2"><MdEdit size="25" /></Link>
                <Link to={`/assignments/${assignmentId}`} className="btn btn-danger p-2"><MdDelete size="25" /></Link>
            </td>
        </tr>
    )
}

export default AssignmentRow