const express = require('express')

const addressesController = require('./addresses_controller')
const authToken = require('../../utils/helpers/token-decoder')

const router = express.Router()

router.route('/')
    .get(addressesController.GetAllAddresses)
    .post(addressesController.CreateAddress)



router.route('/:addressId')
    .get(addressesController.GetAddressDetails)
    .patch(addressesController.UpdateAddress)
    .delete(addressesController.DeleteAddress)


module.exports = router
