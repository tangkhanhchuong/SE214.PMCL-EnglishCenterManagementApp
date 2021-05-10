import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

const StudentsPage = React.lazy(() => import('./pages/StudentsPage'))
const AddStudentPage = React.lazy(() => import('./pages/AddStudentPage'))
const StudentDetailsPage = React.lazy(() => import('./pages/StudentDetailsPage'))
const EditStudentPage = React.lazy(() => import('./pages/EditStudentPage'))
const PayTuitionPage = React.lazy(() => import('./pages/PayTuitionPage'))
// const Ticket = React.lazy(() => import('./pages/Ticket'))

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`${path}`} component={StudentsPage} />
                    <Route exact path={`${path}/add`} component={AddStudentPage} />
                    <Route exact path={`${path}/pay-tuition`} component={PayTuitionPage} />
                    <Route exact path={`${path}/:studentId`} component={StudentDetailsPage} />
                    <Route exact path={`${path}/:studentId/edit`} component={EditStudentPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
