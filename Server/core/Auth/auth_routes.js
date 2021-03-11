const express = require("express");
const { validatorMiddleware, userValidators } = require("../Validations");


const controller = require("./auth_controller");
// const apiRoutes = require("../../../api_routes");

const router = express.Router();

router.post('/token', controller.getAccessTokenByRefreshToken);

router.delete('/logout', controller.logout);

router.post('/login', controller.logIn);

router.post('/signup', userValidators.registerValidations, validatorMiddleware, controller.register);

module.exports = router;
