import React from 'react';

import { Card, Table, Button } from 'reactstrap';
import Page from 'components/Page';
import { NavLink } from 'react-router-dom';

const AllAssignmentsPage = () => {

    const studentsInClass = [
        { id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", semester: "1", academicYear: "2020", time: "60 minutes", createdAt: "16/3/2021", creator: "TK Chuong" },
        { id: "SE104-124", classId: "ENG1.23", className: "English1 - 23", semester: "1", academicYear: "2020", time: "60 minutes", createdAt: "16/3/2021", creator: "TK Chuong" },
        { id: "SE104-124", classId: "ENG2.22", className: "English2 - 22", semester: "1", academicYear: "2020", time: "60 minutes", createdAt: "16/3/2021", creator: "TK Chuong" },
        { id: "SE104-124", classId: "ENG3.21", className: "English 3 - 21", semester: "1", academicYear: "2020", time: "60 minutes", createdAt: "16/3/2021", creator: "TK Chuong" }
    ]

    let getAllAssignments = () => {
        let joinerArr = studentsInClass
        return (
            joinerArr.map((row, index) => {
                return (
                    <tr key={`${index}`}>
                        <th scope="row" >{row.id}</th>
                        <td>{row.classId}</td>
                        <td>{row.className}</td>
                        <td>{row.semester}</td>
                        <td>{row.academicYear}</td>
                        <td>{row.time}</td>
                        <td>{row.createdAt}</td>
                        <td>{row.creator}</td>
                        <td>
                            <Button outline color='primary'>
                                <NavLink to={`/assignments/${row.id}`} style={{ textDecoration: 'none' }} >Detail</NavLink>
                            </Button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <Page
            className="allAssignments"
            breadcrumbs={[{ name: 'Assignments' }]}
        >
            <NavLink to='/assignments/'><Button>Add Assignment</Button></NavLink>
            <Card body className="mt-3">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Class Id</th>
                            <th>Class Name</th>
                            <th>Semester</th>
                            <th>Academic Year</th>
                            <th>Time</th>
                            <th>Created At</th>
                            <th>Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getAllAssignments()
                        }
                    </tbody>
                </Table>
            </Card>
        </Page>
    );
};

export default AllAssignmentsPage;
