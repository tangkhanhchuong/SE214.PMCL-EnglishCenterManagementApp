import React, { useState } from 'react'
import { Button } from 'reactstrap'


const NotificationRow = ({ history }) => {
    const { id, title, content, createdAt } = history
    return (
        <tr >
            <th scope="row" >{id}</th>
            <td>{title}</td>
            <td>{content}</td>
            <td>{createdAt}</td>
        </tr>
    )
}

export default NotificationRow