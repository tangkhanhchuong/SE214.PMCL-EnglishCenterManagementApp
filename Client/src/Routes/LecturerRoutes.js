import GAListener from 'components/GAListener'
import { MainLayout } from 'components/Layout'
import PageSpinner from 'components/PageSpinner'
import React from 'react'
import componentQueries from 'react-component-queries'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// const AlertPage = React.lazy(() => import('pages/AlertPage'))
// const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'))
// const BadgePage = React.lazy(() => import('pages/BadgePage'))
// const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'))
// const ButtonPage = React.lazy(() => import('pages/ButtonPage'))
// const CardPage = React.lazy(() => import('pages/CardPage'))
// const ChartPage = React.lazy(() => import('pages/ChartPage'))
// const DropdownPage = React.lazy(() => import('pages/DropdownPage'))
// const FormPage = React.lazy(() => import('pages/FormPage'))
// const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'))
// const ModalPage = React.lazy(() => import('pages/ModalPage'))
// const ProgressPage = React.lazy(() => import('pages/ProgressPage'))
// const TablePage = React.lazy(() => import('pages/TablePage'))
// const TypographyPage = React.lazy(() => import('pages/TypographyPage'))
// const WidgetPage = React.lazy(() => import('pages/WidgetPage'))

const DashboardPage = React.lazy(() => import('pages/Dashboard/DashboardPage'))
const ClassPages = React.lazy(() => import('pages/Class'))

const PersonPage = React.lazy(() => import('pages/Person'))
const PersonManagementPage = React.lazy(() => import('pages/Person/PersonManagementPage'))
const PersonEditPage = React.lazy(() => import('pages/Person/PersonEditPage'))
const PersonCreatePage = React.lazy(() => import('pages/Person/PersonCreatePage'))

const DevicePage = React.lazy(() => import('pages/Device'))
const DeviceManagementPage = React.lazy(() => import('pages/Device/DeviceManagementPage'))
const DeviceBorrowPage = React.lazy(() => import('pages/Device/DeviceBorrowPage'))
const DeviceBorrowDetailPage = React.lazy(() => import('pages/Device/DeviceBorrowDetailPage'))
const DeviceReturnPage = React.lazy(() => import('pages/Device/DeviceReturnPage'))
const DeviceInsertPage = React.lazy(() => import('pages/Device/DeviceInsertPage'))

const PaymentPages = React.lazy(() => import('pages/Payment'))
const ExamsPages = React.lazy(() => import('pages/Exams'))
const AssignmentsPages = React.lazy(() => import('pages/Assignments'))
const AccountPages = React.lazy(() => import('pages/Account'))
const MessagesPages = React.lazy(() => import('pages/Messages'))


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

              <Route path="/classes" component={ClassPages} />

              <Route path="/Person" component={PersonPage} />

              <Route exact path="/Person_Management/:type/All" component={PersonManagementPage} />
              <Route exact path="/Person_Management/:personId/Edit" component={PersonEditPage} />
              <Route path="/Person_Management/:type/Create" component={PersonCreatePage} />


              <Route path="/Device" component={DevicePage} />
              <Route path="/Device_Management/Borrow/:CategoryName" component={DeviceBorrowDetailPage} />
              <Route exact path="/Device_Management/Borrow" component={DeviceBorrowPage} />
              <Route exact path="/Device_Management" component={DeviceManagementPage} />
              <Route exact path="/Device_Management/Return" component={DeviceReturnPage} />
              <Route exact path="/Device_Management/Insert" component={DeviceInsertPage} />


              <Route path="/payment" component={PaymentPages} />
              <Route path="/exams" component={ExamsPages} />
              <Route path="/assignments" component={AssignmentsPages} />
              <Route path="/messages" component={MessagesPages} />
              <Route path="/account" component={AccountPages} />

              <Route exact path="/" component={DashboardPage} />
              {/* <Route exact path="/login-modal" component={AuthModalPage} />
              <Route exact path="/buttons" component={ButtonPage} />
              <Route exact path="/cards" component={CardPage} />
              <Route exact path="/widgets" component={WidgetPage} />
              <Route exact path="/typography" component={TypographyPage} />
              <Route exact path="/alerts" component={AlertPage} />
              <Route exact path="/tables" component={TablePage} />
              <Route exact path="/badges" component={BadgePage} />
              <Route
                exact
                path="/button-groups"
                component={ButtonGroupPage}
              />
              <Route exact path="/dropdowns" component={DropdownPage} />
              <Route exact path="/progress" component={ProgressPage} />
              <Route exact path="/modals" component={ModalPage} />
              <Route exact path="/forms" component={FormPage} />
              <Route exact path="/input-groups" component={InputGroupPage} />
              <Route exact path="/charts" component={ChartPage} /> */}

              {/* <Route path="/">
                <Redirect to="/" />
              </Route> */}

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
