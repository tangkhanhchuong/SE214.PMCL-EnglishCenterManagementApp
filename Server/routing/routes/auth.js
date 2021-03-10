const express = require('express');

const { authController } = require('../../controllers');
const { validator } = require('../../utils/helpers/validator');

const router = express.Router();


router.post('/signup', validator, authController.signup);

router.post('/login', authController.login);

module.exports = router;
