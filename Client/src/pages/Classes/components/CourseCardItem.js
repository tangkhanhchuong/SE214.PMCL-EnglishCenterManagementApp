import React, { useState } from 'react'
import { Row, Col, Card, Button, Modal, ModalHeader, ModalFooter } from 'reactstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Paginate, usePaginate } from 'components/Paginate'

import ClassCardItem from "./ClassCardItem"

import classImg1 from 'assets/img/class-img/class-img-1.svg'
import classImg2 from 'assets/img/class-img/class-img-2.svg'
import classImg3 from 'assets/img/class-img/class-img-3.svg'
import classImg4 from 'assets/img/class-img/class-img-4.svg'
import classImg5 from 'assets/img/class-img/class-img-5.svg'
import classImg6 from 'assets/img/class-img/class-img-6.svg'
import classImg7 from 'assets/img/class-img/class-img-7.svg'

const classImagesList = [
    classImg1,
    classImg2,
    classImg3,
    classImg4,
    classImg5,
    classImg6,
    classImg7
]

const PER_PAGE = 2

const CourseTitle = styled.div`
    font-size: 25px; 
    margin-bottom: 10px
`

const CourseCost = styled.div`
    font-size: 25px; 
    margin-bottom: 10px;
`

const ClassInCourse = ({ classesData }) => {
    const [classes, setClasses] = useState(classesData)
    const { curPageData, setCurrentPage, pageCount } = usePaginate(PER_PAGE, classes)
    const deleteClass = (id) => {
        setClasses(classes => classes.filter(c => c.class_id !== id))
    }
    return (
        <Col>
            <Row>
                {curPageData.map((classItem, index) => {
                    classItem.img = classImagesList[index % 7 + 1]

                    return (<Col className="mb-3" key={classItem.class_id} xl={3} lg={12} md={12}>
                        <ClassCardItem classItem={classItem} deleteClass={() => deleteClass(classItem.class_id)}/>
                    </Col>)
                })}
            </Row>
            <Row style={{display: 'flex', justifyContent: 'center'}}>
                <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
            </Row>
        </Col>
    )
}

const CourseCardItem = ({ course: c, deleteCourse }) => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const deleteAndToggle = () => {
        deleteCourse()
        toggle()
    }

    return (
        <Card key={c.course_id} className='d-flex flex-column mb-3 p-3'>
            <Row>
                <Col xs={4}>
                    <CourseTitle><b>COURSE: </b>{c.course_id}</CourseTitle>
                    <CourseCost><b>Cost:</b> {c.fee}</CourseCost>
                </Col>
                <Col xs={8}>
                    <Link className='btn btn-warning mr-2' to={`/classes/edit-course/${c.course_id}`}>Edit</Link>
                    <Button color='danger' onClick={toggle}>Delete</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Do you want to delete?</ModalHeader>
                        <ModalFooter>
                            <Button color="danger" onClick={deleteAndToggle}>Delete</Button>{' '}
                            <Button color="warning" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CourseCost><b>Description:</b></CourseCost>
                    {c.description}
                </Col>
            </Row>
            <Row>
                <ClassInCourse classesData={c.classes_in_course} />
            </Row>
        </Card>
    )
}

export default CourseCardItem
