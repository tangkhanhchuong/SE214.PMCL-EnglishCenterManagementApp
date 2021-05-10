import React from 'react'
import { Row, Col, Card, Button } from 'reactstrap'
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

const CourseCardItem = ({ course: c }) => {

    const { curPageData, setCurrentPage, pageCount } = usePaginate(PER_PAGE, c.classes_in_course)
    return (
        <Card key={c.course_id} className='d-flex flex-column mb-3 p-3'>
            <Row>
                <Col xs={2}>
                    <CourseTitle><b>Course: </b>{c.course_id}</CourseTitle>
                    {/* <CourseFee>{c.fee}</CourseFee> */}
                </Col>
                <Col xs={8}>
                    <Link className='btn btn-warning mr-2' to={`/classes/edit-course/${c.course_id}`}>Edit</Link>
                    <Button color='danger'>Delete</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {c.description}
                </Col>
            </Row>
            <Row>
                {curPageData.map((classItem, index) => {
                    classItem.img = classImagesList[index % 7 + 1]

                    return (<Col className="mb-3" key={classItem.class_id} xl={3} lg={12} md={12}>
                        <ClassCardItem classItem={classItem} />
                    </Col>)
                })}
            </Row>
            <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
        </Card>
    )
}

export default CourseCardItem
