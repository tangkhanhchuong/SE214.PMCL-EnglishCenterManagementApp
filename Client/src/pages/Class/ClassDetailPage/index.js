import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import Page from 'components/Page'

import WorkSpace from './WorkSpace'
import ClassJoiner from './ClassJoiner'

const TablePage = (props) => {
    const [isInWorkSpace, setIsInWorkSpace] = useState(true)

    const classId = props.match.params.classId

    const currentUrl = props.match.url

    // let GetAllJoinersInClass = (type, callback) => {
    //     sendRequest(
    //         `${SYSTEM_URL}/v1/class/${classId}/${type}`,
    //         'GET',
    //     )
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 throw Error("Get data failed !!")
    //             }
    //         })
    //         .then((response) => {
    //             console.log(response.data)
    //             callback(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error)

    //         })
    // }

    return (
        <>
            <Page
                className="TablePage"
                breadcrumbs={[{ name: 'My Classes' }, { name: currentUrl.split('/')[2] }]} >
                <NavLink to="/my-classes" style={{ textDecoration: 'none' }}>
                    <Button className="mb-3 mr-3" color="success">Back</Button>
                </NavLink>
                <Button className="mb-3" color='primary' onClick={() => { setIsInWorkSpace(prev => !prev) }}>{isInWorkSpace ? "Joiners" : "Work Space"}</Button >
                <h2>{isInWorkSpace ? "Work Space" : "Joiners List"}</h2>
                {
                    isInWorkSpace ? <WorkSpace /> : <ClassJoiner classId={classId} currentUrl={currentUrl} />
                }
            </Page>
        </>
    )
}

export default TablePage