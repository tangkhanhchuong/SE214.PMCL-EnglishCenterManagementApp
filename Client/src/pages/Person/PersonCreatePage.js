import Page from 'components/Page';
import React, { useState } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    Label,
    Row,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';

import uuid from 'react-uuid'


import axios from 'axios';

const domain = `http://localhost:5000`;
const personalInfoUrl = domain + `/v1/personal-info`;
const personalAddressUrl = domain + `/v1/personal-address`;

const FORMSTATUS = {
    DEFAULT: 1,
    LOADING: 2,
    REQUEST_FAIL: 3,
    REQUEST_SUCCESSFULLY: 4
}


const FormPage = (props) => {
    const currentUrl = props.match.url.split("/");
    const goBackUrl = `/${currentUrl[1]}/${currentUrl[2]}`;
    let [formStatus, setFormStatus] = useState(FORMSTATUS.DEFAULT);
    const history = useHistory();

    let [state, setState] = useState({ email: false });

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [streetDetails, setStreetDetails] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");


    const generateStudentId = () => ("1852" + Math.floor((Math.random() * 1000000) + 1)).slice(0, 8);

    const generateLecturerId = () => ("AB" + Math.floor((Math.random() * 1000000) + 1)).slice(0, 8);

    let handleValidSubmit = async (e) => {
        e.preventDefault();

        const domain = `http://localhost:5000`;
        const addressId = uuid();
        await axios.post(`${domain}/v1/personal-address`, { addressId, streetDetails, ward, district, city, country });
        const addressResponse = await axios.get(`${domain}/v1/personal-address`);
        const addressList = addressResponse.data.data;
        const [insertedAddress] = addressList.filter(item => item.streetDetails == streetDetails && item.ward == ward && item.district == district
            && item.city == city && item.country == country);
        const address = insertedAddress.id;


        //insert personal information
        await axios.post(`${domain}/v1/personal-info`, { name, phone, gender, dateOfBirth: dob, email, addressId: address });
        const infoResponse = await axios.get(`${domain}/v1/personal-info`);
        const infoList = infoResponse.data.data;
        const [insertInfo] = infoList.filter(item => item.name == name && item.phone == phone && item.gender == gender
            && item.email == email && item.addressId == address);
        const infoId = insertInfo.id;

        console.log(infoId);
        if (currentUrl[2] == "Student") {
            await axios.post(`${domain}/v1/student`, { studentId: generateStudentId(), personalInformationId: infoId });
        }
        else if (currentUrl[2] == "Lecturer") {
            console.log("b");
            await axios.post(`${domain}/v1/lecturer`, { lecturerId: generateLecturerId(), personalInformationId: infoId });
        }
        alert("Create successfully !");
        history.push(`${goBackUrl}/All`);
    }


    let closeModal = () => {
        setState({ email: false, error: false });
    }

    return (
        <Page>
            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to={`${goBackUrl}/All`} style={{ textDecoration: 'none' }}>
                        <Button color="primary">Back</Button>
                    </NavLink>
                </Col>
            </Row>
            <AvForm onSubmit={(e) => handleValidSubmit(e)}>
                <Row>
                    <Col xl={6} lg={12} md={12}>
                        <Card>
                            <CardHeader>Personal Information</CardHeader>
                            <CardBody>
                                <AvField id="name" name="name" label="Full Name *" type="text" errorMessage="Invalid student full name" validate={{
                                    required: { value: true },
                                    pattern: { value: '^[A-Za-z ]+$' },
                                    minLength: { value: 6 },
                                    maxLength: { value: 30 }

                                }} onChange={(event) => { setName(event.target.value) }} />

                                Gender *
                                <AvRadioGroup id="gender" name="gender" label="" required errorMessage="Pick one!" inline onChange={event => {
                                    event.persist();
                                    setGender(event.target.value)
                                }}>
                                    <AvRadio label="Male" value="Male" />
                                    <AvRadio label="Female" value="Female" />
                                </AvRadioGroup>

                                <AvField id="dob" name="dateOfBirth" label="Date of Birth *" type="date" format='YYYY/MM/DD'
                                    validate=
                                    {{
                                        date: { format: 'MM/DD/YYYY' },
                                        required: { value: true, errorMessage: "This field is required !" },
                                        dateRange: {
                                            start: { value: '01/01/1900' },
                                            end: { value: '01/01/2010' },
                                        }

                                    }} onChange={(event) => { setDob(event.target.value) }}
                                />




                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6} lg={12} md={12}>
                        <Card>
                            <CardHeader>Contact Information</CardHeader>
                            <CardBody>
                                <AvField id="phone" name="phone" label="Phone Number *" type="text" errorMessage="Invalid phone number" validate={{
                                    required: { value: true, errorMessage: "This field is required !" },
                                    pattern: { value: '^[0-9]+$' },
                                    minLength: { value: 10 },
                                    maxLength: { value: 11 }

                                }} onChange={(event) => { setPhone(event.target.value) }} />

                                <AvField id="email" name="email" label="Email *" type="email" required errorMessage="This email is invalid !"
                                    onChange={(event) => { setEmail(event.target.value) }} />

                                <Label htmlFor="exampleDate">Address</Label>
                                <InputGroup id="street" htmlFor="streetDetail" className="mb-3" onChange={(event) => { setStreetDetails(event.target.value); }}>

                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Street</InputGroupText>
                                    </InputGroupAddon>
                                    <Input />
                                </InputGroup>
                                <InputGroup id="ward" className="mb-3" onChange={(event) => { setWard(event.target.value); }}>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Ward</InputGroupText>
                                    </InputGroupAddon>
                                    <Input />
                                </InputGroup>
                                <InputGroup id="district" className="mb-3" onChange={(event) => { setDistrict(event.target.value); }}>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>District</InputGroupText>
                                    </InputGroupAddon>
                                    <Input />
                                </InputGroup>
                                <InputGroup id="city" className="mb-3" onChange={(event) => { setCity(event.target.value); }}>

                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>City </InputGroupText>
                                    </InputGroupAddon>
                                    <Input />
                                </InputGroup>

                                <InputGroup id="country" className="mb-3" onChange={(event) => { setCountry(event.target.value); }}>

                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Country </InputGroupText>
                                    </InputGroupAddon>
                                    <Input />
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" sm="12" xs="12" className="text-right">


                        <Button color="primary" disabled={(formStatus == FORMSTATUS.LOADING) ? true : false}>
                            {(formStatus == FORMSTATUS.LOADING) ? "Loading..." : "Create"}
                        </Button>


                    </Col>

                </Row>
            </AvForm>

        </Page >);

};

export default FormPage;
