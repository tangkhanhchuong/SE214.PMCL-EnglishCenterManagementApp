const StatusCode = require('../config/statusCode')

const errorHandler = (error, req, res, next) => {
    const { statusCode, message, data } = error;

    res.status(statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({ message: message, data: data });
}

module.exports = { errorHandler }