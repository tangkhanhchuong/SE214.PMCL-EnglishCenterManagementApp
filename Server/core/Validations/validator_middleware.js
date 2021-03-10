const { validationResult } = require("express-validator/check");
const { HttpStatusCode } = require("../Http")

const validationMiddleware = (req, res, next) => {
    let result = validationResult(req);
    if (!result.isEmpty()) {
        const err = new Error(result.errors[0].msg)
        err.statusCode = HttpStatusCode.UNAUTHORIZED
        throw err
    };
    next()
}

module.exports = validationMiddleware;