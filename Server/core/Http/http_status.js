const HttpStatusCode = require("./http_status_code");

const error = (res, err) => {
    console.log(err.statusCode);
    const status = err.statusCode || err.status;
    const statusCode = status || HttpStatusCode.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({
        "message": err.message
    });
}

const created = (res, data) => {
    res.status(HttpStatusCode.CREATED).json(data);
}

const ok = (res, data) => {
    res.status(HttpStatusCode.SUCCESSFUL).json(data);
}

const noContent = (res) => {
    res.sendStatus(HttpStatusCode.NO_CONTENT);
}

module.exports = { ok, created, error, noContent }