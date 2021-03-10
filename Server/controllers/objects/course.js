const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getCourses = (req, res) => {
    const queryString = QueryStrings.getAllCourses();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertCourse = (req, res) => {
    const queryString = QueryStrings.insertCourse(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getCourseDetail = (req, res) => {
    const queryString = QueryStrings.getCourseDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}

const getClassesInCourse = (req, res) => {
    const queryString = QueryStrings.getAllClassesInCourse(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            classes: data
        });
    });
}

module.exports = { getCourses, insertCourse, getCourseDetail, getClassesInCourse }