import Page from 'components/Page';
import React, {useEffect, useState} from 'react';
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
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';

import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useHttpClient } from '../../hooks/http-hook';

const FormPage = (props) => {
    const currentUrl = props.match.url.split("/");
    const goBackUrl = `/${currentUrl[1]}/${currentUrl[2]}/All`;
    const personId = props.match.params.personId;
    const type = props.match.params.type;
    const { sendRequest } = useHttpClient();
    let [personInfo, setPersonInfo] = useState({});
    const history = useHistory();


    let GetPersonInfo = () => {
        const kType = type.toLowerCase();
        sendRequest(
            `http://localhost:5000/v1/${kType}/${personId}`,
            'GET',
        )
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error("Get Person Info Failed !!")
            }
        })
        .then((response) => {
            console.log(response.data);
            if(response.data)
                setPersonInfo(response.data);
            else
                throw Error("Get Person Info Failed !!")
            
        })
        .catch((error) => {
            console.log(error);
            setPersonInfo({ fail: true })
        });
    } 
    

    useEffect(()=>{
        GetPersonInfo();
    },[])

    let GetDisableStatus = () => {
        if(!personInfo.id) return true;
        return false;
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        alert("Update successfully !");
        history.push(goBackUrl);
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
            <h2>{personId}</h2>
           
            <AvForm onSubmit={(e)=>handleSubmit(e)}>
            <Row>
                
                        
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Personal Information</CardHeader>
                        <CardBody>
                        
                        <AvField name="form-personalId" label="Student ID" type="text" value={personId} disabled/>

                        <AvField name="form-fullname" label="Full Name *" type="text"
                            value={personInfo.name || "Loading"} 
                            errorMessage="Invalid student full name" 
                            validate={{
                                required: {value: true},
                                pattern: {value: '^[A-Za-z ]+$'},
                                minLength: {value: 6},
                                maxLength: {value: 30}
                            }}
                            disabled={GetDisableStatus()} 
                        />
                                
                        <AvField name="form-dob" label="Date of Birth *" type="date" 
                            value={personInfo.dateOfBirth} 
                            validate=
                            {{ 
                                date: {format: 'MM/DD/YYYY'},
                                required: {value: true,  errorMessage: "This field is required !" },
                                dateRange: {
                                    start: {value: '01/01/1900'} ,
                                    end: {value: '01/01/2010'} ,
                                }
                            }} 
                            disabled={GetDisableStatus()} 
                        />
                        

                        </CardBody>
                    </Card>
                </Col>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>Contact Information</CardHeader>
                        <CardBody>

                            <AvField name="form-phone" label="Phone Number" type="text" 
                                value={personInfo.phone || "Loading..."}
                                errorMessage="Invalid phone number" 
                                validate={{
                                    required: {value: true,  errorMessage: "This field is required !" },
                                    pattern: {value: '^[0-9]+$'},
                                    minLength: {value: 10},
                                    maxLength: {value: 11}
                                }} 
                                disabled={GetDisableStatus()} 
                            />

                            <AvField 
                                value={personInfo.email || "Loading..."}
                                name="form-email" label="Email" type="email" 
                                required 
                                errorMessage="This email is invalid !"
                                disabled={GetDisableStatus()} 
                            />
                            
                            <Label for="exampleDate">Address</Label>
                            <InputGroup className="mb-3">                           
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>Street</InputGroupText>
                                </InputGroupAddon>
                                <Input value={personInfo.streetDetails || "Loading..."}  disabled={GetDisableStatus()}/>
                            </InputGroup>
                            <InputGroup className="mb-3">                           
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>District</InputGroupText>
                                </InputGroupAddon>
                                <Input value={personInfo.district || "Loading..."}  disabled={GetDisableStatus()}/>
                            </InputGroup>
                            <InputGroup>                           
                                <InputGroupAddon addonType="prepend">
                                <InputGroupText>City </InputGroupText>
                                </InputGroupAddon>
                                <Input value={personInfo.city || "Loading..."}  disabled={GetDisableStatus()}/>
                            </InputGroup>

                        
                        </CardBody>
                    </Card>
                </Col>
            
                
            </Row>
            

            <Row>
                <Col md="12" sm="12" xs="12" className="text-right">
                    
                    <Button color="primary">Update</Button>
                    
                </Col>
        
            </Row>
            </AvForm>
           
           </Page>
    );
}

export default FormPage;
