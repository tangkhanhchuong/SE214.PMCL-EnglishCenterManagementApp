import logo200Image from 'assets/img/logo/logo_200.png'
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg'
import SourceLink from 'components/SourceLink'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { useSelector } from 'react-redux'

import CollapseTab from "./CollapseTab"

import {
    Nav,
    Navbar
} from 'reactstrap'

import bn from 'utils/bemnames'

import { getSideBarItems } from "./sidebarItems"

const sidebarBackground = {
    backgroundImage: `url("${sidebarBgImage}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}


const bem = bn.create('sidebar')

const Sidebar = () => {

    const userData = JSON.parse(localStorage.getItem('userData'))
    const roleId = userData ? userData.role_id : null

    const { sidebarItems } = getSideBarItems(roleId)

    return (
        <aside className={bem.b()} data-image={sidebarBgImage}>
            <div className={bem.e('background')} style={sidebarBackground} />
            <div className={bem.e('content')}>
                <Navbar>
                    <SourceLink className="navbar-brand d-flex">
                        <img
                            src={logo200Image}
                            width="40"
                            height="30"
                            className="pr-2"
                            alt=""
                        />
                        <span className="text-white">
                            CTT English <FaGithub />
                        </span>
                    </SourceLink>
                </Navbar>
                <Nav vertical>
                    {sidebarItems.map((item, index) => (
                        <CollapseTab key={index} sidebarItem={item} index={index} />
                    ))}
                </Nav>
            </div>
        </aside>
    )
}

export default Sidebar
