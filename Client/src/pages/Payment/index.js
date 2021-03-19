import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import PaymentHistoriesPage from './PaymentHistoriesPage'
import AddPaymentPage from './AddPaymentPage'

const PaymentRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={PaymentHistoriesPage} />
                    <Route exact path={`${path}/add`} component={AddPaymentPage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default PaymentRoutes
