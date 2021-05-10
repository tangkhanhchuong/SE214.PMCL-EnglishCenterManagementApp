import React from 'react'
import { Card, CardBody, CardImg, CardText, CardLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const ClassCardItem = ({ classItem }) => {
    const { class_id, name, schedule, duration, img } = classItem

    const formatSchedule = (schedule) => {
        const dayInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const formattedSchedule = schedule.split('').map(d => dayInWeek[parseInt(d) - 2]).join('-')
        return formattedSchedule
    }

    return (
        <Card>
            <CardImg top src={img} style={{ height: "200px", width: "268px" }} />
            <CardBody>
                <CardText style={{ color: "black" }}><strong>Class Name: </strong> {name}</CardText>
                <Link to={`classes/${class_id}`} className="btn btn-success p-2 mr-2">Details</Link>
                <Link to={`classes/${class_id}/edit`} className="btn btn-warning p-2 mr-2">Edit</Link>
                <Link to={`classes/${class_id}`} className="btn btn-danger p-2">Delete</Link>
            </CardBody>
        </Card>
    )
}

export default ClassCardItem
