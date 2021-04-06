import React from "react"
import { Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'

const InfoCardItem = ({ title, value, Icon }) => (
    <CardTitle className="d-flex">
        <Icon size={30} className="mr-3" />
        <div className="ml-3">
            <div style={{ fontSize: "12px", color: "grey" }}>{title}</div>
            <div>{value}</div>
        </div>
    </CardTitle>
)

const InfoCard = ({ cardTitle, cardItems, customStyle }) => (
    <Card className={`border rounded m-3 base-card ${customStyle}`}>
        <div className="m-3">
            <div className="m-3">
                <CardTitle>{cardTitle}</CardTitle>
                <hr />
                <CardBody>
                    {
                        cardItems.map(({ title, value, Icon }) => (
                            <InfoCardItem title={title} value={value} Icon={Icon} />
                        ))
                    }
                </CardBody>
            </div>
        </div>
    </Card>
)

export default InfoCard