import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
} from 'reactstrap'

const ClassCardItem = ({ classItem }) => {
    const { class_id, class_name, instructor, description, img } = classItem

    return (
        <Card >
            <CardImg top src={img} style={{ height: "200px", width: "280px" }} />
            <CardBody>
                <CardText style={{ color: "black" }}><strong>Class Id:</strong> {class_id}</CardText>
                <CardText style={{ color: "black" }}><strong>Class Name:</strong> {class_name}</CardText>
                <CardText style={{ color: "black" }}><strong>Instructor:</strong> {instructor}</CardText>
            </CardBody>
        </Card>
    )
}

export default ClassCardItem
