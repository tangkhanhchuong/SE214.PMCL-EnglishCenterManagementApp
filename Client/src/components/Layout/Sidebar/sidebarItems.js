
import {
    MdDashboard,
    MdAccountCircle,
    MdPayment,
    MdAssignment,
    MdBook,
    MdAlbum,
    MdNotifications,
    MdSchool,
    MdChatBubble,
    MdClass,
    MdLibraryBooks
} from 'react-icons/md'

import {
    FaChalkboardTeacher,
    FaUserGraduate,
    FaGraduationCap
} from 'react-icons/fa'

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
        { to: '/messages', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/notification', name: 'Notifications', exact: true, Icon: MdNotifications },
        { to: '/payment', name: 'Payment', exact: true, Icon: MdPayment },
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
        { to: '/notifications', name: 'Notifications', exact: true, Icon: MdNotifications },
        { to: '/messages', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
    ]

    return sidebarItems
}

const generateManagerSidebar = () => {
    const sidebarItems = [
        { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
        {
            to: '/students', name: 'Students', exact: true, Icon: FaUserGraduate, children: [
                { to: '/students', name: 'View Students', exact: true, Icon: FaUserGraduate },
                { to: '/students/add', name: 'Add Student', exact: true, Icon: FaUserGraduate },
                { to: '/students/pay-tuition', name: 'Pay Tuition', exact: true, Icon: FaUserGraduate }
            ]
        },
        {
            to: '/instructors', name: 'Instructors', exact: true, Icon: FaChalkboardTeacher, children: [
                { to: '/instructors', name: 'View Instructors', exact: true, Icon: FaChalkboardTeacher },
                { to: '/instructors/add', name: 'Add Instructor', exact: true, Icon: FaChalkboardTeacher }
            ]
        },
        {
            to: '/classes', name: 'Courses', exact: true, Icon: FaGraduationCap, children: [
                { to: '/classes', name: 'View Classes', exact: true, Icon: FaGraduationCap },
                { to: '/classes/add', name: 'Add Class', exact: true, Icon: FaGraduationCap },
                { to: '/classes/add-course', name: 'Add Course', exact: true, Icon: FaGraduationCap }
            ]
        },
        {
            to: '/notifications', name: 'Notifications', exact: true, Icon: MdNotifications, children: [
                { to: '/notifications', name: 'View Notifications', exact: true, Icon: MdBook },
                { to: '/notifications/add', name: 'Add Notification', exact: true, Icon: MdBook }
            ]
        },
        { to: '/messages', name: 'Message', exact: true, Icon: MdChatBubble },
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
