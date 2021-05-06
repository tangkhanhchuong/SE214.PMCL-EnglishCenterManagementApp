import React from 'react'
import {
    Badge,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
} from 'reactstrap'
import {
    MdBubbleChart,
    MdInsertChart,
    MdPieChart,
    MdShowChart
} from 'react-icons/md'
import { Bar } from 'react-chartjs-2'
import { chartjs } from 'demos/dashboardPage'
import { getColor } from 'utils/colors'

const DBTotalExpenseChart = () => {
    const primaryColor = getColor('primary')
    const secondaryColor = getColor('secondary')

    return (
        <Card>
            <CardHeader>Total Expense</CardHeader>
            <CardBody>
                <Bar data={chartjs.bar.data} options={chartjs.bar.options} />
            </CardBody>
            <ListGroup flush>
                <ListGroupItem>
                    <MdInsertChart size={25} color={primaryColor} /> Cost of sales{' '}
                    <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                    <MdBubbleChart size={25} color={primaryColor} /> Management
                  costs <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                    <MdShowChart size={25} color={primaryColor} /> Financial costs{' '}
                    <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                    <MdPieChart size={25} color={primaryColor} /> Other operating
                  costs <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default DBTotalExpenseChart
