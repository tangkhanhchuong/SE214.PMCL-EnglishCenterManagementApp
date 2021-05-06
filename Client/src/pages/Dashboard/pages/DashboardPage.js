import Page from 'components/Page'
import React from 'react'
import { Col, Row } from 'reactstrap'
import DBStatisticCard from '../components/DBStatisticCard'
import DBNoticeBoard from '../components/DBNoticeBoard'
import DBTotalRevenueChart from '../components/DBTotalRevenueChart'

const today = new Date()
const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
)

class DashboardPage extends React.Component {
    componentDidMount() {
        // this is needed, because InfiniteCalendar forces window scroll
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <Page
                className="DashboardPage"
                breadcrumbs={[{ name: 'Dashboard', active: true }]}
                title="Dashboard"
            >
                <DBStatisticCard />

                <Row>
                    <Col lg="8" md="12" sm="12" xs="12">
                        <DBTotalRevenueChart />
                    </Col>
                    <Col lg="4" md="12" sm="12" xs="12">
                        <DBNoticeBoard />
                    </Col>
                </Row>
            </Page>
        )
    }
}
export default DashboardPage
