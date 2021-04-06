import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
// <<<<<<< HEAD
// import { NavLink } from 'react-router-dom';
// =======
import { NavLink, useHistory } from 'react-router-dom';
// >>>>>>> restoreHistory

import {
  MdMouse,
  MdKeyboard,
  MdMic,
  MdSettingsRemote
} from 'react-icons/md';

// <<<<<<< HEAD
// =======
import useAxios from '../../hooks/useAxios';
import deviceApi from '../../api/apis/deviceApi';

// >>>>>>> restoreHistory
const DEVICE_TYPE = {
  mouse: 1,
  keyboard: 2,
  micro: 3,
  remote: 4
}

const CATEGORY_NAME = {
  Mouse: 1,
  Keyboard: 2,
  Micro: 3,
  Remote: 4
}

const GetIcon = (deviceType) => {
  switch (deviceType) {
    case 1: return MdMouse;
    case 2: return MdKeyboard;
    case 3: return MdMic;
    case 4: return MdSettingsRemote;

    default: return MdMouse;
  }
}

const TablePage = (props) => {

    const [deviceList] = useAxios([], deviceApi.getAll);
    const CategoryName = props.match.params.CategoryName;
    let history = useHistory();

    let filterByCategoryName = (type) => {
        if (type === CATEGORY_NAME[CategoryName]) return true;
        return false;
    }

    let ProccessOnClick = (serial, status) => {
        if(status === "Available")
            history.push(`/Device_Management/Borrow/${CategoryName}/${serial}`);
    }

    return (
        <>

        <Page
            className="TablePage"
        >

            <Row>
            <Col md="6" sm="12" xs="12">
                <NavLink to="/Device_Management/Borrow" style={{ textDecoration: 'none' }}>
                <Button color="primary">Back</Button>
                </NavLink>
            </Col>

            </Row>
            <h2>{`Borrow ${CategoryName}`}</h2>

            <Row>
            <Col>
                <Card className="mb-3">
                <CardHeader>{`All ${CategoryName}`}</CardHeader>
                <CardBody>
                    <Row>
                    <Col>
                        <Card body>
                        <Table >
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Name</th>
                                <th>Serial</th>
                                <th>Room</th>
                                <th>Note</th>

                            </tr>
                            </thead>
                            <tbody>
                            {
                                deviceList.map((kDevice, index) => {
                                let Icon = GetIcon(kDevice.type);
                                if (filterByCategoryName(kDevice.type))
                                    return (
                                    <tr key={`kDeviceRow_${kDevice.serial}`} className="kTable-tr-hover" onClick={() => ProccessOnClick(kDevice.serial, kDevice.status)}>
                                        <th scope="row"><Icon /></th>
                                        <td>{kDevice.name}</td>
                                        <td>{kDevice.serial}</td>
                                        <td>{kDevice.status}</td>
                                        <td>{kDevice.note}</td>
                                    </tr>

                                    );
                                })
                            }


                            </tbody>
                        </Table>
                        </Card>
                    </Col>
                    </Row>
                </CardBody>
                </Card>
            </Col>
            </Row>


        </Page>
        </>
    );

};

export default TablePage;
