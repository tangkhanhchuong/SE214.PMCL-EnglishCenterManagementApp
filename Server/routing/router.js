const studentRoute = require('./routes/student');
const personalInfoRoute = require('./routes/personalInfo');
const personalAddressRoute = require('./routes/personalAddress');
const courseRoute = require('./routes/course');
const roomRoute = require('./routes/room');
const classroomRoute = require('./routes/classroom');
const lecturerRoute = require('./routes/lecturer');
const staffRoute = require('./routes/staff');
const officeRoute = require('./routes/office');
const weeklyScheduleRoute = require('./routes/weeklySchedule');
const classRoute = require('./routes/class');
const authRoute = require('./routes/auth');
const deviceRoute = require('./routes/device');
const indexRoute = require('./routes');

const { errorHandler } = require('../utils/helpers/error-handler');

const handleRequest = (app) => {
    app.use('/v1/auth', authRoute);
    app.use('/v1/student', studentRoute);
    app.use('/v1/lecturer', lecturerRoute);
    app.use('/v1/staff', staffRoute);
    app.use('/v1/device', deviceRoute);
    app.use('/v1/personal-info', personalInfoRoute);
    app.use('/v1/personal-address', personalAddressRoute);
    app.use('/v1/course', courseRoute);
    app.use('/v1/room', roomRoute);
    app.use('/v1/classroom', classroomRoute);
    app.use('/v1/office', officeRoute);
    app.use('/v1/weekly-schedule', weeklyScheduleRoute);
    app.use('/v1/class', classRoute);
    app.use('/v1', indexRoute);
    app.use((req, res) => {
        res.json("Not found");
    })
    app.use(errorHandler);
}

module.exports = { handleRequest };