import Page from 'components/Page';
import React from 'react';
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

import { useHttpClient, SYSTEM_URL } from '../../hooks/http-hook';


const FormPage = (props) => {
    const history = useHistory();
    const { sendRequest } = useHttpClient();

    let handleSubmit = event => {
        event.preventDefault();
        let type = event.target["type"].value;
        let name = event.target["name"].value;
        let brand = event.target["brand"].value;
        let description = event.target["description"].value;
        console.log(type, name, brand, description);
        sendRequest(
            `${SYSTEM_URL}/v1/device`,
            'POST',
            {
                type, name, brand, description
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
                alert("Insert device successfully !");
                history.push("/Device_Management");

            })
            .catch((error) => {
                console.log(error);

            });
    }

    return (
        <Page>
            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to="/Device_Management" style={{ textDecoration: 'none' }}>
                        <Button color="primary">Back</Button>
                    </NavLink>
                </Col>

            </Row>
            <h2>Insert device</h2>
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Form Validation</CardHeader>
                        <CardBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Type of device</Label>
                                    <Input defaultValue={0} type="select" name="type" placeholder="Select type of device">
                                        <option disabled value={0}>Select type of device</option>
                                        <option value={1}>Mouse</option>
                                        <option value={2}>Keyboard</option>
                                        <option value={3}>Micro</option>
                                        <option value={4}>Remote</option>
                                        {/* >>>>>>> restoreHistory */}
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Device Name</Label>
                                    <Input required name="name" placeholder="Device name" />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Brand</Label>
                                    <Input name="brand" placeholder="Device brand" />
                                    
                                </FormGroup>

                                <FormGroup>
                                    <Label>Description</Label>
                                    <Input name="description" placeholder="Device description" />
                                </FormGroup>

                                <FormGroup style={{ textAlign: 'right' }}>
                                    <Button color="success">Insert</Button>
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
