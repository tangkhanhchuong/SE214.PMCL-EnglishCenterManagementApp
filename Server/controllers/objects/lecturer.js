const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getLecturers = (req, res) => {
    const queryString = QueryStrings.getAllLecturers();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertLecturer = (req, res) => {
    const queryString = QueryStrings.insertLecturer(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getLecturerDetail = (req, res) => {
    const queryString = QueryStrings.getLecturerDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getLecturers, insertLecturer, getLecturerDetail }