import React from 'react'
import { Link } from 'react-router-dom'

const AssignmentRow = ({ history }) => {
    const { assignmentId, title, createdAt, deadline } = history
    return (
        <tr >
            <th scope="row" >{title}</th>
            <td>{createdAt}</td>
            <td >{deadline}</td>
            <td><Link to={`/assignments/${assignmentId}`} className="btn btn-success m-3 p-2">Details</Link></td>
        </tr>
    )
}

export default AssignmentRow