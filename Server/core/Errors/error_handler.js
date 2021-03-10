const { HttpStatus, HttpStatusCode } = require("../Http");

const errorHandler = (error, req, res, next) => {
    if (!error.statusCode) error.statusCode = HttpStatusCode.INTERNAL_SERVER_ERROR;
    console.log(error);
    HttpStatus.error(res, error);
}

const throwError = (statusCode, message) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    console.log(err);
    throw err;
}

module.exports = { errorHandler, throwError }