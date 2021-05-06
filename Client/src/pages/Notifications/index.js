import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import NoticesPage from './pages/NoticesPage'

const NotificationPages = () => {

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path='/notifications' component={NoticesPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default NotificationPages
