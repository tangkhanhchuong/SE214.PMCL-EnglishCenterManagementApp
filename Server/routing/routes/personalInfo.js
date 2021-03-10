const express = require('express');

const { personalInfoController } = require('../../controllers');
const authToken = require('../../utils/helpers/token-decoder');

const router = express.Router();

router.get('/', personalInfoController.getPersonalInfos);

router.post('/', personalInfoController.insertPersonalInfo);

router.get('/:id', authToken, personalInfoController.getPersonalInfoDetail);

module.exports = router;
