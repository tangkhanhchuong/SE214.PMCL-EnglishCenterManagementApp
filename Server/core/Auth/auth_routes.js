const express = require("express")
const { validatorMiddleware, userValidators } = require("../Validations")


const controller = require("./auth_controller")

const router = express.Router()

router.get("/", controller.getAccounts)

router.post('/token', controller.getAccessTokenByRefreshToken)

router.delete('/logout', controller.logout)

router.post('/login', controller.logIn)

router.post('/signup', controller.register)

module.exports = router
