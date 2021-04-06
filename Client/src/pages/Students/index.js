import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import AllStudentsPage from './AllStudentsPage'
import AddStudentPage from './AddStudentPage'
import StudentDetailsPage from './StudentDetailsPage'

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`${path}`} component={AllStudentsPage} />
                    <Route exact path={`${path}/add`} component={AddStudentPage} />
                    <Route exact path={`${path}/:studentId`} component={StudentDetailsPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
