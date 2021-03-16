
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
        { to: '/all-classes', name: 'My Classes', exact: true, Icon: MdClass },
        {
            to: '/my-exams', name: 'Exams', exact: true, Icon: MdAlbum, children: [
                { to: '/my-exams/all', name: 'Exam Grades', exact: true },
                { to: '/my-exams/schedule', name: 'Exam Schedule', exact: true },
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
        { to: '/all-classes', name: 'My Classes', exact: true, Icon: MdBook },
        {
            to: '/my-exams', name: 'Exams', exact: true, Icon: MdAlbum, children: [
                { to: '/my-exams/all', name: 'Exam Grades', exact: true },
                { to: '/my-exams/schedule', name: 'Exam Schedule', exact: true },
            ]
        },
        { to: '/assignments', name: 'Assignments', exact: true, Icon: MdAssignment },
        { to: '/payment', name: 'Payment', exact: true, Icon: MdPayment },
        { to: '/notifications', name: 'Notification', exact: true, Icon: MdNotifications },
        { to: '/message', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
    ]

    return sidebarItems
}

const generateManagerSidebar = () => {
    const sidebarItems = [
        { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
        { to: '/classes', name: 'My Classes', exact: true, Icon: MdBook },
        { to: '/exams', name: 'Exams', exact: true, Icon: MdAlbum },
        { to: '/assignments', name: 'Assignments', exact: true, Icon: MdAssignment },
        { to: '/payment', name: 'Payment', exact: true, Icon: MdPayment },
        { to: '/notifications', name: 'Notification', exact: true, Icon: MdNotifications },
        { to: '/message', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
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
