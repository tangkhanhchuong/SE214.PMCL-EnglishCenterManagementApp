import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { NumberWidget } from 'components/Widget'

const DBStatisticCard = () => {
    return (
        <Row>
            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Total Profit"
                    subtitle="This month"
                    number="9.8k"
                    color="secondary"
                    progress={{
                        value: 75,
                        label: 'Last month',
                    }}
                />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Monthly Visitors"
                    subtitle="This month"
                    number="5,400"
                    color="secondary"
                    progress={{
                        value: 45,
                        label: 'Last month',
                    }}
                />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="New Users"
                    subtitle="This month"
                    number="3,400"
                    color="secondary"
                    progress={{
                        value: 90,
                        label: 'Last month',
                    }}
                />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Bounce Rate"
                    subtitle="This month"
                    number="38%"
                    color="secondary"
                    progress={{
                        value: 60,
                        label: 'Last month',
                    }}
                />
            </Col>
        </Row>
    )
}

export default DBStatisticCard
