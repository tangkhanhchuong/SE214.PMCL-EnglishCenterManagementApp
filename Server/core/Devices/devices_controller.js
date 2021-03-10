const statusCode = require('../../utils/config/statusCode');
const SQLQuery = require('../query-syntaxes');
const QueryStrings = require('../query-string');

const getDevices = (req, res) => {
    const queryString = QueryStrings.getAllDevices();

    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json({
            count: data.length,
            data: data
        });
    });
}

const insertDevice = (req, res) => {
    const queryString = QueryStrings.insertDevice(req.body);

    SQLQuery(queryString, () => {
        res.status(statusCode.CREATED).json({
            message: "Created"
        });
    });
}

const getDeviceDetail = (req, res) => {
    const queryString = QueryStrings.getDeviceDetail(`'${req.params.id}'`);
    console.log(queryString);
    // <<<<<<< HEAD
    //     SQLQuery(queryString, ([data]) => {
    //         res.status(statusCode.SUCCESSFUL).json({
    //             data: data
    // =======
    SQLQuery(queryString, (data) => {
        res.status(statusCode.SUCCESSFUL).json(data[0]);
    });
}

const borrowDevice = (req, res) => {
    let { serial, borrower, note } = req.body;
    if (!borrower) { borrower = ''; }
    if (!note) { note = ''; }

    const queryDeviceString = `UPDATE Device SET Device.status = 'Borrowed', Device.note = '${note}' WHERE Device.serial = '${serial}'`;
    const queryInOutString = `INSERT INTO DeviceInOutDetail (type,serial,borrower,note) VALUES ('borrow','${serial}', '${borrower}', '${note}')`;


    SQLQuery(queryDeviceString, () => {
        SQLQuery(queryInOutString, () => {
            res.status(statusCode.SUCCESSFUL).json({
                message: "OK"
            });
        });
    });

}

const returnDevice = (req, res) => {
    let { serial } = req.body;

    const queryDeviceString = `UPDATE Device SET Device.status = 'Available', Device.note = '' WHERE Device.serial = '${serial}'`;
    const queryInOutString = `INSERT INTO DeviceInOutDetail (type,serial) VALUES ('return', '${serial}')`;


    SQLQuery(queryDeviceString, () => {
        SQLQuery(queryInOutString, () => {
            res.status(statusCode.SUCCESSFUL).json({
                message: "OK"
            });
            // >>>>>>> restoreHistory
        });
    });
}

// <<<<<<< HEAD
// module.exports = { getDevices, insertDevice, getDeviceDetail }
// =======
module.exports = { getDevices, insertDevice, getDeviceDetail, borrowDevice, returnDevice }
// >>>>>>> restoreHistory
