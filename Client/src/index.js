import React from 'react'
import ReactDOM from 'react-dom'

import 'index.scss'
import 'styles/reduction.scss'

import AppProvider from 'core/Container/AppProvider'

ReactDOM.render(
    <AppProvider />,
    document.getElementById('root')
)