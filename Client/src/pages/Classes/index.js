import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import ClassesPage from './ClassesPage'
import ClassDetailPage from './ClassDetailPage'
import ClassScorePage from './ClassScorePage'
import ClassDetailInsertPage from './ClassDetailInsertPage'
import ClassDetailEditPage from './ClassDetailEditPage'

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`/classes`} component={ClassesPage} />
                    <Route exact path={`/classes/add`} component={ClassDetailInsertPage} />
                    <Route exact path={`/classes/:classId`} component={ClassDetailPage} />
                    {/* <Route exact path={`${path}/:classId/Edit`} component={ClassDetailEditPage} />
                    <Route exact path={`${path}/:classId/Score`} component={ClassScorePage} /> */}
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
