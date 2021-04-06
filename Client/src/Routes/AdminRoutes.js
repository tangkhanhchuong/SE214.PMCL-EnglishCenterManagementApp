import GAListener from 'components/GAListener'
import { MainLayout } from 'components/Layout'
import PageSpinner from 'components/PageSpinner'
import React from 'react'
import componentQueries from 'react-component-queries'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const DashboardPage = React.lazy(() => import('pages/Dashboard/DashboardPage'))
const ClassesPages = React.lazy(() => import('pages/Classes'))
const StudentsPages = React.lazy(() => import('pages/Students'))
const NotificationsPages = React.lazy(() => import('pages/Notifications'))
const PaymentPages = React.lazy(() => import('pages/Payments'))
const AccountPages = React.lazy(() => import('pages/Profile'))
const MessagesPages = React.lazy(() => import('pages/Messages'))

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`
}

const AdminRoutes = (props) => {

  return (
    <BrowserRouter basename={getBasename()}>
      <GAListener>
        <Switch>
          <MainLayout breakpoint={props.breakpoint}>
            <React.Suspense fallback={<PageSpinner />}>

              <Route path="/classes" component={ClassesPages} />
              <Route path="/students" component={StudentsPages} />
              <Route path="/payments" component={PaymentPages} />
              <Route path="/messages" component={MessagesPages} />
              <Route path="/account" component={AccountPages} />
              <Route path="/notifications" component={NotificationsPages} />
              <Route exact path="/" component={DashboardPage} />

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

export default componentQueries(query)(AdminRoutes)
