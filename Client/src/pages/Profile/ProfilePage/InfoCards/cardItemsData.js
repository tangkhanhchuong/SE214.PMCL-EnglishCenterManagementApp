

import { MdEmail, MdPhone, MdLink, MdAccountBox, MdWork, MdCreditCard, MdPeople, MdPlace, MdToday, MdMusicNote } from 'react-icons/md'
import { FaFacebook, FaFootballBall, FaChess } from 'react-icons/fa'


const cardItems = [
    //Contact
    {
        cardTitle: "Contact",
        cardItems: [
            {
                title: "Email",
                value: "chuong@gmail.com",
                Icon: MdEmail,
            },
            {
                title: "Github",
                value: "khanhchuong",
                Icon: MdLink,
            },
            {
                title: "Facebook",
                value: "khanhchuong",
                Icon: FaFacebook,
            },
            {
                title: "Phone",
                value: "0846518814",
                Icon: MdPhone,
            }
        ],
        customStyle: "contact-card"
    },

    //About
    {
        cardTitle: "About",
        cardItems: [
            {
                title: "First Name",
                value: "Tang Khanh",
                Icon: MdAccountBox,
            },
            {
                title: "Last Name",
                value: "Chuong",
                Icon: MdAccountBox,
            },
            {
                title: "Birthday",
                value: "April 21, 2000",
                Icon: MdPhone,
            },
            {
                title: "Gender",
                value: "Male",
                Icon: MdPeople,
            },
            {
                title: "Address",
                value: "A Dormitory, Linh Trung ward, Thu Duc city",
                Icon: MdPlace,
            },
            {
                title: "Nationality",
                value: "Vietnamese",
                Icon: MdToday,
            }
        ],
        customStyle: "about-card"
    },

    //Account
    {
        cardTitle: "Account",
        cardItems: [
            {
                title: "Username",
                value: "khanhchuong",
                Icon: MdAccountBox,
            },
            {
                title: "Role",
                value: "Student",
                Icon: MdWork,
            },
            {
                title: "ID No",
                value: "18520010",
                Icon: MdCreditCard,
            }
        ],
        customStyle: "account-card"
    },

    //Favorite
    {
        cardTitle: "Favorite",
        cardItems: [
            {
                title: "",
                value: "Playing Football",
                Icon: FaFootballBall,
            },
            {
                title: "",
                value: "Playing Chess",
                Icon: FaChess,
            },
            {
                title: "",
                value: "Listening to music",
                Icon: MdMusicNote,
            }
        ],
        customStyle: "favorite-card"
    },
]

export default cardItems