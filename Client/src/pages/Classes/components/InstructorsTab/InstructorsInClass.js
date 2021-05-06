import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { Card, CardBody, CardHeader, Table, Button, Alert } from 'reactstrap'
import { FaEye, FaTrash, } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Classes } from 'core/HttpRequests'
import PageSpinner from 'components/PageSpinner'

const InstructorsInClass = () => {
    const classId = useRouteMatch().params.classId
    const { data, isLoading } = useQuery('class_details', Classes.details.bind(this, classId))
    const { mutate, isSuccess: isRemoveSuccess } = useMutation(Classes.removeInstructorFromClass)

    if (isLoading) return <PageSpinner />

    const currentClass = data.data.data.class

    const handleDelete = (instructorId) => {
        mutate({ instructorId, classId }, {
            mutationKey: 'remove_instructor_from_class',
            onError: (err) => { console.log(err); },
        })
    }

    const getInstructorsInClass = () => {
        return (
            currentClass.instructors.map((row, index) => {
                return (
                    <tr key={`rows_${index}`}>
                        <th scope="row">{row.instructor_id}</th>
                        <td>{row.name}</td>
                        <td>
                            <Link to={`/instructors/${row.instructor_id}`} className="btn btn-success p-2"><FaEye size="25" /></Link>
                            <Button className="btn btn-danger p-2 ml-2" onClick={handleDelete.bind(this, row.instructor_id)}><FaTrash size="25" /></Button>
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <Card className="flex-grow-1 mr-3">
            <CardHeader><h4>Instructors</h4></CardHeader>
            <CardBody>
                {isRemoveSuccess ? <Alert color="danger">Instructor was removed from this class</Alert> : <></>}
                <Card body>
                    <Table >
                        <thead>
                            <tr>
                                <th>Instructor Id</th>
                                <th>Full Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getInstructorsInClass()
                            }
                        </tbody>
                    </Table>
                </Card>
            </CardBody>
        </Card>
    )
}

export default InstructorsInClass
