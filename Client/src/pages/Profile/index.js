import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import AccountPage from './ProfilePage'

const AccountRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={AccountPage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default AccountRoutes
