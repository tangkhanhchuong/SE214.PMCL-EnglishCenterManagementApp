import React from 'react';

import { Row, Col, Button } from 'reactstrap';

import Page from 'components/Page';
// import { IconWidget } from 'components/Widget';

import { deviceBorrowRoute } from 'demos/devicePage.js';
import { NavLink } from 'react-router-dom';



const WidgetPage = (props) => {

    // const courseId = props.match.params.courseId;
    // const currentUrl = props.match.url;

    return (
        <Page
            className="WidgetPage"
        >

            <Row>
                <Col md="6" sm="12" xs="12">
                    <NavLink to="/Device" style={{ textDecoration: 'none' }}>
                        <Button color="primary">Back</Button>
                    </NavLink>
                </Col>

            </Row>

            <h2>Device Borrow</h2>

            <Row>
                <Col md="12" sm="12" xs="12">
                    <center>
                        {deviceBorrowRoute.map(
                            ({ bgColor, Icon, title, subtitle, to, ...restProps }, index) => (

                               
                                <NavLink key={`DeviceBorrowType-${index}`} to={to || '/'} style={{ textDecoration: 'none' }}>
                                   
                                    <Button outline color="success" className="kMargin-LeftRight-5 mb-2"> <Icon /> {title}</Button>
                                </NavLink>
                            )
                        )}
                    </center>
                </Col>
            </Row>


        </Page>
    );
};

export default WidgetPage;
