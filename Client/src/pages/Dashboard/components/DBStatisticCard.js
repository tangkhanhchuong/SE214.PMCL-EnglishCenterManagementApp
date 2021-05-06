import React from 'react'
import { useQuery } from 'react-query'
import { Row, Col } from 'react-bootstrap'
import { FaChalkboardTeacher, FaUserGraduate, FaGraduationCap, FaSchool } from 'react-icons/fa'

import { Statistic } from 'core/HttpRequests'
import { NumberWidget } from 'components/Widget'

const DBStatisticCard = () => {
    const { data, isSuccess } = useQuery('statistic', Statistic.entities)

    if (!isSuccess) return <></>

    const entitiesStatistic = data.data.data
    const { students_count, instructors_count, classes_count, courses_count } = entitiesStatistic
    return (
        <Row>
            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Courses"
                    subtitle="This month"
                    number={courses_count}
                    Icon={FaSchool}
                />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Classes"
                    subtitle="This month"
                    number={classes_count}
                    Icon={FaGraduationCap}
                />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Students"
                    subtitle="This month"
                    number={students_count}
                    Icon={FaUserGraduate}
                />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
                <NumberWidget
                    title="Instructors"
                    subtitle="This month"
                    number={instructors_count}
                    Icon={FaChalkboardTeacher}
                />
            </Col>
        </Row>
    )
}

export default DBStatisticCard
