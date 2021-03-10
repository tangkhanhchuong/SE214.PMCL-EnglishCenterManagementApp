import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import {
  MdMouse,
  MdKeyboard,
  MdMic,
  MdSettingsRemote
} from 'react-icons/md';

import useAxios from '../../hooks/useAxios';
import deviceApi from '../../api/apis/deviceApi';

// <<<<<<< HEAD
// const DEVICE_TYPE = {
//   mouse: 1,
//   keyboard: 2,
//   micro: 3,
//   remote: 4
// }
// =======
// >>>>>>> restoreHistory

const GetIcon = (name) => {

  switch (name) {
    // <<<<<<< HEAD
    //     case "Mouse": return MdMouse;
    //     case "KeyBoard": return MdKeyboard;
    //     case "Micro": return MdMic;
    //     case "Remote": return MdSettingsRemote;
    // =======
    case 1: return MdMouse;
    case 2: return MdKeyboard;
    case 3: return MdMic;
    case 4: return MdSettingsRemote;
    // >>>>>>> restoreHistory

    default: return MdMouse;
  }
}

const TablePage = (props) => {
  // <<<<<<< HEAD
  //   const courseId = props.match.params.courseId;
  // =======
  // >>>>>>> restoreHistory
  const currentUrl = props.match.url;

  let history = useHistory();

  const [deviceList] = useAxios([], deviceApi.getAll);
  console.log(deviceList);

  // <<<<<<< HEAD
  //   // let kDevice = [
  //   //   { type: DEVICE_TYPE.mouse, name: 'Chuột Logitech G102', serial: 'MO_KYTP2122', room: 'E4.4', note: '' },
  //   //   { type: DEVICE_TYPE.keyboard, name: 'Bàn phím Corsair K95', serial: 'KB_ZMWS1413', room: 'E4.4', note: '' },
  //   //   { type: DEVICE_TYPE.remote, name: 'Remote máy chiếu Panasonic', serial: 'RM_QQHB9201', room: 'E4.4', note: 'Mượn để dự giờ HSG' },
  //   //   { type: DEVICE_TYPE.mouse, name: 'Chuột Fulhen X35s', serial: 'MO_KYTP7422', room: 'E4.4', note: '' },
  //   //   { type: DEVICE_TYPE.micro, name: 'Micro Sony GN120', serial: 'MI_NSLF6518', room: 'E4.4', note: '' },
  //   // ]
  // =======
  // >>>>>>> restoreHistory
  return (
    <>

      <Page
        className="TablePage"
      >

        <Row>
          <Col md="6" sm="12" xs="12">
            <NavLink to="/Device" style={{ textDecoration: 'none' }}>
              <Button color="primary">Back</Button>
            </NavLink>
          </Col>
          <Col md="6" sm="12" xs="12" className="text-right">

            <NavLink to={`${currentUrl}/Insert`} style={{ textDecoration: 'none' }}>
              <Button outline color="success" className="kMargin-LeftRight-5 kBtn-WSize-75">Insert</Button>
            </NavLink>



          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>All Devices</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table >
                        <thead>
                          <tr>
                            {/* <<<<<<< HEAD
======= */}
                            <th>Type</th>
                            {/* >>>>>>> restoreHistory */}
                            <th>Name</th>
                            <th>Series</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            deviceList.map((kDevice, index) => {
                              // <<<<<<< HEAD
                              //                               let Icon = GetIcon(kDevice.name);
                              //                               return (

                              //                                 <tr className="kTable-tr-hover" onClick={() => history.push(`/Device_Management/Device_Details/${kDevice.serial}`)}>
                              //                                   <th scope="row"><Icon /></th>
                              //                                   <td>{kDevice.name}</td>
                              //                                   <td>{kDevice.deviceId}</td>
                              // =======
                              let Icon = GetIcon(kDevice.type);
                              return (
                                <tr key={`kDeviceRow_${kDevice.serial}`} className="kTable-tr-hover" onClick={() => history.push(`/Device_Management/Device_Details/${kDevice.serial}`)}>
                                  <th scope="row"><Icon /></th>
                                  <td>{kDevice.name}</td>
                                  <td>{kDevice.serial}</td>
                                  {/* >>>>>>> restoreHistory */}
                                  <td>{kDevice.status}</td>
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
