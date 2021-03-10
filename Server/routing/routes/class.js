const express = require('express');

const { classController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', classController.getClasses);

router.post('/', classController.insertClass);

router.get('/:id/joiner', classController.getJoinersInClass);

router.get('/:id/students', classController.getStudentsInClass);

router.get('/:id/lecturers', classController.getLecturersInClass);

router.post('/:id/joiner', classController.insertPersonIntoClass);

router.post('/:id/remove', classController.removeJoinersInClass);


router.get('/:id', classController.getClassDetail);

module.exports = router;
