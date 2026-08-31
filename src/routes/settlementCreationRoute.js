const express = require('express');
const router = express.Router();
const settlementCreationController = require('../controllers/settlementCreationController');

router.get('/', settlementCreationController.createSettlement);

module.exports = router;
