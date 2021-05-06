import React from 'react'
import { Container } from 'react-bootstrap'

const NoticeRow = ({ noti }) => {
    return (
        <Container>
            <h4><strong>{noti.title}</strong></h4>
            <br />
            <p>{noti.content}</p>
            <i>{noti.createdAt}</i>
        </Container>
    )
}

export default NoticeRow
