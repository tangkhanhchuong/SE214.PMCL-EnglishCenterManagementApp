import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import Page from 'components/Page'

const AllNotificationsPage = (props) => {
    // const [isInWorkSpace, setIsInWorkSpace] = useState(true)


    return (
        <>
            <Page
                className="TablePage"
                breadcrumbs={[{ name: 'Notifications' }]} >

            </Page>
        </>
    )
}

export default AllNotificationsPage