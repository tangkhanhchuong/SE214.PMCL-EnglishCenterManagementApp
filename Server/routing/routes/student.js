const express = require('express');

const { studentController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', studentController.getStudents);

router.post('/', studentController.insertStudent);

router.get('/:id', studentController.getStudentDetail);

module.exports = router;
