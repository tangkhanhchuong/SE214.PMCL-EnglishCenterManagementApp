const express = require('express')

const statisticControllers = require('./statistic_controllers')

const router = express.Router()

router.route('/entities')
    .get(statisticControllers.GetStatistic)

module.exports = router
