import React, { useState } from 'react';

import { Card, Table, Button, CardHeader, CardBody, Col, Row } from 'reactstrap';
import Page from 'components/Page';
import { NavLink } from 'react-router-dom';
import PaymentHistoryRow from './PaymentHistoryRow'

const PaymentHistoriesPage = () => {

    const paymentHistoriesData = [
        { id: 1, studentId: "18520010", studentName: "TK Chuong", courseName: "English 1", className: "English1 - 22", amount: "1000000", inWord: "one million", status: "UNPAID", paymentDate: "" },
        { id: 2, studentId: "18520010", studentName: "TK Chuong", courseName: "English 1", className: "English1 - 22", amount: "1000000", inWord: "one million", status: "PAID", paymentDate: "March 17, 2021" },
        { id: 3, studentId: "18520010", studentName: "TK Chuong", courseName: "English 1", className: "English1 - 22", amount: "1000000", inWord: "one million", status: "PAID", paymentDate: "March 17, 2021" },
        { id: 4, studentId: "18520010", studentName: "TK Chuong", courseName: "English 1", className: "English1 - 22", amount: "1000000", inWord: "one million", status: "PAID", paymentDate: "March 17, 2021" },
        { id: 5, studentId: "18520010", studentName: "TK Chuong", courseName: "English 1", className: "English1 - 22", amount: "1000000", inWord: "one million", status: "PAID", paymentDate: "March 17, 2021" },
    ]

    let getAllPaymentHistories = () => {
        return (
            paymentHistoriesData.map((row, index) => {
                return (
                    <PaymentHistoryRow key={index} history={row} />
                )
            })
        )
    }

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Payment' }]}
        >
            <NavLink to='/assignments'><Button>Add Payment History</Button></NavLink>
            <Card className="m-3">
                <CardHeader><h2>All Payment Histories</h2></CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <Card body>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Student Id</th>
                                            <th>Student Name</th>
                                            <th>Course Name</th>
                                            <th>Class Name</th>
                                            <th>Amount (Vnd)</th>
                                            <th>In Word</th>
                                            <th>Status</th>
                                            <th>Payment Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getAllPaymentHistories()
                                        }
                                    </tbody>
                                </Table>
                            </Card>
                            <Card body></Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Page>
    );
};

export default PaymentHistoriesPage;
