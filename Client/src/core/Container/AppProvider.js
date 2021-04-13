import React from "react"
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import PageSpinner from 'components/PageSpinner'
import store from "Redux/store"
import RoutesProcess from 'Routes/index'
import ErrorBoundary from "./ErrorBoundary"

const queryClient = new QueryClient()

const AppProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <QueryClientProvider client={queryClient}>
                    <React.Suspense fallback={<PageSpinner />}>
                        <RoutesProcess />
                    </React.Suspense>
                </QueryClientProvider>
            </ErrorBoundary>
        </Provider>
    )
}

export default AppProvider