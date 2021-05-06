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
import { Instructors } from 'core/HttpRequests'

import InstructorRow from '../components/InstructorRow'

const columTitles = [
    "#", "Full Name", "Avatar", "Instructor Id", "Gender", "Is Studying", "Actions"
]

const AllInstructorsPage = () => {
    const { data, isLoading } = useQuery('instructors', Instructors.list)

    let getAllInstructors = () => {
        if (!data) return <></>

        const instructorsData = data.data.data.instructors
        if (!instructorsData || instructorsData.length === 0) return <></>
        return (
            instructorsData.map((row, index) => {
                return (
                    <InstructorRow key={index} instructor={row} index={index} />
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
                isLoading
                    ? <PageSpinner />
                    : (
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
                            </CardBody>
                        </Card >
                    )
            }
        </Page >
    )
}

export default AllInstructorsPage
