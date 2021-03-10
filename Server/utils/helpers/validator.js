const { getAccountByUsername } = require('../../controllers/objects/auth')
const statusCode = require('../config/statusCode');

const validator = (req, res, next) => {
    const { username, password } = req.body;
    let err;
    if (username.length <= 5 || password.length <= 5) {
        err = new Error("Username and password must be at least 5 characters!!!");
        err.statusCode = statusCode.UNPROCESSABLE_ENTITY;
        req.error = err;
        next();
    }
    else {
        getAccountByUsername(req.body.username, (data) => {
            console.log(data);
            if (data.length !== 0) {
                return new Promise(() => {
                    err = new Error("E-Mail address already exists!");
                    err.statusCode = statusCode.UNPROCESSABLE_ENTITY;
                    throw err;
                }).catch((err) => {
                    req.error = err;
                    next();
                })
            }
            else {
                next();
            }
        })
    }
}

module.exports = { validator }