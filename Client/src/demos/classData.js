import {
    MdLanguage,
    MdThumbsUpDown,
    MdAccessibility,
    MdPermIdentity,
    MdSchool,
} from 'react-icons/md';

export const iconClassData = [
    {
        bgColor: 'primary',
        icon: MdSchool,
        title: '2-4-6',
        subtitle: '9h30-11h00',
    },
    {
        bgColor: 'secondary',
        icon: MdSchool,
        title: '3-5-7',
        subtitle: '9h30-11h00',
    },
    {
        bgColor: 'success',
        icon: MdSchool,
        title: '2-4-6',
        subtitle: '18h-19h30',
    }
];

export const iconPersonData = [

    {
        bgColor: 'primary',
        icon: MdAccessibility,
        title: 'Students',
        subtitle: '',
        to: 'Student/All'
    },
    {
        bgColor: 'success',
        icon: MdPermIdentity,
        title: 'Lecturers',
        subtitle: '',
        to: 'Lecturer/All'
    }
];

export const numberWidgetsData = [
    { color: 'primary' },
    { color: 'secondary' },
    { color: 'success' },
    { color: 'info' },
    { color: 'warning' },
    { color: 'danger' },
    { color: 'light' },
    { color: 'dark' },
];