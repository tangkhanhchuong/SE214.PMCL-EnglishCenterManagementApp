import Page from 'components/Page';
import React,{useEffect, useState} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useHttpClient, SYSTEM_URL } from '../../hooks/http-hook';


const tableTypes = ['', ''];

const TablePage = (props) => {
    const classId = props.match.params.classId;
    const currentUrl = props.match.url;

    const [students, setStudents] = useState([]);
    const [lecturers, setLecturers] = useState([]);

    const { sendRequest } = useHttpClient();

    let GetAllJoinersInClass = (type, callback) =>{
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

    useEffect(()=>{
        GetAllJoinersInClass("students", setStudents);
        GetAllJoinersInClass("lecturers", setLecturers);

    },[]);

    console.log(students);
    console.log(lecturers);

    let GetJoinersRows = (kIndex) => {
        let joinerArr = kIndex === 0 ? lecturers : students;
        return(
            joinerArr.map((row, index)=>{
                return (
                    <tr key={`rows_${kIndex}_${index}`}>
                        <th scope="row">{kIndex === 0 ? row.lecturerId : row.studentId}</th>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                    </tr>
                );
            })
        );
    }


    return (
        <>
        <Page
        className="TablePage"
        >

        <Row>
        <Col md="6" sm="12" xs="12">
            <NavLink to="/Class" style={{ textDecoration: 'none' }}>
            <Button color="primary">Back</Button>
            </NavLink>
        </Col>
        <Col md="6" sm="12" xs="12" className="text-right">
            <NavLink to={`${currentUrl}/Score`} style={{ textDecoration: 'none' }}>
                <Button outline color="primary" className="kMargin-LeftRight-5 kBtn-WSize-75">Score</Button>
            </NavLink>  
            <NavLink to={`${currentUrl}/Edit`} style={{ textDecoration: 'none' }}>
                <Button outline color="primary" className="kMargin-LeftRight-5 kBtn-WSize-75">Edit</Button>
            </NavLink>  
            <NavLink to={`${currentUrl}/Insert`} style={{ textDecoration: 'none' }}>
                <Button outline color="success" className="kMargin-LeftRight-5 kBtn-WSize-75">Insert</Button>
            </NavLink>

            
            
        </Col>
        </Row>
        <h2>{classId}</h2>

        {tableTypes.map((tableType, index) => (
            <Row key={index}>
            <Col>
                <Card className="mb-3">
                <CardHeader>{index === 0 ? 'Lecturers' : 'Students'}</CardHeader>
                <CardBody>
                    <Row>
                    <Col>
                        <Card body>
                        <Table >
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                GetJoinersRows(index)
                            }
                            
                            
                            </tbody>
                        </Table>
                        </Card>
                    </Col>
                    </Row>
                </CardBody>
                </Card>
            </Col>
            </Row>
        ))}
        
        </Page>
        </>
    );
};

export default TablePage;