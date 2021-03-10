const express = require('express');

const { staffController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', authToken, staffController.getStaffs);

router.post('/', authToken, staffController.insertStaff);

router.get('/:id', authToken, staffController.getStaffDetail);

module.exports = router;
