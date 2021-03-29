const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")

const APP_PORT = 5000;
const app = require("./app")
const { initiateApp } = require("./app")
const server = http.createServer(app)

initiateApp()

server.listen(APP_PORT, () => {
    console.log(`Listen to post ${APP_PORT}`);
})