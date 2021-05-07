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
import { Exams } from 'core/HttpRequests'

import ExamRow from '../components/ExamRow'

const columTitles = [
    'Exam Id', 'Class Id', 'Exam Time', 'Exam Date', 'Exam Type', 'Duration', 'Description', 'Actions'
]

const AllInstructorsPage = () => {
    const { data, isLoading } = useQuery('exams', Exams.list)

    let getAllExams = () => {
        if (!data) return <></>

        const examsData = data.data.data.exams
        if (!examsData || examsData.length === 0) return <></>
        return (
            examsData.map((row, index) => {
                return (
                    <ExamRow key={index} exam={row} index={index} />
                )
            })
        )
    }

    return (
        <Page
            breadcrumbs={[{ name: 'Exams' }]}
            title="ALL Exams"
        >
            {
                isLoading
                    ? <PageSpinner />
                    : (
                        <Card className="pl-3 pr-3">
                            <CardHeader>
                                <div className="d-flex flex-row justify-content-between">
                                    <Label><h4><b>All Exams</b></h4></Label>
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
                                            getAllExams()
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
