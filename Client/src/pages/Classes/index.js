import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'
import ClassesPage from './pages/ClassesPage'
import ClassDetailsPage from './pages/ClassDetailsPage'
import AddClassPage from './pages/AddClassPage'
import AddCoursePage from './pages/AddCoursePage'
import EditClassPage from './pages/EditClassPage'
import EditCoursePage from './pages/EditCoursePage'

const ClassRoutes = () => {
    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`/classes`} component={ClassesPage} />
                    <Route exact path={`/classes/add`} component={AddClassPage} />
                    <Route exact path={`/classes/add-course`} component={AddCoursePage} />
                    <Route exact path={`/classes/:classId`} component={ClassDetailsPage} />
                    <Route exact path={`/classes/:classId/edit`} component={EditClassPage} />
                    <Route exact path={`/classes/edit-course/:courseId`} component={EditCoursePage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
