import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap'

import { Paginate, usePaginate } from 'components/Paginate'

const materials = [
    {
        title: "Software Engineering",
        content: "http://web.firat.edu.tr/mbaykara/softwareengineering.pdf"
    },
    {
        title: "C++ Programming",
        link: "http://www.lmpt.univ-tours.fr/~volkov/C++.pdf"
    },
    {
        title: "Discrete Math",
        link: "http://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf"
    },
    {
        title: "Discrete Math",
        link: "http://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf"
    },
    {
        title: "Discrete Math",
        link: "http://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf"
    },
    {
        title: "Discrete Math",
        link: "http://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf"
    },
    {
        title: "Discrete Math",
        link: "http://discrete.openmathbooks.org/pdfs/dmoi-tablet.pdf"
    }
]

const PER_PAGE = 2

const MaterialsList = () => {
    const { curPageData, setCurrentPage, pageCount } = usePaginate(PER_PAGE, materials)

    let getMaterials = () => {
        return (
            curPageData.map((row, index) => {
                return (
                    <tr key={`rows_${index}`}>
                        <th scope="row">{index + 1}</th>
                        <td>{row.title}</td>
                        {row.content ? <td>{row.content}</td> : <td><a>{row.link}</a></td>}
                    </tr>
                )
            })
        )
    }

    return (
        <Card className="flex-grow-1">
            <CardHeader><h4>Materials</h4></CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        <Card body>
                            <Table >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Content/Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getMaterials()
                                    }
                                </tbody>
                            </Table>
                            <Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} />
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default MaterialsList
