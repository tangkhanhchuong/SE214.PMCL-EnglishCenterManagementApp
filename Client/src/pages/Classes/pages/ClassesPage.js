import React from 'react'
import { useQuery } from 'react-query'

import Page from 'components/Page'
import { Courses } from 'core/HttpRequests'
import PageSpinner from 'components/PageSpinner'

import CourseCardItem from "../components/CourseCardItem"

const ClassesList = () => {
    const { data, isLoading } = useQuery('courses', Courses.list)

    if (isLoading) return <PageSpinner />

    const coursesData = data.data.data.courses

    return (
        coursesData.map(c => <CourseCardItem course={c} key={c.course_id} />)
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
