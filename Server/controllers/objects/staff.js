const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getStaffs = (req, res) => {
    const queryString = QueryStrings.getAllStaffs();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertStaff = (req, res) => {
    const queryString = QueryStrings.insertStaff(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getStaffDetail = (req, res) => {
    const queryString = QueryStrings.getStaffDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getStaffs, insertStaff, getStaffDetail }