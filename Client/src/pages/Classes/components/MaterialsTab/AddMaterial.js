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


const AddMaterial = (props) => {
    const { classId } = props

    let kClassId = 1
    let [formStatus, setFormStatus] = useState(FORMSTATUS.DEFAULT)
    const { sendRequest } = useHttpClient()

    let [searchType, setSearchType] = useState("Student")
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
        //         console.log(response.data)
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
        const kPersonId = event.target.value
        setPersonId(kPersonId)
        let kSearchType = searchType.toLowerCase()
        if (kPersonId.length === 8) {
            sendRequest(
                `http://localhost:5000/v1/${kSearchType}/${kPersonId}`,
                'GET',
            )
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        throw Error("Get Person Info Failed !!")
                    }
                })
                .then((response) => {
                    if (response.data)
                        setPersonInfo(response.data)
                    else
                        throw Error("Get Person Info Failed !!")

                })
                .catch((error) => {
                    setPersonInfo({ fail: true })
                })
        } else {
            setPersonInfo({})
        }
    }

    let handleSubmit = event => {
        setFormStatus(FORMSTATUS.LOADING)
        event.preventDefault()

        sendRequest(
            `http://localhost:5000/v1/class/${classId}/joiner`,
            'POST',
            {
                classId: kClassId,
                joinerId: personInfo.id,
                role: searchType
            },
            {
                'Content-Type': 'application/json'
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw Error("Return device Failed !!")
                }
            })
            .then((response) => {
                setTimeout(() => {
                    setFormStatus(FORMSTATUS.REQUEST_SUCCESSFULLY)
                    alert("Insert to class successfully !")
                    // history.push(goBackUrl)
                }, 1000)

            })
            .catch((error) => {
                setFormStatus(FORMSTATUS.REQUEST_FAIL)
            })
    }

    return (
        <Card className="flex-grow-1">
            <CardHeader><h4>Add Material</h4></CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input />
                    </FormGroup>

                    <FormGroup>
                        <Label>Content</Label>
                        <Input type='textarea' />
                    </FormGroup>
                    <FormGroup>
                        <Label>Link</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup style={{ textAlign: 'right' }}>
                        <Button color="success">Add</Button>
                    </FormGroup>

                </Form>
            </CardBody>
        </Card>
    )
}

export default AddMaterial