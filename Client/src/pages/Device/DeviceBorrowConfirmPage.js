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
} from 'reactstrap';
import { NavLink, useHistory} from 'react-router-dom';


import { useHttpClient } from '../../hooks/http-hook';


const FORMSTATUS = {
    DEFAULT : 1,
    LOADING : 2,
    REQUEST_FAIL : 3,
    REQUEST_SUCCESSFULLY : 4
}


const FormPage = (props) => {
    const history = useHistory();
    const { sendRequest } = useHttpClient();
    let [deviceInfo, setDeviceInfo] = useState({});
    let [formStatus, setFormStatus] = useState(FORMSTATUS.DEFAULT);

    const CategoryName = props.match.params.CategoryName;
    const DeviceId = props.match.params.DeviceId;
    const splittedUrl = props.match.url.split("/");
    const goBackUrl = `/${splittedUrl[1]}/${splittedUrl[2]}/${splittedUrl[3]}`;


    useEffect(()=>{
        sendRequest(
            `http://localhost:5000/v1/device/${DeviceId}`, 
            'GET',
        )
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw Error("Get Device Info Failed !!")
            }
        })
        .then((response)=>{
            setDeviceInfo(response);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            
        });
    },[])

    let handleSubmit = event => {
        setFormStatus(FORMSTATUS.LOADING);
        event.preventDefault();
        let borrower = event.target["borrower"].value;
        let note = event.target["note"].value;
        
        console.log(borrower,note);
        sendRequest(
            `http://localhost:5000/v1/device/borrow`, 
            'POST',
            {
                serial: DeviceId, borrower, note
            },
            {
                'Content-Type' : 'application/json'
            }
        )
        .then((response) => {
            if(response.ok){
                return response.json();
            }else{
                throw Error("Borrow Failed !!")
            }
        })
        .then((response)=>{
            console.log(response);
            setTimeout(()=>{
                setFormStatus(FORMSTATUS.REQUEST_SUCCESSFULLY);
                alert("Borrow device successfully !");
                history.push(goBackUrl);
            }, 1000);
           
        })
        .catch((error) => {
            console.log(error);
            setFormStatus(FORMSTATUS.REQUEST_FAIL);
        });
    }

    return (
        <Page>
            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to={`${goBackUrl}`} style={{ textDecoration: 'none' }}>
                    <Button color="primary">Back</Button>
                    </NavLink>
                </Col>
                
            </Row>
            <h2>{`Borrow ${CategoryName} ${DeviceId}`}</h2>
            <Row>
                <Col xl={6} lg={12} md={12}>
            <Card>
                <CardHeader>Form Validation</CardHeader>
                <CardBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Type of device</Label>
                        <Input value={deviceInfo.type || 0} disabled type="select" name="type" placeholder="Select type of device">
                            <option  disabled value={0}>Loading...</option>
                            <option value={1}>Mouse</option>
                            <option value={2}>Keyboard</option>
                            <option value={3}>Micro</option>
                            <option value={4}>Remote</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                    <Label>Device Name</Label>
                        <Input value={deviceInfo.name || "Loading..."} disabled required name="name" placeholder="Device name"  />
                    </FormGroup>
                    
                    <FormGroup>
                    <Label>Brand</Label>
                        <Input value={deviceInfo.brand || "Loading..."} disabled name="brand" placeholder="Device brand"  />
                    </FormGroup>

                    <FormGroup>
                    <Label>Description</Label>
                        <Input value={deviceInfo.description || "Loading..."} disabled name="description" placeholder="Device description"  />
                    </FormGroup>

                    <FormGroup>
                    <Label>Borrower</Label>
                    <Input name="borrower" placeholder="Borrower Name or ID"  />
                    </FormGroup>

                    <FormGroup>
                    <Label>Note</Label>
                    <Input name="note" placeholder="Note"  />
                    </FormGroup>

                    <FormGroup style={{textAlign : 'right'}}>
                        <Button color="success" disabled={(formStatus == FORMSTATUS.LOADING) ? true : false}>
                            {(formStatus == FORMSTATUS.LOADING) ? "Loading..." : "Borrow"}
                        </Button>
                    </FormGroup>
                    
                </Form>
                </CardBody>
            </Card>
            </Col>

            </Row>
        </Page>
    );
};

export default FormPage;
