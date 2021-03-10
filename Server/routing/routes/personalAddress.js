const express = require('express');

const { personalAddressController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', personalAddressController.getPersonalAddresses);

router.post('/', personalAddressController.insertPersonalAddress);

router.get('/:id', authToken, personalAddressController.getPersonalAddressDetail);

module.exports = router;
