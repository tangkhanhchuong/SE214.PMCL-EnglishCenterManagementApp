const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")

const APP_PORT = 5000;
const app = express()
const server = http.createServer(app)

app.listen(APP_PORT, () => {
    console.log(`Listen to post ${PORT}`);
})