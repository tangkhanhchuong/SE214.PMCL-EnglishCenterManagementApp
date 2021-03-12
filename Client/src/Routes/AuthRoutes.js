import React from 'react'
import { EmptyLayout, LayoutRoute } from 'components/Layout'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import GAListener from 'components/GAListener'
import { STATE_LOGIN, STATE_SIGNUP } from 'pages/Auth'
import { AuthPage } from 'pages/Auth'

const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split('/').pop()}`
}

export default () => {
    return (
        <BrowserRouter basename={getBasename()}>
            <GAListener>
                <Switch>
                    <LayoutRoute
                        exact
                        path="/login"
                        layout={EmptyLayout}
                        component={props => (
                            <AuthPage {...props} authState={STATE_LOGIN} />
                        )}
                    />
                    <LayoutRoute
                        exact
                        path="/signup"
                        layout={EmptyLayout}
                        component={props => (
                            <AuthPage {...props} authState={STATE_SIGNUP} />
                        )}
                    />
                    <Route path="/">
                        <Redirect to="/login" />
                    </Route>
                </Switch>
            </GAListener>
        </BrowserRouter>
    )
}
