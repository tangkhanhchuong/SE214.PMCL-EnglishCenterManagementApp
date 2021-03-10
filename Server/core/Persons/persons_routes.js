const express = require("express")

const router = express.Router()

const controller = require("./persons_controller")


// /persons

// /persons/students

// /persons/students/:id

// /persons/lecturers

// /persons/lecturers/:id

// /persons/staffs

// /persons/staffs/:id

module.exports = router