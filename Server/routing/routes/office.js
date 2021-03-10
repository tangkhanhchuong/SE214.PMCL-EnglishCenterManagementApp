const express = require('express');

const { officeController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', authToken, officeController.getOffices);

router.post('/', authToken, officeController.insertOffice);

router.get('/:id', authToken, officeController.getOfficeDetail);

module.exports = router;
