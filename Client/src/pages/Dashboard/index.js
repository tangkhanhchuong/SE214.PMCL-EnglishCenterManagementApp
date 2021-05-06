import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

const DashboardPage = React.lazy(() => import('./pages/DashboardPage'))

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`${path}`} component={DashboardPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
