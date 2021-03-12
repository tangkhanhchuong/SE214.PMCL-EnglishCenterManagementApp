import GAListener from 'components/GAListener'
import { MainLayout } from 'components/Layout'
import PageSpinner from 'components/PageSpinner'
import React from 'react'
import componentQueries from 'react-component-queries'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const DashboardPage = React.lazy(() => import('pages/Dashboard/DashboardPage'))

const ClassPage = React.lazy(() => import('pages/Class/ClassPage'))
const ClassDetailPage = React.lazy(() => import('pages/Class/ClassDetailPage'))
const ClassDetailEditPage = React.lazy(() => import('pages/Class/ClassDetailEditPage'))
const ClassScorePage = React.lazy(() => import('pages/Class/ClassScorePage'))
const ClassDetailInsertPage = React.lazy(() => import('pages/Class/ClassDetailInsertPage'))


const PersonPage = React.lazy(() => import('pages/Person'))
const PersonManagementPage = React.lazy(() => import('pages/Person/PersonManagementPage'))
const PersonEditPage = React.lazy(() => import('pages/Person/PersonEditPage'))
const PersonCreatePage = React.lazy(() => import('pages/Person/PersonCreatePage'))

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`
}

const App = (props) => {

  return (
    <BrowserRouter basename={getBasename()}>
      <GAListener>
        <Switch>
          <MainLayout breakpoint={props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/" component={DashboardPage} />
              <Route path="/my-classes" component={ClassPage} />
              <Route exact path="/Class_Detail/:classId" component={ClassDetailPage} />
              <Route path="/Class_Detail/:classId/Edit" component={ClassDetailEditPage} />
              <Route exact path="/Class_Detail/:classId/Score" component={ClassScorePage} />
              <Route path="/Class_Detail/:classId/Insert" component={ClassDetailInsertPage} />

              <Route path="/Person" component={PersonPage} />

              <Route exact path="/Person_Management/:type/All" component={PersonManagementPage} />
              <Route exact path="/Person_Management/:personId/Edit" component={PersonEditPage} />
              <Route path="/Person_Management/:type/Create" component={PersonCreatePage} />

              <Route path="/">
                <Redirect to="/" />
              </Route>

            </React.Suspense>
          </MainLayout>

        </Switch>
      </GAListener>
    </BrowserRouter>
  )
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' }
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' }
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' }
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' }
  }

  if (width > 1200) {
    return { breakpoint: 'xl' }
  }

  return { breakpoint: 'xs' }
}

export default componentQueries(query)(App)
