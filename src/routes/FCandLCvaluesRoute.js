const express = require('express');
const router = express.Router();
const FCandLCvaluesController = require('../controllers/FCandLCvaluesController');

router.get('/', FCandLCvaluesController.getFCandLCvalues);

module.exports = router;
