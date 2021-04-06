import React from "react"
import { Provider } from 'react-redux'

import PageSpinner from 'components/PageSpinner'
import store from "Redux/store"
import RoutesProcess from 'Routes/index'
import ErrorBoundary from "./ErrorBoundary"

const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <React.Suspense fallback={<PageSpinner />}>
                    <RoutesProcess />
                </React.Suspense>
            </ErrorBoundary>
        </Provider>
    )
}

export default AppProvider