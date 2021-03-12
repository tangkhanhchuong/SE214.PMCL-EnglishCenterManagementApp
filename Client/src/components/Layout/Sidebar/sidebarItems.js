
import {
    MdDashboard,
    MdInsertChart,
    MdWork,
    MdSchool,
    MdAccountCircle,
    MdPayment,
    MdAssignment,
    MdBook,
    MdAlbum,
    MdNotifications,
    MdChatBubble,
    MdClass,
    MdLibraryBooks
} from 'react-icons/md'

const RoleId = {
    STUDENT: 1,
    LECTURER: 2,
    MANAGER: 3,
    ADMIN: 9,
    GUEST: 0
}

const generateStudentSidebar = () => {

    const sidebarItems = [
        { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
        { to: '/my-classes', name: 'My Classes', exact: true, Icon: MdClass },
        {
            to: '/my-exams', name: 'Exams', exact: true, Icon: MdAlbum, children: [
                { to: '/my-exams/exam-schedule', name: 'Exam Schedule', exact: true },
                { to: '/my-exams/exam-grades', name: 'Exam Grades', exact: true },
            ]
        },
        { to: '/assignment', name: 'Assignments', exact: true, Icon: MdAssignment },
        { to: '/message', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/notification', name: 'Notification', exact: true, Icon: MdNotifications },
        { to: '/tuition', name: 'Tuition', exact: true, Icon: MdPayment },
        { to: '/library', name: 'Library', exact: true, Icon: MdLibraryBooks },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
    ]

    return sidebarItems
}

const generateInstructorSidebar = () => {
    const sidebarItems = [
        { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
        { to: '/my-classes', name: 'My Classes', exact: true, Icon: MdBook },
        {
            to: '/my-exams', name: 'Exams', exact: true, Icon: MdAlbum, children: [
                { to: '/my-exams/exam-schedule', name: 'Exam Schedule', exact: true, Icon: MdBook },
                { to: '/my-exams/exam-grades', name: 'Exam Grades', exact: true, Icon: MdBook },
            ]
        },
        { to: '/assignment', name: 'Assignments', exact: true, Icon: MdAssignment },
        { to: '/message', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/notification', name: 'Notification', exact: true, Icon: MdNotifications },
        { to: '/payment', name: 'Tuition', exact: true, Icon: MdPayment },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
    ]

    return sidebarItems
}

const generateManagerSidebar = () => {

    const sidebarItems = [
        {
            to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard, children: [
                { to: '/Class', name: 'Dashboard', exact: true, Icon: MdDashboard },
                { to: '/Class', name: 'Dashboard', exact: true, Icon: MdDashboard }
            ]
        },
        {
            to: '/Class', name: 'All Classes', exact: false, Icon: MdSchool, children: [
                { to: '/Class', name: 'Dashboard', exact: true, Icon: MdDashboard },
                { to: '/Class', name: 'Dashboard', exact: true, Icon: MdDashboard }
            ]
        },
        { to: '/Device', name: 'All Devices', exact: false, Icon: MdInsertChart },
        { to: '/Person', name: 'All Person', exact: false, Icon: MdInsertChart },
        { to: '/Manager_Area', name: 'Manager Area', exact: false, Icon: MdWork }
    ]

    return sidebarItems
}

export const getSideBarItems = (roleId) => {
    let sidebarItems

    switch (roleId) {
        case RoleId.STUDENT:
            sidebarItems = generateStudentSidebar()
            break
        case RoleId.LECTURER:
            sidebarItems = generateInstructorSidebar()
            break
        case RoleId.MANAGER:
            sidebarItems = generateManagerSidebar()
            break
    }

    return {
        sidebarItems: sidebarItems
    }
}
