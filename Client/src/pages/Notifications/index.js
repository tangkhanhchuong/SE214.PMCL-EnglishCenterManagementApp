import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import AllNotificationsPage from './AllNotificationsPage'

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={AllNotificationsPage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default ClassRoutes
