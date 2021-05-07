import React, { useState } from 'react'
import { Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import UserCard from 'components/Card/UserCard'
import Page from 'components/Page'
import InfoCards from './InfoCards'
import './index.css'


const ProfilePage = () => {
    return (
        // <Page
        //     className="TablePage"
        //     breadcrumbs={[{ name: 'Account' }]} >
        //     <InfoCards />
        //     <UserCard avatarSize={80} style={{ "height": "140px" }} />
        // </Page>
        <Page
            breadcrumbs={[{ name: 'Profile' }]} >
            <h1>This page is under developed</h1>
        </Page>
    )
}

export default ProfilePage