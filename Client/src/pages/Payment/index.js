import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import PaymentHistoriesPage from './PaymentHistoriesPage'

const PaymentRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={PaymentHistoriesPage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default PaymentRoutes
