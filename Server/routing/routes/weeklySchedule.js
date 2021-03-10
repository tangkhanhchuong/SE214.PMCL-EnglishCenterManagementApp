const express = require('express');

const { weeklyScheduleController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', authToken, weeklyScheduleController.getWeeklySchedules);

router.post('/', authToken, weeklyScheduleController.insertWeeklySchedule);

router.get('/:id', authToken, weeklyScheduleController.getWeeklyScheduleDetail);

module.exports = router;
