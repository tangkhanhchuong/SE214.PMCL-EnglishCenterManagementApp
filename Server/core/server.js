const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const http = require("http")
const morgan = require("morgan")

const studentRoutes = require("./Students/students_routes")
const instructorRoutes = require("./Instructors/instructors_routes")
const authRoutes = require("./Auth/auth_routes")
const coursesRoutes = require("./Courses/courses_routes")
const classesRoutes = require("./Classes/classes_routes")
const materialsRoutes = require("./Materials/materials_routes")
const notificationsRoutes = require("./Notifications/notifications_routes")
const { errorHandler } = require("./Errors/error_handler")

const APP_PORT = 5000;
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use("/auth", authRoutes)
app.use("/courses", coursesRoutes)
app.use("/classes", classesRoutes)
app.use('/materials', materialsRoutes)

app.use("/instructors", instructorRoutes)
app.use('/students', studentRoutes)
app.use('/notifications', notificationsRoutes)

app.use(errorHandler)

app.listen(APP_PORT, () => {
    console.log(`Listen to post ${APP_PORT}`);
})