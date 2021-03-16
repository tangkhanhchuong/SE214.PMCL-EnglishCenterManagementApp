import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

import AllExamsPage from './AllExamsPage'
import ExamsSchedulePage from './ExamsSchedulePage'

const ExamRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <React.Suspense fallback={<PageSpinner />}>
                    <Route exact path={`${path}`} component={AllExamsPage} />
                    <Route exact path={`${path}/schedules`} component={ExamsSchedulePage} />
                </React.Suspense>
            </Switch>
        </div>
    )
}

export default ExamRoutes
