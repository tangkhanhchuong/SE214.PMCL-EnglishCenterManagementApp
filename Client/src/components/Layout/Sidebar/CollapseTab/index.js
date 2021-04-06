
import React, { useState } from 'react'

import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdPerson } from 'react-icons/md'
import {
    Collapse, NavItem, NavLink as RSNavLink
} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import bn from 'utils/bemnames'

const bem = bn.create('sidebar')

const CollapseTab = ({ sidebarItem, index }) => {
    const { name, to, exact, Icon, children } = sidebarItem

    const [tabState, setTabState] = useState({
        isOpenComponents: false,
        isOpenContents: false,
        isOpenPages: false,
    })

    let handleClick = name => () => {
        setTabState(prevState => {
            const isOpen = prevState[`isOpen${name}`]

            return {
                [`isOpen${name}`]: !isOpen,
            }
        })
    }

    const generateArrowBtn = () => {
        if (!sidebarItem.children) return;
        return (
            <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                    padding: 0,
                    transform: tabState.isOpenContents
                        ? 'rotate(0deg)'
                        : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                }}
            />
        )
    }

    const generateItemChildren = () => {
        if (!children) return;
        return (
            <Collapse isOpen={tabState.isOpenContents}>
                {children.map(({ to, name, exact }, index) => {
                    return (
                        <NavItem className={bem.e('nav-item')} key={index}>
                            <RSNavLink
                                id={`navItem-${name}-${index}`}
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >
                                <MdKeyboardArrowRight className={bem.e('nav-item-icon')} />
                                <span className="">{name}</span>
                            </RSNavLink>
                        </NavItem>
                    )
                })}
            </Collapse>
        )
    }

    if (!children) {
        return (
            <NavItem className={bem.e('nav-item')}>
                <RSNavLink
                    id={`navItem-${name}-${index}`}
                    className={bem.e('nav-item-collapse')}
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                >
                    <div className="d-flex">
                        <Icon className={bem.e('nav-item-icon')} />
                        <span className="">{name}</span>
                    </div>
                </RSNavLink>
            </NavItem>
        )
    }

    return (
        <>
            <NavItem
                className={bem.e('nav-item')}
                onClick={handleClick('Contents')}>
                <RSNavLink className={bem.e('nav-item-collapse')}>
                    <div className="d-flex">
                        <Icon className={bem.e('nav-item-icon')} />
                        <span className="">{name}</span>
                    </div>
                    {generateArrowBtn()}
                </RSNavLink>
            </NavItem >
            {
                generateItemChildren()
            }
        </>
    )
}

export default CollapseTab
