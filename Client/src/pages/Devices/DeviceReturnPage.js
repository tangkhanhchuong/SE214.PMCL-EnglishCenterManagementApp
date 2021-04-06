import Page from 'components/Page';
// <<<<<<< HEAD
// import React from 'react';
// =======
import React, { useState } from 'react';
// >>>>>>> restoreHistory
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
} from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';

import { useHttpClient } from '../../hooks/http-hook';


const FORMSTATUS = {
    DEFAULT: 1,
    LOADING: 2,
    REQUEST_FAIL: 3,
    REQUEST_SUCCESSFULLY: 4
}


const FormPage = (props) => {
    const history = useHistory();
    let [deviceInfo, setDeviceInfo] = useState({});
    let [formStatus, setFormStatus] = useState(FORMSTATUS.DEFAULT);
    const { sendRequest } = useHttpClient();

    let GetDeviceInfo = (event) => {
        let serial = event.target.value;
        console.log(serial);
        if (serial.length >= 11) {
            sendRequest(
                `http://localhost:5000/v1/device/${serial}`,
                'GET',
            )
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw Error("Get Device Info Failed !!")
                    }
                })
                .then((response) => {
                    setDeviceInfo(response);
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    setDeviceInfo({ fail: true })
                });
        } else {
            setDeviceInfo({});
        }
    }

    let handleSubmit = event => {
        setFormStatus(FORMSTATUS.LOADING);
        event.preventDefault();

        sendRequest(
            `http://localhost:5000/v1/device/return`,
            'POST',
            {
                serial: deviceInfo.serial
            },
            {
                'Content-Type': 'application/json'
            }
        )
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error("Return device Failed !!")
            }
        })
        .then((response) => {
            console.log(response);
            setTimeout(() => {
                setFormStatus(FORMSTATUS.REQUEST_SUCCESSFULLY);
                alert("Return device successfully !");
                history.push("/Device");
            }, 1000);

        })
        .catch((error) => {
            console.log(error);
            setFormStatus(FORMSTATUS.REQUEST_FAIL);
        });
    }

    // >>>>>>> restoreHistory
    return (
        <Page>
            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to='/Device' style={{ textDecoration: 'none' }}>
                        <Button color="primary">Back</Button>
                    </NavLink>
                </Col>

            </Row>
            <h2>Return Device</h2>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Device Info</CardHeader>
                        <CardBody>

                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Device Serial</Label>
                                    <Input invalid={deviceInfo.fail ? true : false} valid={deviceInfo.serial ? true : false} onChange={(e) => GetDeviceInfo(e)} placeholder="XX_AAAAPPPP" maxLength="11" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="exampleSelectMulti">Type of device</Label>
                                    <Input value={deviceInfo.type || 0} disabled type="select" name="type" placeholder="Select type of device">
                                        <option disabled value={0}></option>
                                        <option value={1}>Mouse</option>
                                        <option value={2}>Keyboard</option>
                                        <option value={3}>Micro</option>
                                        <option value={4}>Remote</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Device Name</Label>
                                    <Input value={deviceInfo.name || ""} disabled required name="name" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Brand</Label>
                                    <Input value={deviceInfo.brand || ""} disabled name="brand" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Description</Label>
                                    <Input value={deviceInfo.description || ""} disabled name="description" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Note</Label>
                                    <Input value={deviceInfo.note || ""} name="note" disabled />
                                </FormGroup>



                                <FormGroup style={{ textAlign: 'right' }}>
                                    <Button color="success" disabled={(formStatus == FORMSTATUS.LOADING || !deviceInfo.serial) ? true : false}>
                                        {(formStatus == FORMSTATUS.LOADING) ? "Loading..." : "Return"}
                                    </Button>
                                    
                                </FormGroup>

                            </Form>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Page >
    );
};

export default FormPage;
