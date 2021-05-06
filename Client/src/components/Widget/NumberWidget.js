import React from 'react'
import styled from 'styled-components'

import { Card } from 'reactstrap'

const StatisticCardTitle = styled.div`
    font-size: 14px;
    margin-top: 10px;
`

const NumberWidget = ({ title, subtitle, number, color, Icon, ...restProps }) => {
    return (
        <Card body {...restProps} className='d-flex flex-row align-items-center'>
            <div className='d-flex flex-column align-items-center mr-3'>
                <Icon size='35' color='gray' />
                <StatisticCardTitle>{title}</StatisticCardTitle>
            </div>
            <div style={{
                borderLeft: '2px solid gray',
                height: '40px'
            }} className='ml-3 mr-3'></div>
            <div style={{ fontSize: '30px' }} className='ml-3'>
                {number}
            </div>
        </Card>
    )
}

export default NumberWidget
