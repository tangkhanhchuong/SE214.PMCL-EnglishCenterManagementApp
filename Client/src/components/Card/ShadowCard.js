import React from 'react'
import { Card } from 'reactstrap'

const ShadowCard = (props) => {
    return (
        <Card {...props} style={{ "boxShadow": "2px 1px 6px grey" }}>
            {
                props.children
            }
        </Card>
    )
}

export default ShadowCard
