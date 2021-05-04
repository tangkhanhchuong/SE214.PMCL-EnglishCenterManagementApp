import React from 'react'
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap'

const materials = [
    {
        title: "TL Thuc Hanh 1",
        content: "Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay Xin Chao Tat ca cac em, Ok khong tui bay "
    },
    {
        title: "TL Thuc Hanh 2",
        link: "https://www.youtube.com/"
    },
    {
        title: "TL Thuc Hanh 3",
        link: "https://www.youtube.com/"
    },
    {
        title: "TL Thuc Hanh 4",
        content: "Xin Chao Tat ca cac em, Ok khong tui bay"
    },
]

const MaterialsList = () => {
    let getMaterials = () => {
        return (
            materials.map((row, index) => {
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
        <Card className="flex-grow-1 mr-3" style={{ maxWidth: "700px" }}>
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
                        </Card>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default MaterialsList
