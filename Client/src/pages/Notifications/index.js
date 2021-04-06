import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import { AllNotificationsPage } from './AllNotificationsPage'
import AddNotificationPage from './AddNotificationPage'

const NotificationPages = () => {

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path='/notifications' component={AllNotificationsPage} />
                    <Route exact path='/notifications/add' component={AddNotificationPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default NotificationPages
