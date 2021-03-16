import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import Page from 'components/Page'

const ExamsSchedulePage = (props) => {
    // const [isInWorkSpace, setIsInWorkSpace] = useState(true)


    return (
        <>
            <Page
                className="TablePage"
                breadcrumbs={[{ name: 'Exams' }, { name: 'Schedule' }]} >
                {/* <NavLink to="/all-classes" style={{ textDecoration: 'none' }}>
                    <Button className="mb-3 mr-3" color="success">Back</Button>
                </NavLink>
                <Button className="mb-3" color='primary' onClick={() => { setIsInWorkSpace(prev => !prev) }}>{isInWorkSpace ? "Joiners" : "Work Space"}</Button >
                <h2>{isInWorkSpace ? "Work Space" : "Joiners List"}</h2>
                {
                    isInWorkSpace ? <WorkSpace /> : <ClassJoiner classId={classId} currentUrl={currentUrl} />
                } */}
            </Page>
        </>
    )
}

export default ExamsSchedulePage