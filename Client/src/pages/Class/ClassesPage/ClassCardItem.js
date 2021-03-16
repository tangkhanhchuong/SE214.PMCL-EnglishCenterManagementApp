import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap'

const ClassCardItem = ({ classItem }) => {
    const { classId, className, instructor, description, img } = classItem
    return (
        <Card >
            <CardImg top src={img} style={{ height: "200px", width: "280px" }} />
            <CardBody>
                <CardTitle style={{ color: "black" }}>{`${classId} - ${className}`}</CardTitle>
                <CardText style={{ color: "black" }}>{description}</CardText>
            </CardBody>
        </Card>
    )
}

export default ClassCardItem
