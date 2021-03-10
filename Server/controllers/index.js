const personalInfoController = require('./objects/personalInfo');
const studentController = require('./objects/student');
const lecturerController = require('./objects/lecturer');
const staffController = require('./objects/staff');
const personalAddressController = require('./objects/personalAddress');
const courseController = require('./objects/course');
const roomController = require('./objects/room');
const classroomController = require('./objects/classroom');
const classController = require('./objects/class');
const weeklyScheduleController = require('./objects/weeklySchedule');
const officeController = require('./objects/office');
const authController = require('./objects/auth');
const deviceController = require('./objects/device');

module.exports = {
    personalInfoController,
    studentController,
    lecturerController,
    staffController,
    personalAddressController,
    courseController,
    roomController,
    classroomController,
    classController,
    weeklyScheduleController,
    officeController,
    authController,
    deviceController
}