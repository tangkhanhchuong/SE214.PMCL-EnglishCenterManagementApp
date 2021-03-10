import React from 'react';
import ReactDOM from 'react-dom';

import PageSpinner from 'components/PageSpinner';
import { Provider } from 'react-redux';
import ErrorBoundary from "./ErrorBoundary";
import AppProvider from "./AppProvider";
import store from "./Redux/store";

// <<<<<<< HEAD
// import App from './App';
// import 'index.scss'
// =======
import RoutesProcess from './Routes/index'
//import App from './App';
import 'index.scss'
import './styles/reduction.scss';
// >>>>>>> restoreHistory


ReactDOM.render(
    <Provider store={store}>
        <AppProvider>
            <ErrorBoundary>
                <React.Suspense fallback={<PageSpinner />}>
                    {/* <<<<<<< HEAD
                    <App />
======= */}
                    <RoutesProcess />
                    {/* >>>>>>> restoreHistory */}
                </React.Suspense>
            </ErrorBoundary>
        </AppProvider>
    </Provider>

    ,
    document.getElementById('root')
);