import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
} from 'reactstrap'

import { useHttpClient } from 'hooks/http-hook'

const FORMSTATUS = {
    DEFAULT: 1,
    LOADING: 2,
    REQUEST_FAIL: 3,
    REQUEST_SUCCESSFULLY: 4
}


const AddInstructors = ({ classId, setInstructorsList }) => {

    let kClassId = 1
    let [formStatus, setFormStatus] = useState(FORMSTATUS.DEFAULT)
    const { sendRequest } = useHttpClient()

    let [personId, setPersonId] = useState("")
    let [personInfo, setPersonInfo] = useState({})

    useEffect(() => {
        // sendRequest(
        //     `http://localhost:5000/v1/class/${classId}`,
        //     'GET',
        // )
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         } else {
        //             throw Error("Get Person Info Failed !!")
        //         }
        //     })
        //     .then((response) => {
        //         if (response.data)
        //             kClassId = response.data.id
        //         else
        //             throw Error("Get Person Info Failed !!")

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }, [])

    let GetPersonInfo = (event) => {
        // const kPersonId = event.target.value
        // setPersonId(kPersonId)
        // if (kPersonId.length !== 8) {
        //     return
        // }
        // sendRequest(`http://localhost:5000/persons/instructors/${kPersonId}`, 'GET')
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         } else {
        //             throw Error("Get Person Info Failed !!")
        //         }
        //     })
        //     .then((response) => {
        //         console.log(response.instructor)
        //         if (response.instructor)
        //             setPersonInfo(response.instructor)
        //         else
        //             throw Error("Get Person Info Failed !!")

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         setPersonInfo({ fail: true })
        //     })
    }

    let handleSubmit = e => {

        // e.preventDefault()

        // if (personId.length < 8) return

        // const id = e.target[1].value
        // const fullName = e.target[2].value

        // setInstructorsList((prev) => ([...prev, { id, fullName }]))
        // setFormStatus(FORMSTATUS.LOADING)

        // sendRequest(
        //     `http://localhost:5000/v1/class/${classId}/joiner`,
        //     'POST',
        //     {
        //         classId: kClassId,
        //         joinerId: personInfo.id,
        //         role: searchType
        //     },
        //     {
        //         'Content-Type': 'application/json'
        //     }
        // )
        //     .then((response) => {
        //         if (response.ok) {
        //             return response.json()
        //         } else {
        //             throw Error("Return device Failed !!")
        //         }
        //     })
        //     .then((response) => {
        //         console.log(response)
        //         setTimeout(() => {
        //             setFormStatus(FORMSTATUS.REQUEST_SUCCESSFULLY)
        //             alert("Insert to class successfully !")
        //             // history.push(goBackUrl)
        //         }, 1000)

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         setFormStatus(FORMSTATUS.REQUEST_FAIL)
        //     })
    }

    return (
        <Card className="flex-grow-1 ml-3" style={{ maxHeight: "440px" }}>
            <CardHeader><h4>Add Instructor</h4></CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="role">Role in class</Label>
                        <Input disabled value="Instructor" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="id">Instructor ID</Label>
                        <Input invalid={personInfo.fail ? true : false} valid={personInfo.id ? true : false} value={personId} onChange={(e) => GetPersonInfo(e)} placeholder="Instructor ID" maxLength={8} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Full Name</Label>
                        <Input value={personInfo.name || ""} disabled invalid={personInfo.fail ? true : false} valid={personInfo.id ? true : false} />
                        <FormText>This field is generated automatically</FormText>
                    </FormGroup>

                    <FormGroup style={{ textAlign: 'right' }}>
                        <Button color="success">Add</Button>
                    </FormGroup>

                </Form>
            </CardBody>
        </Card>
    )
}

export default AddInstructors