import React from 'react'
import ReactDOM from 'react-dom'

import 'index.scss'
import 'styles/reduction.scss'

import AppProvider from 'core/Container/AppProvider'
import Hello from 'pages/Auth/AuthForm/hello'
 
ReactDOM.render(
    <Hello />,
    document.getElementById('root')
)