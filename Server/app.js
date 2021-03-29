const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('config')
const app = express()


const defaultPort = config.get('api.port')
const PORT = process.env.PORT || defaultPort

const initiateMiddleware = () => {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())
}

const initiateRoutes = () => {
    const { handleRequest } = require('./routing/router')
    handleRequest(app)
}

const initiateApp = () => {
    initiateMiddleware()
    initiateRoutes()
}


module.exports = { app, initiateApp }