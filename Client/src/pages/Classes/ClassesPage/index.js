import React, { useEffect } from 'react'

import { Row, Col } from 'reactstrap'
import Page from 'components/Page'
import { NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'

import ClassCardItem from "./ClassCardItem"
import { Classes } from 'core/HttpRequests'
import PageSpinner from 'components/PageSpinner'
import MyArray from 'utils/arrays'


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
    const { data, isLoading } = useQuery('all-classes', Classes.list)

    if (isLoading) return <PageSpinner />

    const classesData = [...data.data.classes]
        .map(classItem => (
            { ...classItem, instructor: "Chuong", img: MyArray.randomElement(classImagesList) }
        ))

    return (
        <Row>
            {classesData.map((classItem, index) =>
            (<div key={`groupCourse_${index}`}>
                <Col key={`course_${index}`} className="mb-3">
                    <NavLink to={`/classes/${classItem.classId}`} style={{ textDecoration: 'none' }}>
                        <ClassCardItem classItem={classItem} />
                    </NavLink>
                </Col>
            </div>)
            )}
        </Row>
    )
}

const ClassesPage = () => {
    // const groupedClassesListByCourseId = Object.values(groupByKey(courseList, "courseId"))



    return (
        <Page
            className="WidgetPage"
            breadcrumbs={[{ name: 'My Classes' }]}
            title="All Classes"
        >
            <ClassesList />
        </Page>
    )
}

export default ClassesPage
