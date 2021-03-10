const express = require('express');

const { lecturerController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', lecturerController.getLecturers);

router.post('/', lecturerController.insertLecturer);

router.get('/:id', lecturerController.getLecturerDetail);

module.exports = router;
