import Page from 'components/Page'
import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap'
import { NavLink, useHistory } from 'react-router-dom'

import { useHttpClient } from 'hooks/http-hook'

const FORMSTATUS = {
    DEFAULT: 1,
    LOADING: 2,
    REQUEST_FAIL: 3,
    REQUEST_SUCCESSFULLY: 4
}


const ClassDetailInsertPage = (props) => {
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
        sendRequest(
            `http://localhost:5000/v1/class/${classId}`,
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
                    kClassId = response.data.id
                else
                    throw Error("Get Person Info Failed !!")

            })
            .catch((error) => {
                console.log(error)

            })
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
        <Page>
            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to={goBackUrl} style={{ textDecoration: 'none' }}>
                        <Button color="primary">Back</Button>
                    </NavLink>
                </Col>

            </Row>
            <h2>{`Insert participant to ${classId}`}</h2>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Form Validation</CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Type of participant</Label>
                                    <Input onChange={(e) => { setSearchType(e.target.value); setPersonId(""); setPersonInfo({}) }} type="select" name="select">
                                        <option value="Student">Student</option>
                                        <option value="Lecturer">Lecturer</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>{`${searchType} ID`}</Label>
                                    <Input invalid={personInfo.fail ? true : false} valid={personInfo.id ? true : false} value={personId} onChange={(e) => GetPersonInfo(e)} placeholder={`${searchType} ID`} maxLength={8} />
                                </FormGroup>



                                <FormGroup>
                                    <Label>Full Name</Label>
                                    <Input value={personInfo.name || ""} disabled invalid={personInfo.fail ? true : false} valid={personInfo.id ? true : false} />
                                    <FormText>The name field is generated automatically</FormText>
                                </FormGroup>

                                <FormGroup style={{ textAlign: 'right' }}>
                                    <Button color="success">Insert</Button>
                                </FormGroup>

                            </Form>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Page>
    )
}

export default ClassDetailInsertPage