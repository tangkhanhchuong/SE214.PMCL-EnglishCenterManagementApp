import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { Line } from 'react-chartjs-2'
import { chartjs } from 'demos/dashboardPage'

const DBTotalRevenueChart = () => {
    return (
        <Card>
            <CardHeader>
                Total Revenue{' '}
                <small className="text-muted text-capitalize">This year</small>
            </CardHeader>
            <CardBody>
                <Line data={chartjs.line.data} options={chartjs.line.options} />
            </CardBody>
        </Card>
    )
}

export default DBTotalRevenueChart
