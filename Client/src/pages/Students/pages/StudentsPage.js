import React, { useState } from 'react'
import { useQuery } from 'react-query'
import {
    Card, Table, Label,
    Button, ButtonGroup,
    CardHeader, CardBody, 
} from 'reactstrap'

import PageSpinner from 'components/PageSpinner'
import Page from 'components/Page'
import SearchInput from 'components/SearchInput'
import { Paginate, usePaginate } from 'components/Paginate'
import { Students } from 'core/HttpRequests'

import StudentRow from '../components/StudentRow'

const PER_PAGE = 3

const columTitles = [
    "#", "Full Name", "Avatar", "Student Id", "Gender", "Is Studying", "Actions"
]

const AllStudents = ({ studentsData }) => {
    const [students, setStudents] = useState(studentsData)
    const { curPageData, setCurrentPage, pageCount } = usePaginate(PER_PAGE, students)

    const deleteStudent = (id) => {
        setStudents(students => students.filter(s => s.student_id !== id))
    }

    let getAllStudents = () => {
        if (!curPageData || curPageData.length === 0) return <></>
        return (
            curPageData.map((row, index) => {
                return (
                    <StudentRow key={index} student={row} index={index} deleteStudent={() => deleteStudent(row.student_id) }/>
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
                <Card className="pl-3 pr-3">
                    <CardHeader>
                        <div className="d-flex flex-row justify-content-between">
                            <Label><h4><b>All Students</b></h4></Label>
                            <ButtonGroup>
                                <Button color="primary">Copy</Button>
                                <Button color="primary">Pdf</Button>
                                <Button color="primary" onClick={() => {

                                }}>
                                    Csv
                                    </Button>
                                <Button color="primary">Print</Button>
                            </ButtonGroup>
                            <SearchInput />
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
                        <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
                    </CardBody>
                </Card >
            }
        </Page >
    )
}

const AllStudentsPage = () => {
    const { data, isLoading } = useQuery('students', Students.list)
    const studentsData = data ? data.data.data.students : []

    if(isLoading) return <PageSpinner />
    return <AllStudents studentsData={studentsData} />
}

export default AllStudentsPage
