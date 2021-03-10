const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getWeeklySchedules = (req, res) => {
    const queryString = QueryStrings.getAllWeeklySchedules();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertWeeklySchedule = (req, res) => {
    const queryString = QueryStrings.insertWeeklySchedule(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getWeeklyScheduleDetail = (req, res) => {
    const queryString = QueryStrings.getWeeklyScheduleDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

module.exports = { getWeeklySchedules, insertWeeklySchedule, getWeeklyScheduleDetail }