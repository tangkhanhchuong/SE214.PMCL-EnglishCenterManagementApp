const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")

const { personsRoutes } = require("./Persons")
const { authRoutes } = require("./Auth")
const { courseRoutes } = require("./Courses")
const { classRoutes } = require("./Classes")
const { errorHandler } = require("./Errors/error_handler")

const APP_PORT = 5000;
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/persons", personsRoutes)
app.use("/auth", authRoutes)
app.use("/courses", courseRoutes)
app.use("/classes", classRoutes)
app.use(errorHandler)

app.listen(APP_PORT, () => {
    console.log(`Listen to post ${APP_PORT}`);
})