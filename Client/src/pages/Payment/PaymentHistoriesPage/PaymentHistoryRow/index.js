import React, { useState } from 'react'
import { Button } from 'reactstrap'

const PaidButton = ({ status }) => {
    const paid = status === "PAID"

    return (
        paid ? <Button color='success'>PAID</Button>
            : <Button color='danger'>UNPAID</Button>
    )
}

const PaymentHistoryRow = ({ history }) => {
    return (
        <tr >
            <th scope="row" >{history.id}</th>
            <td>{history.studentId}</td>
            <td>{history.studentName}</td>
            <td>{history.courseName}</td>
            <td>{history.className}</td>
            <td>{history.amount}</td>
            <td>{history.inWord}</td>
            <td><PaidButton status={history.status} /></td>
            <td>{history.paymentDate}</td>
        </tr>
    )
}

export default PaymentHistoryRow