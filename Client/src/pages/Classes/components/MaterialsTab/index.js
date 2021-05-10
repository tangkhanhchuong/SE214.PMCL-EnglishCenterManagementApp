import React from 'react'
import { Row, Col } from 'reactstrap'

import MaterialsList from './MaterialsList'
import AddMaterial from './AddMaterial'

const MaterialsTab = ({ classId }) => {

    return (
        <Row className='mt-3'>
            <Col xs={8}>
                <MaterialsList />
            </Col>
            <Col xs={4}>
                <AddMaterial />
            </Col>
        </Row>
    )
}

export default MaterialsTab
