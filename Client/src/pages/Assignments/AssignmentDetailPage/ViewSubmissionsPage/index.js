import React from 'react'

import { Card, Table, Button } from 'reactstrap'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { FaFile } from 'react-icons/fa'

const ViewSubmissionsPage = () => {
    const { path, url, params } = useRouteMatch()

    const submissions = [
        {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "TH Toan", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        },
        {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "NDT Ngan", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        }, {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "NL Bach", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        }, {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "NC Thanh", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        }, {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "DN Thinh", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        }, {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "TK Chuong", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        }, {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "TK Chuong", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        }, {
            id: "SE104-124", classId: "ENG1.22", className: "English1 - 22", submitterId: "18520010", submitterName: "2020", submitTime: "1h30m 24/3/2020",
            file: {
                title: "Assignment 1",
                link: "https://cin.ufpe.br/~fbma/Crack/Cracking%20the%20Coding%20Interview%20189%20Programming%20Questions%20and%20Solutions.pdf"
            }
        },
    ]

    let getAllSubmissions = () => {
        return (
            submissions.map((row, index) => {
                return (
                    <tr key={`${index}`}>
                        <td>{row.submitterId}</td>
                        <td>{row.submitterName}</td>
                        <td>{row.submitTime}</td>
                        <td>
                            {
                                <a href={row.file.link} target="blank" style={{ "color": "black" }}>
                                    <FaFile size={30} className="m-2" color="black" />
                                    {row.file.title}
                                </a>

                            }
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            <Card body>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Submitter Id</th>
                            <th>Submitter Name</th>
                            <th>Submit Time</th>
                            <th>Submission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getAllSubmissions()
                        }
                    </tbody>
                </Table>
            </Card>
        </>
    )
}

export default ViewSubmissionsPage
