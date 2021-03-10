const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getClassrooms = (req, res) => {
    const queryString = QueryStrings.getAllClassRooms();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertClassroom = (req, res) => {
    const queryString = QueryStrings.insertClassRoom(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getClassroomDetail = (req, res) => {
    const queryString = QueryStrings.getClassRoomDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getClassrooms, insertClassroom, getClassroomDetail }