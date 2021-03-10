const { body } = require("express-validator/check")

const username = body("username", "Username is required of minimum length of 6.").isLength({ min: 6 });;
const email = body("email", "Please provide a valid email address").isEmail();
const password = body("password", "Password is required of minimum length of 6.").isLength({ min: 6 });

module.exports = {
    registerValidations: [email, username, password],
    authenticateValidations: [username, password],
    resetPassword: [username]
}

