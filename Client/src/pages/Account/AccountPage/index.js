import React, { useState } from 'react'
import { Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import { MdEmail, MdPhone, MdLink } from 'react-icons/md'

import UserCard from 'components/Card/UserCard'
import Page from 'components/Page'

import './index.css'

const ContactItem = ({ title, value, Icon }) => (
    <CardTitle className="d-flex">
        <Icon size={30} className="mr-3" />
        <div className="ml-3">
            <div style={{ fontSize: "12px", color: "grey" }}>{title}</div>
            <div style={{ color: "blue" }}>{value}</div>
        </div>
    </CardTitle>
)

const ContactCard = () => (
    <Card className="border rounded m-3 contact-card">
        <div className="m-3">
            <div className="m-3">
                <CardTitle>Contact</CardTitle>
                <hr />
                <CardBody>
                    <ContactItem title="Email" value="chuong@gmail.com" Icon={MdEmail} />
                    <ContactItem title="Github" value="khanhchuong" Icon={MdLink} />
                    <ContactItem title="Phone" value="0846518814" Icon={MdPhone} />
                </CardBody>
            </div>
        </div>
    </Card>
)

const AboutCard = () => (
    <Card className="border rounded m-3 about-card">
        <div className="m-3">
            <div className="m-3">
                <CardTitle>About</CardTitle>
                <hr />
                <CardBody>
                    <CardTitle >Content</CardTitle>
                    <CardTitle>Requires</CardTitle>
                </CardBody>
            </div>
        </div>
    </Card>
)

const AccountPage = (props) => {

    return (
        <>
            <Page
                className="TablePage"
                breadcrumbs={[{ name: 'Account' }]} >
                <div className="account-area">
                    <ContactCard />
                    <AboutCard />
                </div>
                <UserCard title="Hello" />
            </Page>
        </>
    )
}

export default AccountPage