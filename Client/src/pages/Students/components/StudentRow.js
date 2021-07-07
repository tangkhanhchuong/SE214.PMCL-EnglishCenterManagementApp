import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import {
    FaUserCircle,
    FaEye,
    FaTrash,
    FaPen
} from 'react-icons/fa'
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap'

const StudentRow = ({ student, index, deleteStudent }) => {
    const { student_id, name, gender, is_studying } = student

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteAndToggle = () => {
        deleteStudent()
        toggle()
    }

    return (
        <>
            <tr >
                <th scope="row" >{index + 1}</th>
                <td>{name}</td>
                <td><FaUserCircle size="40" color="grey" /></td>
                <td>{student_id}</td>
                <td>{gender}</td>
                <td >{is_studying.toString()}</td>
                <td>
                    <Link to={`/students/${student_id}`} className="btn btn-success p-2"><FaEye size="25" /></Link>
                    <Link to={`/students/${student_id}/edit`} className="btn btn-warning p-2 ml-2 mr-2"><FaPen size="25" /></Link>
                    <button onClick={toggle} className="btn btn-danger p-2"><FaTrash size="25" /></button>
                </td>
            </tr>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Do you want to delete?</ModalHeader>
                <ModalFooter>
                    <Button color="danger" onClick={deleteAndToggle}>Delete</Button>{' '}
                    <Button color="warning" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default StudentRow