const express = require('express');

const { roomController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', authToken, roomController.getRooms);

router.post('/', authToken, roomController.insertRoom);

router.get('/:id', authToken, roomController.getRoomDetail);

module.exports = router;
