import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import PageSpinner from 'components/PageSpinner'

const ExamsPage = React.lazy(() => import('./pages/ExamsPage'))
const AddExamPage = React.lazy(() => import('./pages/AddExamPage'))
const ExamDetailsPage = React.lazy(() => import('./pages/ExamDetailsPage'))
const EditExamPage = React.lazy(() => import('./pages/EditExamPage'))

const ClassRoutes = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <React.Suspense fallback={<PageSpinner />}>
                <Switch>
                    <Route exact path={`${path}`} component={ExamsPage} />
                    <Route exact path={`${path}/add`} component={AddExamPage} />
                    <Route exact path={`${path}/:examId/edit`} component={EditExamPage} />
                    <Route exact path={`${path}/:examId`} component={ExamDetailsPage} />
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default ClassRoutes
