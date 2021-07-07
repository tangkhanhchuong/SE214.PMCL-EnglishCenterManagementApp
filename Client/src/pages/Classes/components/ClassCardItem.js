import React, { useState } from 'react'
import { 
    Card, CardBody, CardImg, CardText, Button, 
    Modal, ModalHeader, ModalFooter 
} from 'reactstrap'
import { Link } from 'react-router-dom'


const ClassCardItem = ({ classItem, deleteClass }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteAndToggle = () => {
        deleteClass()
        toggle()
    }

    const { class_id, img } = classItem

    const formatSchedule = (schedule) => {
        const dayInWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        const formattedSchedule = schedule.split('').map(d => dayInWeek[parseInt(d) - 2]).join('-')
        return formattedSchedule
    }

    return (
        <Card>
            <CardImg top src={img} style={{ height: "200px" }} />
            <CardBody>
                <CardText style={{ color: "black" }}><strong>Class Id: </strong> {class_id}</CardText>
                <Link to={`classes/${class_id}`} className="btn btn-success p-2 mr-2">Details</Link>
                <Link to={`classes/${class_id}/edit`} className="btn btn-warning p-2 mr-2">Edit</Link>
                <Button onClick={toggle} className="btn btn-danger p-2">Delete</Button>
                <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Do you want to delete?</ModalHeader>
                        <ModalFooter>
                            <Button color="danger" onClick={deleteAndToggle}>Delete</Button>{' '}
                            <Button color="warning" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </CardBody>
        </Card>
    )
}

export default ClassCardItem
