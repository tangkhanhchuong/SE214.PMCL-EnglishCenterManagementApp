import React, { useState } from 'react'
import { useQuery } from 'react-query'
import {
    Card, Table, Label,
    Button, ButtonGroup,
    CardHeader, CardBody
} from 'reactstrap'

import PageSpinner from 'components/PageSpinner'

import Page from 'components/Page'
import SearchInput from 'components/SearchInput'
import { Instructors } from 'core/HttpRequests'
import { Paginate, usePaginate } from 'components/Paginate'

import InstructorRow from '../components/InstructorRow'

const PER_PAGE = 2

const columTitles = [
    "#", "Full Name", "Avatar", "Instructor Id", "Gender", "Is Studying", "Actions"
]

const AllInstructors = ({ instructorsData }) => {
    const [instructors, setInstructors] = useState(instructorsData)
    const { curPageData, setCurrentPage, pageCount } = usePaginate(PER_PAGE, instructors)

    const deleteInstructor = (id) => {
        setInstructors(instructors => instructors.filter(s => s.instructor_id !== id))
    }

    let getAllInstructors = () => {
        if (!curPageData || curPageData.length === 0) return <></>
        return (
            curPageData.map((row, index) => {
                return (
                    <InstructorRow key={index} instructor={row} index={index} deleteInstructor={() => deleteInstructor(row.instructor_id) } />
                )
            })
        )
    }

    return (
        <Page
            breadcrumbs={[{ name: 'Instructors' }]}
            title="ALL INSTRUCTORS"
        >
            {
                    (
                        <Card className="pl-3 pr-3">
                            <CardHeader>
                                <div className="d-flex flex-row justify-content-between">
                                    <Label><h4><b>All Instructors</b></h4></Label>
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
                                            getAllInstructors()
                                        }
                                    </tbody>
                                </Table>
                                <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
                            </CardBody>
                        </Card >
                    )
            }
        </Page >
    )
}

const AllInstructorsPage = () => {
    const { data, isLoading } = useQuery('instructors', Instructors.list)

    const instructorsData = data ? data.data.data.instructors : []

    if(isLoading)   return <PageSpinner />
    return <AllInstructors instructorsData={instructorsData} />
}

export default AllInstructorsPage
