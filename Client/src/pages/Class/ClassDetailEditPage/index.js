import Page from 'components/Page';
import React, { useState, useEffect } from 'react';

import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import KButtonRemove from 'components/KButtonRemove'

import { useHttpClient, SYSTEM_URL } from 'hooks/http-hook';


const ClassDetailEditPage = (props) => {

    const { sendRequest } = useHttpClient();


    const currentUrl = props.match.url.split("/");
    const goBackUrl = `/${currentUrl[1]}/${currentUrl[2]}`;
    const classId = props.match.params.classId;

    const [lecturers, setLecturers] = useState([]);
    const [removedLecturers, setRemovedLecturers] = useState([]);
    const [students, setStudents] = useState([]);
    const [removedStudents, setRemovedStudents] = useState([]);


    let GetAllJoinersInClass = (type, callback) => {
        sendRequest(
            `${SYSTEM_URL}/v1/class/${classId}/${type}`,
            'GET',
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error("Get data failed !!")
                }
            })
            .then((response) => {
                console.log(response.data);
                callback(response.data);

            })
            .catch((error) => {
                console.log(error);

            });
    }

    useEffect(() => {
        GetAllJoinersInClass("students", setStudents);
        GetAllJoinersInClass("lecturers", setLecturers);

    }, []);



    const MoveAToB = (fromArr, toArr, fromIndex, fromFunc, toFunc) => {
        let a = [...fromArr];
        let b = [...toArr, a[fromIndex]];
        a.splice(fromIndex, 1);
        fromFunc(a);
        toFunc(b);
    }


    const ProcessRemove = (event, list, setList) => {
        event.preventDefault();
        let kClassId;
        let joiners = list.map((joiner, index) => {
            kClassId = joiner.classId;
            return joiner.joinerId;
        });
        sendRequest(
            `${SYSTEM_URL}/v1/class/${classId}/remove`,
            'POST',
            {
                joiners, classId: kClassId
            },
            {
                'Content-Type': 'application/json'
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error("Authentication Failed !!")
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);

            });
    }

    return (
        <Page className="TablePage">
            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to={goBackUrl} style={{ textDecoration: 'none' }}>
                        <Button color="primary">Back</Button>
                    </NavLink>
                </Col>
            </Row>

            <h2>{classId}</h2>

            <Row>
                <Col>
                    <Card>
                        <CardHeader>Lecturers</CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Card body>


                                        <div className="kTable-Height-350">
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    {
                                                        lecturers.map((lec, index) => {
                                                            return (
                                                                <tr key={`lecturer_${index}`}>
                                                                    <th>{index + 1}</th>
                                                                    <td>{lec.name}</td>
                                                                    <td>{lec.name}</td>
                                                                    <td>
                                                                        <KButtonRemove
                                                                            onClick={() => MoveAToB(lecturers, removedLecturers, index, setLecturers, setRemovedLecturers)}
                                                                            title="X"
                                                                            size="5"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>

                                            </Table>

                                        </div>

                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col>

                    <Card>
                        <CardHeader>Selected Remove</CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Card body>
                                        <div className="kTable-Height-350">
                                            <Table dark>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        removedLecturers.map((lec, index) => {
                                                            return (
                                                                <tr key={`removedLecturer_${index}`}>
                                                                    <th>{index + 1}</th>
                                                                    <td>{lec.name}</td>
                                                                    <td>{lec.name}</td>
                                                                    <td>
                                                                        <KButtonRemove
                                                                            onClick={() => MoveAToB(removedLecturers, lecturers, index, setRemovedLecturers, setLecturers)}
                                                                            title="X"
                                                                            size="5"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>


                </Col>
            </Row>
            <Row>
                <Col md="12" sm="12" xs="12" className="text-right">
                    <NavLink to={goBackUrl} style={{ textDecoration: 'none' }}>
                        <Button color="primary" onClick={(e) => ProcessRemove(e, removedLecturers, setRemovedLecturers)}>Remove</Button>
                    </NavLink>
                </Col>

            </Row>


            <Row className="kMargin-Top-50">
                <Col>
                    <Card>
                        <CardHeader>Students</CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Card body>
                                        <div className="kTable-Height-350">
                                            <Table {...{ ['default']: true }}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    {
                                                        students.map((lec, index) => {
                                                            return (
                                                                <tr key={`student_${index}`}>
                                                                    <th>{index + 1}</th>
                                                                    <td>{lec.name}</td>
                                                                    <td>{lec.name}</td>
                                                                    <td>
                                                                        <KButtonRemove
                                                                            onClick={() => MoveAToB(students, removedStudents, index, setStudents, setRemovedStudents)}
                                                                            title="X"
                                                                            size="5"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>

                                            </Table>

                                        </div>

                                    </Card>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col>

                    <Card>
                        <CardHeader>Selected Remove</CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <Card body>
                                        <div className="kTable-Height-350">
                                            <Table {...{ ['default']: true }} dark>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        removedStudents.map((lec, index) => {
                                                            return (
                                                                <tr key={`removeStudent_${index}`}>
                                                                    <th>{index + 1}</th>
                                                                    <td>{lec.name}</td>
                                                                    <td>{lec.name}</td>
                                                                    <td>
                                                                        <KButtonRemove
                                                                            onClick={() => MoveAToB(removedStudents, students, index, setRemovedStudents, setStudents)}
                                                                            title="X"
                                                                            size="5"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>


                </Col>
            </Row>
            <Row>
                <Col md="12" sm="12" xs="12" className="text-right">
                    <NavLink to={goBackUrl} style={{ textDecoration: 'none' }}>
                        <Button color="primary" onClick={(e) => ProcessRemove(e, removedStudents, setRemovedStudents)}>Remove</Button>
                    </NavLink>
                </Col>

            </Row>


        </Page>
    );
};

export default ClassDetailEditPage;
