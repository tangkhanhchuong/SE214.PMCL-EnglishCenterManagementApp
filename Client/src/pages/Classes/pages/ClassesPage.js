import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Page from 'components/Page'
import { Courses } from 'core/HttpRequests'
import PageSpinner from 'components/PageSpinner'

import CourseCardItem from "../components/CourseCardItem"

const CoursesList = ({coursesData}) => {
    const [courses, setCourses] = useState(coursesData)

    const deleteCourse = (id) => {
        setCourses(courses => courses.filter(c => c.course_id !== id))
    }

    return (
        courses.map(c => <CourseCardItem course={c} key={c.course_id} deleteCourse={() => deleteCourse(c.course_id)} />)
    )
}

const ClassesPage = () => {
    const { data, isLoading } = useQuery('courses', Courses.list)
    const coursesData = data ? data.data.data.courses : []

    return (
        <Page
            breadcrumbs={[{ name: 'My Classes' }]}
            title="All Classes"
        >
            {
                isLoading ? <PageSpinner /> : <CoursesList coursesData={coursesData} />
            }
        </Page>
    )
}

export default ClassesPage
