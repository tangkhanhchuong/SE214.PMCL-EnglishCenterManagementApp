import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
} from 'reactstrap'

const ClassCardItem = ({ classItem }) => {
    const { name, schedule, duration, img } = classItem

    const formatSchedule = (schedule) => {
        const dayInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const formattedSchedule = schedule.split('').map(d => dayInWeek[parseInt(d) - 2]).join('-')
        return formattedSchedule
    }

    return (
        <Card >
            <CardImg top src={img} style={{ height: "200px", width: "268px" }} />
            <CardBody>
                <CardText style={{ color: "black" }}><strong>Class Name: </strong> {name}</CardText>
                <CardText style={{ color: "black" }}><strong>Duration: </strong> {duration}</CardText>
                <CardText style={{ color: "black" }}><strong>Schedule: </strong> {formatSchedule(schedule)}</CardText>
            </CardBody>
        </Card>
    )
}

export default ClassCardItem
