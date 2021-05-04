import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import ClassesPage from './pages/ClassesPage'
import ClassDetailsPage from './pages/ClassDetailsPage'
import AddClassPage from './pages/AddClassPage'

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`/classes`} component={ClassesPage} />
                    <Route exact path={`/classes/add`} component={AddClassPage} />
                    <Route exact path={`/classes/:classId`} component={ClassDetailsPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
