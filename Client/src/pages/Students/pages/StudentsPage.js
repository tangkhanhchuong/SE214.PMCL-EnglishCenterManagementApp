import React from 'react'
import { useQuery } from 'react-query'
import {
    Card, Table, Label,
    Button, ButtonGroup,
    CardHeader, CardBody
} from 'reactstrap'

import PageSpinner from 'components/PageSpinner'

import Page from 'components/Page'
import SearchInput from 'components/SearchInput'
import { Students } from 'core/HttpRequests'

import StudentRow from '../components/StudentRow'

const columTitles = [
    "#", "Full Name", "Avatar", "Student Id", "Gender", "Is Studying", "Actions"
]

const AllStudentsPage = () => {
    const { data, isLoading } = useQuery('students', Students.list)

    let getAllStudents = () => {
        if (!data) return <></>

        const studentsData = data.data.data.students
        if (!studentsData || studentsData.length === 0) return <></>
        return (
            studentsData.map((row, index) => {
                return (
                    <StudentRow key={index} student={row} index={index} />
                )
            })
        )
    }

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Students' }]}
            title="ALL STUDENTS"
        >
            {
                isLoading
                    ? <PageSpinner />
                    : (
                        <Card className="pl-3 pr-3">
                            <CardHeader>
                                <div className="d-flex flex-row justify-content-between">
                                    <Label><h4><b>All Students</b></h4></Label>
                                    <ButtonGroup>
                                        <Button color="primary">Copy</Button>
                                        <Button color="primary">Pdf</Button>
                                        <Button color="primary">Csv</Button>
                                        <Button color="primary">Print</Button>
                                    </ButtonGroup>
                                    <>
                                        <SearchInput />
                                    </>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Table striped>
                                    <thead scope="row">
                                        <tr>
                                            {
                                                columTitles.map((col, index) => (
                                                    <th scope="col" key={index}>{col}</th>
                                                ))
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getAllStudents()
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card >
                    )
            }
        </Page >
    )
}

export default AllStudentsPage
