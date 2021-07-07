const express = require("express")
const cors = require("cors")
const http = require("http")
const morgan = require("morgan")

const studentRoutes = require("./Students/students_routes")
const instructorRoutes = require("./Instructors/instructors_routes")
const authRoutes = require("./Auth/auth_routes")
const coursesRoutes = require("./Courses/courses_routes")
const classesRoutes = require("./Classes/classes_routes")
const examsRoutes = require("./Exams/exams_routes")
const notificationsRoutes = require("./Notifications/notifications_routes")
const statisticRoutes = require("./Statistic/statistic_routes")
const { errorHandler } = require("./Errors/error_handler")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/statistic', statisticRoutes)
app.use("/auth", authRoutes)
app.use("/courses", coursesRoutes)
app.use("/classes", classesRoutes)
app.use("/instructors", instructorRoutes)
app.use('/students', studentRoutes)
app.use('/exams', examsRoutes)
app.use('/notifications', notificationsRoutes)
app.use('/', (req, res) => {
    res.json("Welcome")
})

app.use(errorHandler)

module.exports = app