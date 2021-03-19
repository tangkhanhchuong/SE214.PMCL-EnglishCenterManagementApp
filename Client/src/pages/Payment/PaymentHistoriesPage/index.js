import React, { useState } from 'react';

import { Card, Table, Button, CardHeader, CardBody, Col, Row } from 'reactstrap';
import Page from 'components/Page';
import { NavLink } from 'react-router-dom';

import PaymentHistoryRow from './PaymentHistoryRow'
import paymentHistoriesData from './paymentHistoriesData'

const PaymentHistoriesPage = () => {
    let getAllPaymentHistories = () => {
        return (
            paymentHistoriesData.data.map((row, index) => {
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
            <NavLink to='/payment/add'><Button>Add Payment History</Button></NavLink>
            <Card className="m-3">
                <CardHeader><h2>All Payment Histories</h2></CardHeader>
                <CardBody>
                    <Row>
                        <Col>
                            <Card body>
                                <Table hover>
                                    <thead>
                                        <tr>
                                            {
                                                paymentHistoriesData.columTitles.map((col, index) => (
                                                    <th key={index}>{col}</th>
                                                ))
                                            }
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
