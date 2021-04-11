import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import ClassesPage from './ClassesPage'
import ClassDetailPage from './ClassDetailPage'
import AddClassPage from './AddClassPage'

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`/classes`} component={ClassesPage} />
                    <Route exact path={`/classes/add`} component={AddClassPage} />
                    <Route exact path={`/classes/:classId`} component={ClassDetailPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
