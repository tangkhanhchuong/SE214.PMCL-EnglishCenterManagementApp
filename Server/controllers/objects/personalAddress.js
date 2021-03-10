const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getPersonalAddresses = (req, res) => {
    const queryString = QueryStrings.getAllPersonalAddress();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertPersonalAddress = (req, res) => {
    console.log(req.body);
    const queryString = QueryStrings.insertPersonalAddress(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getPersonalAddressDetail = (req, res) => {
    const queryString = QueryStrings.getPersonalAddressDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getPersonalAddresses, insertPersonalAddress, getPersonalAddressDetail }