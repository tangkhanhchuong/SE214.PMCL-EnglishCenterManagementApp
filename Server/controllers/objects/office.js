const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getOffices = (req, res) => {
    const queryString = QueryStrings.getAllOffices();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertOffice = (req, res) => {
    const queryString = QueryStrings.insertOffice(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getOfficeDetail = (req, res) => {
    const queryString = QueryStrings.getOfficeDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getOffices, insertOffice, getOfficeDetail }