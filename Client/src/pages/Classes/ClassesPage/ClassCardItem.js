import React from 'react'
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap'

const ClassCardItem = ({ classItem }) => {
    const { class_id, class_name, instructor, description, img } = classItem
    console.log(img);
    return (
        <Card >
            <CardImg top src={img} style={{ height: "200px", width: "280px" }} />
            <CardBody>
                <CardText style={{ color: "black" }}>Class Id: {class_id}</CardText>
                <CardText style={{ color: "black" }}>Class Name: {class_name}</CardText>
                <CardText style={{ color: "black" }}>Instructor: {instructor}</CardText>
            </CardBody>
        </Card>
    )
}

export default ClassCardItem
