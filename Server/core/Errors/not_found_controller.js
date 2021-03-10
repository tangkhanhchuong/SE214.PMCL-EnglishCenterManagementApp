const { HttpStatus, HttpStatusCode } = require("Http");

const notFoundController = (req, res) => {
    const err = new Error("Not found !");
    err.statusCode = HttpStatusCode.NOT_FOUND;
    HttpStatus.error(res, err);

}

module.exports = { notFoundController }