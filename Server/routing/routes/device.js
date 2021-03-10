const express = require('express');

const { deviceController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', deviceController.getDevices);

router.post('/', deviceController.insertDevice);

router.get('/:id', deviceController.getDeviceDetail);

router.post('/borrow/', deviceController.borrowDevice);
router.post('/return/', deviceController.returnDevice);

module.exports = router;
