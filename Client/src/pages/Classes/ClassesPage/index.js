import React from 'react'

import { Row, Col } from 'reactstrap'
import Page from 'components/Page'
import { NavLink } from 'react-router-dom'

import ClassCardItem from "./ClassCardItem"

import classImg1 from 'assets/img/class-img/class-img-1.svg'
import classImg2 from 'assets/img/class-img/class-img-2.svg'
import classImg3 from 'assets/img/class-img/class-img-3.svg'
import classImg4 from 'assets/img/class-img/class-img-4.svg'
import classImg5 from 'assets/img/class-img/class-img-5.svg'
import classImg6 from 'assets/img/class-img/class-img-6.svg'
import classImg7 from 'assets/img/class-img/class-img-7.svg'

const ClassesPage = () => {

    const groupByKey = (list, key) => list.reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {})

    // const groupedClassesListByCourseId = Object.values(groupByKey(courseList, "courseId"))

    const classes = [
        { classId: "ENG1", className: "English1", instructor: "Chuong", description: "Hi, this is english course", img: classImg1 },
        { classId: "ENG2", className: "English2", instructor: "Chuong", description: "Hi, this is english course", img: classImg2 },
        { classId: "ENG3", className: "English3", instructor: "Chuong", description: "Hi, this is english course", img: classImg3 },
        { classId: "ENG3", className: "English3", instructor: "Chuong", description: "Hi, this is english course", img: classImg4 },
        { classId: "ENG3", className: "English3", instructor: "Chuong", description: "Hi, this is english course", img: classImg5 },
        { classId: "ENG3", className: "English3", instructor: "Chuong", description: "Hi, this is english course", img: classImg6 },
        { classId: "ENG3", className: "English3", instructor: "Chuong", description: "Hi, this is english course", img: classImg7 }
    ]

    return (
        <Page
            className="WidgetPage"
            breadcrumbs={[{ name: 'My Classes' }]}>
            <Row>
                {classes.map((classItem, index) =>
                (<div key={`groupCourse_${index}`}>
                    <Col key={`course_${index}`} className="mb-3">
                        <NavLink to={`/classes/${classItem.classId}`} style={{ textDecoration: 'none' }}>
                            <ClassCardItem classItem={classItem} />
                        </NavLink>
                    </Col>
                </div>)
                )}
            </Row>
        </Page>
    )
}

export default ClassesPage
