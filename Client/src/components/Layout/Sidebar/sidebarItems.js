
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
    MANAGER: 1,
    INSTRUCTOR: 2,
    STUDENT: 3
}

const generateStudentSidebar = () => {
    const sidebarItems = [
        { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
        {
            to: '/students', name: 'Students', exact: true, Icon: FaUserGraduate, children: [
                { to: '/students', name: 'View Students', exact: true, Icon: FaUserGraduate },
                // { to: '/students/add', name: 'Add Student', exact: true, Icon: FaUserGraduate },
                // { to: '/students/pay-tuition', name: 'Pay Tuition', exact: true, Icon: FaUserGraduate }
            ]
        },
        {
            to: '/instructors', name: 'Instructors', exact: true, Icon: FaChalkboardTeacher, children: [
                { to: '/instructors', name: 'View Instructors', exact: true, Icon: FaChalkboardTeacher },
                // { to: '/instructors/add', name: 'Add Instructor', exact: true, Icon: FaChalkboardTeacher }
            ]
        },
        {
            to: '/classes', name: 'Courses', exact: true, Icon: FaGraduationCap, children: [
                { to: '/classes', name: 'View Classes', exact: true, Icon: FaGraduationCap },
                // { to: '/classes/add', name: 'Add Class', exact: true, Icon: FaGraduationCap },
                // { to: '/classes/add-course', name: 'Add Course', exact: true, Icon: FaGraduationCap }
            ]
        },
        {
            to: '/exams', name: 'Exams', exact: true, Icon: FaChalkboardTeacher, children: [
                { to: '/exams', name: 'View Exams', exact: true, Icon: FaChalkboardTeacher },
                // { to: '/exams/add', name: 'Add Exams', exact: true, Icon: FaChalkboardTeacher },
            ]
        },
        {
            to: '/notifications', name: 'Notifications', exact: true, Icon: MdNotifications
        },
        { to: '/messages', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
    ]

    return sidebarItems
}

const generateInstructorSidebar = () => {
    const sidebarItems = [
        { to: '/', name: 'Dashboard', exact: true, Icon: MdDashboard },
        {
            to: '/students', name: 'Students', exact: true, Icon: FaUserGraduate, children: [
                { to: '/students', name: 'View Students', exact: true, Icon: FaUserGraduate },
                // { to: '/students/add', name: 'Add Student', exact: true, Icon: FaUserGraduate },
                // { to: '/students/pay-tuition', name: 'Pay Tuition', exact: true, Icon: FaUserGraduate }
            ]
        },
        {
            to: '/classes', name: 'Courses', exact: true, Icon: FaGraduationCap, children: [
                { to: '/classes', name: 'View Classes', exact: true, Icon: FaGraduationCap },
                // { to: '/classes/add', name: 'Add Class', exact: true, Icon: FaGraduationCap },
                // { to: '/classes/add-course', name: 'Add Course', exact: true, Icon: FaGraduationCap }
            ]
        },
        {
            to: '/exams', name: 'Exams', exact: true, Icon: FaChalkboardTeacher, children: [
                { to: '/exams', name: 'View Exams', exact: true, Icon: FaChalkboardTeacher },
                // { to: '/exams/add', name: 'Add Exams', exact: true, Icon: FaChalkboardTeacher },
            ]
        },
        {
            to: '/notifications', name: 'Notifications', exact: true, Icon: MdNotifications
        },
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
            to: '/exams', name: 'Exams', exact: true, Icon: FaChalkboardTeacher, children: [
                { to: '/exams', name: 'View Exams', exact: true, Icon: FaChalkboardTeacher },
                { to: '/exams/add', name: 'Add Exams', exact: true, Icon: FaChalkboardTeacher },
            ]
        },
        {
            to: '/notifications', name: 'Notifications', exact: true, Icon: MdNotifications
        },
        { to: '/messages', name: 'Message', exact: true, Icon: MdChatBubble },
        { to: '/account', name: 'Account', exact: false, Icon: MdAccountCircle }
    ]

    return sidebarItems
}

export const getSideBarItems = (roleId) => {
    let sidebarItems
    switch (parseInt(roleId)) {
        case RoleId.STUDENT:
            sidebarItems = generateStudentSidebar()
            break
        case RoleId.INSTRUCTOR:
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
