import Avatar from 'components/Avatar'
import { UserCard } from 'components/Card'
import Notifications from 'components/Notifications'
import SearchInput from 'components/SearchInput'
import { notificationsData } from 'demos/header'
import withBadge from 'hocs/withBadge'
import React, { useState } from 'react'

import {
    MdClearAll,
    MdExitToApp,
    MdHelp,
    MdInsertChart,
    MdMessage,
    MdNotificationsActive,
    MdNotificationsNone,
    MdPersonPin,
    MdSettingsApplications,
} from 'react-icons/md'
import {
    Button,
    ListGroup,
    ListGroupItem,
    // NavbarToggler,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Popover,
    PopoverBody,
} from 'reactstrap'
import bn from 'utils/bemnames'
import { useDispatch } from 'react-redux'
import { RemoveUserData } from 'Redux/Reducers/UserData/actions'
import { useSelector } from 'react-redux'

const bem = bn.create('header')

const MdNotificationsActiveWithBadge = withBadge({
    size: 'md',
    color: 'primary',
    style: {
        top: -10,
        right: -10,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    children: <small>5</small>,
})(MdNotificationsActive)

const Header = () => {
    const dispatch = useDispatch()

    const userData = useSelector(state => state.userData)


    let [state, setState] = useState({
        isOpenNotificationPopover: false,
        isNotificationConfirmed: false,
        isOpenUserCardPopover: false,
    })

    let toggleNotificationPopover = () => {
        setState({
            isOpenNotificationPopover: !state.isOpenNotificationPopover,
        })

        if (!state.isNotificationConfirmed) {
            setState({ isNotificationConfirmed: true })
        }
    }

    let toggleUserCardPopover = () => {
        setState({
            isOpenUserCardPopover: !state.isOpenUserCardPopover,
        })
    }

    let handleSidebarControlButton = event => {
        event.preventDefault()
        event.stopPropagation()

        document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open')
    }

    let SignOut = async () => {
        await localStorage.removeItem("userData")
        dispatch(RemoveUserData())

    }

    let GetRoleName = (roleId) => {
        switch (roleId) {
            case 1: return "Student"
            case 2: return "Lecturer"
            case 3: return "Manager"
            case 9: return "Student"

            default: return "Guest"
        }
    }

    const { isNotificationConfirmed } = state

    return (
        <Navbar light expand className={bem.b('bg-white')}>
            <Nav navbar className="mr-2">
                <Button outline onClick={handleSidebarControlButton}>
                    <MdClearAll size={25} />
                </Button>
            </Nav>
            <Nav navbar>
                <SearchInput />
            </Nav>

            <Nav navbar className={bem.e('nav-right')}>
                <NavItem className="d-inline-flex">
                    <NavLink id="Popover1" className="position-relative">
                        {isNotificationConfirmed ? (
                            <MdNotificationsNone
                                size={25}
                                className="text-secondary can-click"
                                onClick={toggleNotificationPopover}
                            />
                        ) : (
                            <MdNotificationsActiveWithBadge
                                size={25}
                                className="text-secondary can-click animated swing infinite"
                                onClick={toggleNotificationPopover}
                            />
                        )}
                    </NavLink>
                    <Popover
                        placement="bottom"
                        isOpen={state.isOpenNotificationPopover}
                        toggle={toggleNotificationPopover}
                        target="Popover1"
                    >
                        <PopoverBody>
                            <Notifications notificationsData={notificationsData} />
                        </PopoverBody>
                    </Popover>
                </NavItem>

                <NavItem>
                    <NavLink id="Popover2">
                        <Avatar
                            onClick={toggleUserCardPopover}
                            className="can-click"
                        />
                    </NavLink>
                    <Popover
                        placement="bottom-end"
                        isOpen={state.isOpenUserCardPopover}
                        toggle={toggleUserCardPopover}
                        target="Popover2"
                        className="p-0 border-0"
                        style={{ minWidth: 250 }}
                    >
                        <PopoverBody className="p-0 border-light">
                            <UserCard
                                title={userData.name || "CTT User"}
                                subtitle={userData.email || "cttuser@gmail.com"}
                                text={GetRoleName(userData.roleId || 1)}
                                className="border-light"
                            >
                                <ListGroup flush>
                                    <ListGroupItem tag="button" action className="border-light">
                                        <MdPersonPin /> Profile
                    </ListGroupItem>
                                    <ListGroupItem tag="button" action className="border-light">
                                        <MdInsertChart /> Stats
                    </ListGroupItem>
                                    <ListGroupItem tag="button" action className="border-light">
                                        <MdMessage /> Messages
                    </ListGroupItem>
                                    <ListGroupItem tag="button" action className="border-light">
                                        <MdSettingsApplications /> Settings
                    </ListGroupItem>
                                    <ListGroupItem tag="button" action className="border-light">
                                        <MdHelp /> Help
                    </ListGroupItem>
                                    <ListGroupItem tag="button" action className="border-light" onClick={SignOut}>
                                        <MdExitToApp /> Signout
                    </ListGroupItem>
                                </ListGroup>
                            </UserCard>
                        </PopoverBody>
                    </Popover>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header
