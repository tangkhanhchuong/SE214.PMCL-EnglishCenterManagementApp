import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

const StudentsPage = React.lazy(() => import('./pages/InstructorsPage'))
const AddStudentPage = React.lazy(() => import('./pages/AddInstructorPage'))
const StudentDetailsPage = React.lazy(() => import('./pages/InstructorDetailsPage'))
const EditStudentPage = React.lazy(() => import('./pages/EditInstructorPage'))
const PayTuitionPage = React.lazy(() => import('./pages/PayTuitionPage'))

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`${path}`} component={StudentsPage} />
                    <Route exact path={`${path}/add`} component={AddStudentPage} />
                    {/* <Route exact path={`${path}/pay-tuition`} component={PayTuitionPage} /> */}
                    <Route exact path={`${path}/:instructorId`} component={StudentDetailsPage} />
                    <Route exact path={`${path}/:instructorId/edit`} component={EditStudentPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
