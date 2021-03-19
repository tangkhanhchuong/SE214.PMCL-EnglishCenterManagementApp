import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import ChatPage from './ChatPage'

const MessagesRoute = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={ChatPage} />
                    {/* <Route exact path={`${path}/schedules`} component={ExamsSchedulePage} /> */}
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default MessagesRoute
