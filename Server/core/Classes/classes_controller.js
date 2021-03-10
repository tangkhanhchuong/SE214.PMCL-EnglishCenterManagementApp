const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getClasses = (req, res) => {
    const queryString = QueryStrings.getAllClasses();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertClass = (req, res) => {
    const queryString = QueryStrings.insertClass(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getClassDetail = (req, res) => {
    const queryString = QueryStrings.getClassDetail(req.params.id);
    console.log(queryString);
    SQLQuery(queryString, ([data]) => {
        res.status(statusCode.SUCCESSFUL).json({
            data: data
        });
    });
}


const insertPersonIntoClass = (req, res) => {
    console.log(req.body);
    const queryString = QueryStrings.insertPersonIntoClass(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}


const getStudentsInClass = (req, res) => {
    const queryString = QueryStrings.getAllStudentsInClass(req.params.id);

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const getLecturersInClass = (req, res) => {
    const queryString = QueryStrings.getAllLecturersInClass(req.params.id);
    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}


const getJoinersInClass = (req, res) => {
    const queryString = QueryStrings.getAllJoinersInClass(req.params.id);

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const removeJoinersInClass = (req, res) => {
    const classId = req.body.classId;
    const removedJoinerArr = req.body.joiners;
    let joinerConditionQuery = `joinerId = '${removedJoinerArr[0]}' `;
    for (let i = 1; i < removedJoinerArr.length; i++) joinerConditionQuery += `OR joinerId = '${removedJoinerArr[i]}' `;
    let kQuery = `DELETE FROM ClassDetails WHERE classId = '${classId}' AND (${joinerConditionQuery}) `;

    console.log(kQuery);

    SQLQuery(kQuery, () => {
        res.status(statusCode.SUCCESSFUL).json({
            message: "Removed successfully !"
        });
    });
}

module.exports = { getClasses, insertClass, getClassDetail, getStudentsInClass, getLecturersInClass, getJoinersInClass, insertPersonIntoClass, removeJoinersInClass }
