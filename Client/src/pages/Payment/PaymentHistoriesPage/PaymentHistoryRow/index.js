import React, { useState } from 'react'
import { Button } from 'reactstrap'

const PaidButton = ({ status }) => {
    const [paid, setPaid] = useState(status === "PAID")
    const onClickHandler = () => { setPaid(true) }

    return (paid ?
        <Button color='success' onClick={onClickHandler}>PAID</Button>
        :
        <Button color='danger' onClick={onClickHandler}>UNPAID</Button>)
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