import Page from 'components/Page'
import React, { useState, useEffect } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap'
import { useHistory } from 'react-router-dom'

import { CheckBoxContainer } from 'components/Form/CheckBox'
import { useHttpClient } from 'hooks/http-hook'

const FORMSTATUS = {
    DEFAULT: 1,
    LOADING: 2,
    REQUEST_FAIL: 3,
    REQUEST_SUCCESSFULLY: 4
}


const AddClassPage = (props) => {
    const currentUrl = props.match.url.split("/")
    const goBackUrl = `/${currentUrl[1]}/${currentUrl[2]}`
    const classId = props.match.params.classId
    const history = useHistory()
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
                    console.log(response.data)
                    if (response.data)
                        setPersonInfo(response.data)
                    else
                        throw Error("Get Person Info Failed !!")

                })
                .catch((error) => {
                    console.log(error)
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
                console.log(response)
                setTimeout(() => {
                    setFormStatus(FORMSTATUS.REQUEST_SUCCESSFULLY)
                    alert("Insert to class successfully !")
                    history.push(goBackUrl)
                }, 1000)

            })
            .catch((error) => {
                console.log(error)
                setFormStatus(FORMSTATUS.REQUEST_FAIL)
            })
    }

    return (
        <Page
            breadcrumbs={[{ name: 'Add Class' }]}
            title="Add Class">
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader><h4><strong>New Class</strong></h4></CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label><strong>Class Id</strong></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Class Name</strong></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Course Id</strong></Label>
                                    <Input />
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Course Name</strong></Label>
                                    <Input />
                                    <FormText>The name field is generated automatically</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Begin Date</strong></Label>
                                    <Input type="date" />
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Class Period</strong></Label>
                                    <div className="d-flex flex-row align-items-center">
                                        <Input style={{ maxWidth: "50px" }} className="mr-3" /> Month(s)
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Schedule</strong></Label>
                                    <CheckBoxContainer />
                                </FormGroup>
                                <FormGroup>
                                    <Label><strong>Time Slot</strong></Label>
                                    <div className="d-flex justify-content-around">
                                        <div className="d-flex flex-row align-items-between">
                                            <Label>From: </Label>
                                            <Input type="time" style={{ maxWidth: "130px" }} className="ml-3" />
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <Label>To: </Label>
                                            <Input type="time" style={{ maxWidth: "130px" }} className="ml-3" />
                                        </div>
                                    </div>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Page>
    )
}

export default AddClassPage