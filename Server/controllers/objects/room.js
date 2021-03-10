const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getRooms = (req, res) => {
    const queryString = QueryStrings.getAllRooms();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertRoom = (req, res) => {
    const queryString = QueryStrings.insertRoom(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getRoomDetail = (req, res) => {
    const queryString = QueryStrings.getRoomDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getRooms, insertRoom, getRoomDetail }