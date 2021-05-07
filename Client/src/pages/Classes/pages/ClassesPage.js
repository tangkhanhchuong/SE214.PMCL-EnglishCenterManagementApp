import React, { useEffect } from 'react'

import { Row, Col } from 'reactstrap'
import Page from 'components/Page'
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Classes } from 'core/HttpRequests'
import PageSpinner from 'components/PageSpinner'

import ClassCardItem from "../components/ClassCardItem"
import { Courses } from "core/HttpRequests"

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

const ClassesList = () => {
    const { data, isLoading } = useQuery('courses', Courses.list)

    if (isLoading) return <PageSpinner />

    const coursesData = data.data.data.courses

    return (
        coursesData.map(c => (
            <div key={c.course_id} className='d-flex flex-column mb-3'>
                <div style={{ fontSize: '25px', marginBottom: '10px' }}><b>Course: </b>{c.course_id}</div>
                <Row>
                    {c.classes_in_course.map((classItem, index) => {
                        classItem.img = classImagesList[index % 7 + 1]
                        return (<Col className="mb-3" key={classItem.class_id} xl={3} lg={12} md={12}>
                            <NavLink to={`/classes/${classItem.class_id}`} style={{ textDecoration: 'none' }}>
                                <ClassCardItem classItem={classItem} />
                            </NavLink>
                        </Col>)
                    })}
                </Row>
            </div>
        ))
    )
}

const ClassesPage = () => {
    return (
        <Page
            breadcrumbs={[{ name: 'My Classes' }]}
            title="All Classes"
        >
            <ClassesList />
        </Page>
    )
}

export default ClassesPage
