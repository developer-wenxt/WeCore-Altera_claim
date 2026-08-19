const express = require('express');
const router = express.Router();
const intiDataController = require('../controllers/intiDataController');

router.get('/intimation', intiDataController.getIntimationData);
router.get('/policy', intiDataController.getPolicyData);

module.exports = router;
