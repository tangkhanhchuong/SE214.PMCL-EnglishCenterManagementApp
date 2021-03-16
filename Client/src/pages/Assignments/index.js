import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import AddAssignmentPage from './AddAssignmentPage'
import AssignmentDetailPage from './AssignmentDetailPage'
import AllAssignmentsPage from './AllAssignmentsPage'

const AssignmentsRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}/add`} component={AddAssignmentPage} />
                    <Route exact path={`${path}`} component={AllAssignmentsPage} />
                    <Route exact path={`${path}/:assignmentId`} component={AssignmentDetailPage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default AssignmentsRoutes
