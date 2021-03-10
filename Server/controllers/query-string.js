const Queries = require('../models/mysql-queries.json');
// <<<<<<< HEAD
// =======
const { KGenerateOnlyLetter, KGenerateOnlyNumber } = require('../utils/helpers/kGenerateString');
// >>>>>>> restoreHistory

//General query syntaxes
const insertSyntax = (insertQuery, params) => {
    let queryString = Object.values(params).map((param) => `"${param}"`).join(',');
    queryString = `${insertQuery} (${queryString})`;

    console.log(queryString);
    return queryString;
}

const selectSyntax = (selectQuery) => {
    console.log(selectQuery);
    return selectQuery;
}



const detailSyntax = (detailQuery, id) => {
    const queryString = `${detailQuery}${id}`;
    console.log(queryString);
    return queryString;
}

// <<<<<<< HEAD
const removeSyntax = (removeQuery, condition) => {

}

// =======
// >>>>>>> restoreHistory
// //STUDENT
const insertStudent = ({ studentId, personalInformationId }) => {
    return insertSyntax(Queries.INSERT_STUDENT, { studentId, personalInformationId });
}

const getAllStudents = () => {
    return selectSyntax(Queries.LIST_ALL_STUDENTS);
}

const getStudentDetail = (id) => {
    return detailSyntax(Queries.STUDENT_DETAIL, id);
}

//PERSONAL INFO
const insertPersonalInfo = ({ name, phone, gender, dateOfBirth, email, addressId }) => {
    return insertSyntax(Queries.INSERT_PERSONAL_INFO, { name, phone, gender, dateOfBirth, email, addressId });
}

const getAllPersonalInfo = () => {
    return selectSyntax(Queries.LIST_ALL_PERSONAL_INFOS);
}

const getPersonalInfoDetail = (id) => {
    return detailSyntax(Queries.PERSONAL_INFO_DETAIL, id);
}

//PERSONAL ADDRESS
const insertPersonalAddress = ({ addressId, streetDetails, ward, district, city, country }) => {
    return insertSyntax(Queries.INSERT_PERSONAL_ADDRESS, { addressId, streetDetails, ward, district, city, country });
}

const getAllPersonalAddress = () => {
    return selectSyntax(Queries.LIST_ALL_PERSONAL_ADDRESSES);
}

const getPersonalAddressDetail = (id) => {
    return detailSyntax(Queries.PERSONAL_ADDRESS_DETAIL, id);
}

//COURSE
const insertCourse = ({ courseId, courseName, description }) => {
    return insertSyntax(Queries.INSERT_COURSE, { courseId, courseName, description });
}

const getAllCourses = () => {
    return selectSyntax(Queries.LIST_ALL_COURSES);
}

const getCourseDetail = (id) => {
    return detailSyntax(Queries.COURSE_DETAIL, id);
}

const getAllClassesInCourse = (id) => {
    return detailSyntax(Queries.LIST_ALL_CLASSES_IN_COURSE, id);
}

//ROOM
const insertRoom = ({ numOfSeat }) => {
    return insertSyntax(Queries.INSERT_ROOM, { numOfSeat });
}

const getAllRooms = () => {
    return selectSyntax(Queries.LIST_ALL_ROOMS);
}

const getRoomDetail = (id) => {
    return detailSyntax(Queries.ROOM_DETAIL, id);
}

//CLASSROOM
const insertClassRoom = ({ roomId, roomName }) => {
    return insertSyntax(Queries.INSERT_CLASSROOM, { roomId, roomName });
}

const getAllClassRooms = () => {
    return selectSyntax(Queries.LIST_ALL_CLASSROOMS);
}

const getClassRoomDetail = (id) => {
    return detailSyntax(Queries.CLASSROOM_DETAIL, id);
}

//LECTURER
const insertLecturer = ({ lecturerId, personalInformationId }) => {
    return insertSyntax(Queries.INSERT_LECTURER, { lecturerId, personalInformationId });
}

const getAllLecturers = () => {
    return selectSyntax(Queries.LIST_ALL_LECTURERS);
}

const getLecturerDetail = (id) => {
    return detailSyntax(Queries.LECTURER_DETAIL, `'${id}'`);
}

//STAFF
const insertStaff = ({ staffId, personalInformationId }) => {
    return insertSyntax(Queries.INSERT_STAFF, { staffId, personalInformationId });
}

const getAllStaffs = () => {
    return selectSyntax(Queries.LIST_ALL_STAFFS);
}

const getStaffDetail = (id) => {
    return detailSyntax(Queries.STAFF_DETAIL, id);
}

//WEEKLY SCHEDULE

const insertWeeklySchedule = ({ description }) => {
    return insertSyntax(Queries.INSERT_WEEKLY_SCHEDULE, { description });
}

const getAllWeeklySchedules = () => {
    return selectSyntax(Queries.LIST_ALL_WEEKLY_SCHEDULES);
}

const getWeeklyScheduleDetail = (id) => {
    return detailSyntax(Queries.WEEKLY_SCHEDULE_DETAIL, id);
}

//OFFICE
const insertOffice = ({ roomId, roomName }) => {
    return insertSyntax(Queries.INSERT_CLASSROOM, { roomId, roomName });
}

const getAllOffices = () => {
    return selectSyntax(Queries.LIST_ALL_OFFICES);
}

const getOfficeDetail = (id) => {
    return detailSyntax(Queries.OFFICE_DETAIL, id);
}

//CLASS
// <<<<<<< HEAD
const insertPersonIntoClass = ({ classId, joinerId, role }) => {
    console.log(joinerId, classId);
    return insertSyntax(Queries.INSERT_CLASS_DETAIL, { classId, joinerId, role });
}

const removeStudentFromClass = ({ classId, joinerId, roleId }) => {
    return insertSyntax(Queries.REMOVE, { classId, joinerId, roleId });
}

// =======
// >>>>>>> restoreHistory
const insertClass = ({ classId, className, courseId, beginDate, endDate, description }) => {
    return insertSyntax(Queries.INSERT_CLASS, { classId, className, courseId, beginDate, endDate, description });
}

const getAllClasses = () => {
    return selectSyntax(Queries.LIST_ALL_CLASSES);
}

const getClassDetail = (classId) => {
    return detailSyntax(Queries.CLASS_DETAIL, `'${classId}'`);
}

const getAllJoinersInClass = (id) => {
    return detailSyntax(Queries.LIST_ALL_JOINERS_IN_CLASS, id);
}

const getAllStudentsInClass = (id) => {
    return detailSyntax(Queries.LIST_ALL_STUDENTS_IN_CLASS, `'${id}'`);
}

const getAllLecturersInClass = (id) => {
    return detailSyntax(Queries.LIST_ALL_LECTURERS_IN_CLASS, `'${id}'`);
}

//Account
const getAccountByUsername = (username) => {
    return detailSyntax(Queries.ACCOUNT_BY_USERNAME, `"${username}"`);
}

const insertAccount = ({ username, password, roleId }) => {
    return insertSyntax(Queries.INSERT_ACCOUNT, { username, password, roleId });
}


const GetDiviceTypePrefix = (type) => {
    switch (type) {
        case "1": return "MO_";
        case "2": return "KB_";
        case "3": return "MI_";
        case "4": return "RM_";

        default: return "UN_";
    }
}

const insertDevice = ({ name, brand, description, type }) => {
    let serial = GetDiviceTypePrefix(type) + KGenerateOnlyLetter(4, true) + KGenerateOnlyNumber(4);
    return insertSyntax(Queries.INSERT_DEVICE, { serial, name, brand, description, type });
}
const inOutDevice = ({ id, status }) => {
    return insertSyntax(Queries.INOUT_DEVICE, { id, status });
}


// >>>>>>> restoreHistory
const getAllDevices = () => {
    return selectSyntax(Queries.LIST_ALL_DEVICES);
}

const getDeviceDetail = (id) => {
    return detailSyntax(Queries.DEVICE_DETAIL, id);
}

module.exports = {
    insertStudent, getAllStudents, getStudentDetail,
    insertClass, getAllClasses, getClassDetail, getAllStudentsInClass, getAllLecturersInClass, insertPersonIntoClass, getAllJoinersInClass,
    insertPersonalInfo, getAllPersonalInfo, getPersonalInfoDetail,
    insertPersonalAddress, getAllPersonalAddress, getPersonalAddressDetail,
    insertCourse, getAllCourses, getCourseDetail, getAllClassesInCourse,
    insertRoom, getAllRooms, getRoomDetail,
    insertClassRoom, getAllClassRooms, getClassRoomDetail,
    insertLecturer, getAllLecturers, getLecturerDetail,
    insertStaff, getAllStaffs, getStaffDetail,
    insertWeeklySchedule, getAllWeeklySchedules, getWeeklyScheduleDetail,
    insertOffice, getAllOffices, getOfficeDetail,
    getAccountByUsername, insertAccount,
    insertDevice, getAllDevices, getDeviceDetail
}