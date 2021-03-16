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
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={ClassesPage} />
                    <Route exact path={`${path}/:classId`} component={ClassDetailPage} />
                    <Route exact path={`${path}/:classId/Edit`} component={ClassDetailEditPage} />
                    <Route exact path={`${path}/:classId/Score`} component={ClassScorePage} />
                    <Route exact path={`${path}/:classId/Insert`} component={ClassDetailInsertPage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default ClassRoutes
