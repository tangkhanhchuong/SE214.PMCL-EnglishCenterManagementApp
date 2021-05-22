const { HttpStatus, HttpStatusCode } = require("../Http");

const errorHandler = (error, req, res, next) => {
    if (!error.statusCode) error.statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
    HttpStatus.error(res, error);
}

const throwError = (statusCode, message) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    throw err;
}

module.exports = { errorHandler, throwError }