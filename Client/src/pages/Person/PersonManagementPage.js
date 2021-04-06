
// import React from 'react';
// import { Card, CardBody, CardHeader, Col, Row, Table, Button } from 'reactstrap';
// import { NavLink, useHistory } from 'react-router-dom';
// import moment from 'moment'
// import {
//   MdLanguage,
//   MdThumbsUpDown,
//   MdThumbUp,
// } from 'react-icons/md';

// import Page from 'components/Page';
// import useAxios from '../../hooks/useAxios';
// // import studentApi from '../../api/apis/studentApi';
// // import lecturerApi from '../../api/apis/lecturerApi';

// const TablePage = (props) => {
//   const type = props.match.params.type; // Student or Lecturer

//   const splittedUrl = props.match.url.split("/");
//   const currentUrl = `/${splittedUrl[1]}/${splittedUrl[2]}`;

//   let history = useHistory();

//   // const [studentList] = useAxios([], studentApi.getAll);
//   // const [lecturerList] = useAxios([], lecturerApi.getAll);

//   const dataList = splittedUrl[2] == "Student" ? studentList : lecturerList;

//   return (
//     <Page className="TablePage">
//       <Row>
//         <Col md="6" sm="12" xs="12">
//           <NavLink to="/Person" style={{ textDecoration: 'none' }}>
//             <Button color="primary">Back</Button>
//           </NavLink>
//         </Col>
//         <Col md="6" sm="12" xs="12" className="text-right">

//           <NavLink to={`${currentUrl}/Create`} style={{ textDecoration: 'none' }}>
//             <Button outline color="success" className="kMargin-LeftRight-5 kBtn-WSize-75">Create</Button>
//           </NavLink>
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           <Card className="mb-3">
//             <CardHeader>{`All ${type}s`}</CardHeader>
//             <CardBody>
//               <Row>
//                 <Col>
//                   <Card body>
//                     <Table >
//                       <thead>
//                         <tr>
//                           <th>{`${type} ID`}</th>
//                           <th>Name</th>
//                           <th>Phone</th>
//                           <th>Gender</th>
//                           <th>Date Of Birth</th>
//                           <th>Email</th>

//                         </tr>
//                       </thead>
//                       <tbody>
//                         {
//                           dataList.map((item, index) => {
//                             let kId = item[type.toLowerCase() + "Id"];
//                             return (
//                               <tr key={`row_${type}_${index}`} className="kTable-tr-hover" onClick={() => history.push(`/Person_Management/${type}/${kId}/Edit`)}>
//                                 <th>{kId}</th>
//                                 <td>{item.name}</td>
//                                 <td>{item.phone}</td>
//                                 <td>{item.gender}</td>
//                                 <td>{moment(item.dateOfBirth).format('DD/MM/YYYY')}</td>
//                                 <td>{item.email}</td>

//                               </tr>

//                             );
//                           })
//                         }
//                       </tbody>
//                     </Table>
//                   </Card>
//                 </Col>
//               </Row>
//             </CardBody >
//           </Card >
//         </Col >
//       </Row >
//     </Page >
//   );
// };

// export default TablePage;
