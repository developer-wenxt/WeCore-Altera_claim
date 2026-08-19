const express = require('express');
const router = express.Router();
const policyDataController = require('../controllers/policyDataController');

router.get('/', policyDataController.getPolicyData);

module.exports = router;
