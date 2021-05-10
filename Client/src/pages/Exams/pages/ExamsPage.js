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
import { Paginate, usePaginate } from 'components/Paginate'

import ExamRow from '../components/ExamRow'

const PER_PAGE = 2

const columTitles = [
    'Exam Id', 'Class Id', 'Exam Time', 'Exam Date', 'Exam Type', 'Duration', 'Description', 'Actions'
]

const AllInstructorsPage = () => {
    const { data, isLoading } = useQuery('exams', Exams.list)

    const examsData = data ? data.data.data.exams : []
    const { curPageData, setCurrentPage, pageCount } = usePaginate(PER_PAGE, examsData)

    let getAllExams = () => {
        if (!data) return <></>

        if (!curPageData || curPageData.length === 0) return <></>
        return (
            curPageData.map((row, index) => {
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
                                <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
                            </CardBody>
                        </Card >
                    )
            }
        </Page >
    )
}

export default AllInstructorsPage
