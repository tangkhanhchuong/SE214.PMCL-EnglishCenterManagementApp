import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { Card, CardBody, CardHeader, Table, Button, Alert } from 'reactstrap'
import { FaEye, FaTrash, } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Classes } from 'core/HttpRequests'
import PageSpinner from 'components/PageSpinner'

const StudentsInClass = () => {
    const classId = useRouteMatch().params.classId
    const { data, isLoading } = useQuery('class_details', Classes.details.bind(this, classId))
    const { mutate, isSuccess: isRemoveSuccess } = useMutation(Classes.removeStudentFromClass)

    if (isLoading) return <PageSpinner />

    const currentClass = data.data.data.class

    const handleDelete = (studentId) => {
        mutate({ studentId, classId }, {
            mutationKey: 'remove_student_from_class',
            onError: (err) => { console.log(err); },
        })
    }

    const getStudentsInClass = () => {
        return (
            currentClass.students.map((row, index) => {
                return (
                    <tr key={`rows_${index}`}>
                        <th scope="row">{row.student_id}</th>
                        <td>{row.name}</td>
                        <td>
                            <Link to={`/students/${row.student_id}`} className="btn btn-success p-2"><FaEye size="25" /></Link>
                            <Button className="btn btn-danger p-2 ml-2" onClick={handleDelete.bind(this, row.student_id)}><FaTrash size="25" /></Button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <Card className="flex-grow-1 mr-3">
            <CardHeader><h4>Students</h4></CardHeader>
            <CardBody>
                {isRemoveSuccess ? <Alert color="danger">Student was removed from this class</Alert> : <></>}
                <Card body>
                    <Table >
                        <thead>
                            <tr>
                                <th>Student Id</th>
                                <th>Full Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getStudentsInClass()
                            }
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default StudentsInClass
