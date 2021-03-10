const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const app = express();


const defaultPort = config.get('api.port');
const PORT = process.env.PORT || defaultPort;

const init = () => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
}

const run = () => {
    const { handleRequest } = require('./routing/router');
    const server = require('http').createServer(app);
    handleRequest(app);
    server.listen(PORT);
}

module.exports = { init, run }