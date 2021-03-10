import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
// <<<<<<< HEAD
// import React from 'react';
// import { FaGithub } from 'react-icons/fa';
// import {
//   MdAccountCircle,
//   MdArrowDropDownCircle,
//   MdBorderAll,
//   MdBrush,
//   MdChromeReaderMode,
//   MdDashboard,
//   MdExtension,
//   MdGroupWork,
//   MdInsertChart,
//   MdKeyboardArrowDown,
//   MdNotificationsActive,
//   MdPages,
//   MdRadioButtonChecked,
//   MdSend,
//   MdStar,
//   MdTextFields,
//   MdViewCarousel,
//   MdViewDay,
//   MdViewList,
//   MdWeb,
//   MdWidgets,
// =======
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import {
  MdDashboard,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdSend,
  MdWork,
  MdPerson,
  MdEmail,
  MdWeb,
  MdSchool,
  MdSettings
  // >>>>>>> restoreHistory
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';

import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

// <<<<<<< HEAD
// const navComponents = [
//   { to: '/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
//   {
//     to: '/button-groups',
//     name: 'button groups',
//     exact: false,
//     Icon: MdGroupWork,
//   },
//   { to: '/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
//   { to: '/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
//   {
//     to: '/dropdowns',
//     name: 'dropdowns',
//     exact: false,
//     Icon: MdArrowDropDownCircle,
//   },
//   { to: '/badges', name: 'badges', exact: false, Icon: MdStar },
//   { to: '/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
//   { to: '/progress', name: 'progress', exact: false, Icon: MdBrush },
//   { to: '/modals', name: 'modals', exact: false, Icon: MdViewDay },
// ];

// const navContents = [
//   { to: '/Person', name: 'Person', exact: false, Icon: MdTextFields },
//   { to: '/Class', name: 'Class', exact: false, Icon: MdBorderAll },
//   { to: '/Device', name: 'Device', exact: false, Icon: MdTextFields },
// ];

// const pageContents = [
//   { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
//   {
//     to: '/login-modal',
//     name: 'login modal',
//     exact: false,
//     Icon: MdViewCarousel,
//   },
// ];

// const navItems = [
//   { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
//   { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
//   { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
//   { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
// ];

// const bem = bn.create('sidebar');

// class Sidebar extends React.Component {
//   state = {
//     isOpenComponents: true,
//     isOpenContents: true,
//     isOpenPages: true,
//   };

//   handleClick = name => () => {
//     this.setState(prevState => {
//       const isOpen = prevState[`isOpen${name}`];

//       return {
//         [`isOpen${name}`]: !isOpen,
//       };
//     });
//   };

//   render() {
//     return (
//       <aside className={bem.b()} data-image={sidebarBgImage}>
//         <div className={bem.e('background')} style={sidebarBackground} />
//         <div className={bem.e('content')}>
//           <Navbar>
//             <SourceLink className="navbar-brand d-flex">
//               <img
// =======

const bem = bn.create('sidebar');


const ROLEID = {
  STUDENT: 1,
  LECTURER: 2,
  MANAGER: 3,
  ADMIN: 9,
  GUEST: 0
}

const GetSideBarItems = (roleId) => {
  if (roleId === ROLEID.STUDENT) {

    const personalItems = [
      { to: '/Inbox', name: 'Inbox', exact: false, Icon: MdEmail },
      { to: '/Sent', name: 'Sent', exact: false, Icon: MdSend },
      { to: '/Settings', name: 'Settings', exact: false, Icon: MdSettings }
    ];


    const generalItems = [
      { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
      { to: '/Class', name: 'My Class', exact: false, Icon: MdSchool },
      { to: '/Student_Area', name: 'Student Area', exact: false, Icon: MdWork },
    ];

    return { personalItems, generalItems };
  }

  if (roleId === ROLEID.LECTURER) {

    const personalItems = [
      { to: '/Inbox', name: 'Inbox', exact: false, Icon: MdEmail },
      { to: '/Sent', name: 'Sent', exact: false, Icon: MdSend },
      { to: '/Settings', name: 'Settings', exact: false, Icon: MdSettings }
    ];


    const generalItems = [
      { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
      { to: '/Class', name: 'My Class', exact: false, Icon: MdSchool },
      { to: '/Lecturer_Area', name: 'Lecturer Area', exact: false, Icon: MdWork },
    ];

    return { personalItems, generalItems };
  }

  if (roleId === ROLEID.MANAGER) {

    const personalItems = [
      { to: '/Inbox', name: 'Inbox', exact: false, Icon: MdEmail },
      { to: '/Sent', name: 'Sent', exact: false, Icon: MdSend },
      { to: '/Settings', name: 'Settings', exact: false, Icon: MdSettings }
    ];

    const generalItems = [
      { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
      { to: '/Class', name: 'All Classes', exact: false, Icon: MdSchool },
      { to: '/Device', name: 'All Devices', exact: false, Icon: MdInsertChart },
      { to: '/Person', name: 'All Person', exact: false, Icon: MdInsertChart },
      { to: '/Manager_Area', name: 'Manager Area', exact: false, Icon: MdWork },

    ];

    return { personalItems, generalItems };
  }
}


const Sidebar = () => {

  const roleId = useSelector(state => state.userData.roleId);


  let [state, setState] = useState({
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  });

  let handleClick = name => () => {
    setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };


  const { personalItems, generalItems } = GetSideBarItems(roleId);

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
            // <<<<<<< HEAD
            //             />
            //             <span className="text-white">
            //               Reduction <FaGithub />
            //             </span>
            //           </SourceLink>
            //         </Navbar>
            //         <Nav vertical>
            //           {navItems.map(({ to, name, exact, Icon }, index) => (
            //             <NavItem key={index} className={bem.e('nav-item')}>
            //               <BSNavLink
            //                 id={`navItem-${name}-${index}`}
            //                 className="text-uppercase"
            //                 tag={NavLink}
            //                 to={to}
            //                 activeClassName="active"
            //                 exact={exact}
            //               >
            //                 <Icon className={bem.e('nav-item-icon')} />
            //                 <span className="">{name}</span>
            //               </BSNavLink>
            //             </NavItem>
            //           ))}

            //           <NavItem
            //             className={bem.e('nav-item')}
            //             onClick={this.handleClick('Components')}
            //           >
            //             <BSNavLink className={bem.e('nav-item-collapse')}>
            //               <div className="d-flex">
            //                 <MdExtension className={bem.e('nav-item-icon')} />
            //                 <span className=" align-self-start">Components</span>
            //               </div>
            //               <MdKeyboardArrowDown
            //                 className={bem.e('nav-item-icon')}
            //                 style={{
            //                   padding: 0,
            //                   transform: this.state.isOpenComponents
            //                     ? 'rotate(0deg)'
            //                     : 'rotate(-90deg)',
            //                   transitionDuration: '0.3s',
            //                   transitionProperty: 'transform',
            //                 }}
            //               />
            //             </BSNavLink>
            //           </NavItem>
            //           <Collapse isOpen={this.state.isOpenComponents}>
            //             {navComponents.map(({ to, name, exact, Icon }, index) => (
            //               <NavItem key={index} className={bem.e('nav-item')}>
            //                 <BSNavLink
            //                   id={`navItem-${name}-${index}`}
            //                   className="text-uppercase"
            //                   tag={NavLink}
            //                   to={to}
            //                   activeClassName="active"
            //                   exact={exact}
            //                 >
            //                   <Icon className={bem.e('nav-item-icon')} />
            //                   <span className="">{name}</span>
            //                 </BSNavLink>
            //               </NavItem>
            //             ))}
            //           </Collapse>

            //           <NavItem
            //             className={bem.e('nav-item')}
            //             onClick={this.handleClick('Contents')}
            //           >
            //             <BSNavLink className={bem.e('nav-item-collapse')}>
            //               <div className="d-flex">
            //                 <MdSend className={bem.e('nav-item-icon')} />
            //                 <span className="">Contents</span>
            //               </div>
            //               <MdKeyboardArrowDown
            //                 className={bem.e('nav-item-icon')}
            //                 style={{
            //                   padding: 0,
            //                   transform: this.state.isOpenContents
            //                     ? 'rotate(0deg)'
            //                     : 'rotate(-90deg)',
            //                   transitionDuration: '0.3s',
            //                   transitionProperty: 'transform',
            //                 }}
            //               />
            //             </BSNavLink>
            //           </NavItem>
            //           <Collapse isOpen={this.state.isOpenContents}>
            //             {navContents.map(({ to, name, exact, Icon }, index) => (
            //               <NavItem key={index} className={bem.e('nav-item')}>
            //                 <BSNavLink
            // =======
            />
            <span className="text-white">
              CTT English <FaGithub />
            </span>
          </SourceLink>
        </Navbar>
        <Nav vertical>
          {generalItems.map(({ to, name, exact, Icon }, index) => (
            <NavItem key={index} className={bem.e('nav-item')}>
              <BSNavLink
                id={`navItem-${name}-${index}`}
                className="text-uppercase"
                tag={NavLink}
                to={to}
                activeClassName="active"
                exact={exact}
              >
                <Icon className={bem.e('nav-item-icon')} />
                <span className="">{name}</span>
              </BSNavLink>
            </NavItem>
          ))}


          <NavItem
            className={bem.e('nav-item')}
            onClick={handleClick('Contents')}
          >
            <BSNavLink className={bem.e('nav-item-collapse')}>
              <div className="d-flex">
                <MdPerson className={bem.e('nav-item-icon')} />
                <span className="">Personal</span>
              </div>
              <MdKeyboardArrowDown
                className={bem.e('nav-item-icon')}
                style={{
                  padding: 0,
                  transform: state.isOpenContents
                    ? 'rotate(0deg)'
                    : 'rotate(-90deg)',
                  transitionDuration: '0.3s',
                  transitionProperty: 'transform',
                }}
              />
            </BSNavLink>
          </NavItem>
          <Collapse isOpen={state.isOpenContents}>
            {personalItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                // <<<<<<< HEAD
                //                 >
                //                   <Icon className={bem.e('nav-item-icon')} />
                //                   <span className="">{name}</span>
                //                 </BSNavLink>
                //               </NavItem>
                //             ))}
                //           </Collapse>

                //           <NavItem
                //             className={bem.e('nav-item')}
                //             onClick={this.handleClick('Pages')}
                //           >
                //             <BSNavLink className={bem.e('nav-item-collapse')}>
                //               <div className="d-flex">
                //                 <MdPages className={bem.e('nav-item-icon')} />
                //                 <span className="">Pages</span>
                //               </div>
                //               <MdKeyboardArrowDown
                //                 className={bem.e('nav-item-icon')}
                //                 style={{
                //                   padding: 0,
                //                   transform: this.state.isOpenPages
                //                     ? 'rotate(0deg)'
                //                     : 'rotate(-90deg)',
                //                   transitionDuration: '0.3s',
                //                   transitionProperty: 'transform',
                //                 }}
                //               />
                //             </BSNavLink>
                //           </NavItem>
                //           <Collapse isOpen={this.state.isOpenPages}>
                //             {pageContents.map(({ to, name, exact, Icon }, index) => (
                //               <NavItem key={index} className={bem.e('nav-item')}>
                //                 <BSNavLink
                //                   id={`navItem-${name}-${index}`}
                //                   className="text-uppercase"
                //                   tag={NavLink}
                //                   to={to}
                //                   activeClassName="active"
                //                   exact={exact}
                //                 >
                //                   <Icon className={bem.e('nav-item-icon')} />
                //                   <span className="">{name}</span>
                //                 </BSNavLink>
                //               </NavItem>
                //             ))}
                //           </Collapse>
                //         </Nav>
                //       </div>
                //     </aside>
                //   );
                // }
                // =======
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Collapse>


        </Nav>
      </div>
    </aside>
  );
}

// >>>>>>> restoreHistory
// }

export default Sidebar;
