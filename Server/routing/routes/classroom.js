const express = require('express');

const { classroomController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', authToken, classroomController.getClassrooms);

router.post('/', authToken, classroomController.insertClassroom);

router.get('/:id', authToken, classroomController.getClassroomDetail);

module.exports = router;
