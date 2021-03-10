const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getPersonalInfos = (req, res) => {
    const queryString = QueryStrings.getAllPersonalInfo();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertPersonalInfo = (req, res) => {
    const queryString = QueryStrings.insertPersonalInfo(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getPersonalInfoDetail = (req, res) => {
    const queryString = QueryStrings.getPersonalInfoDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}


module.exports = { getPersonalInfos, insertPersonalInfo, getPersonalInfoDetail }