const express = require('express');
const router = express.Router();
const clmRegRiskDtlsFieldController = require('../controllers/clmRegRiskDtlsFieldController');

router.get('/', clmRegRiskDtlsFieldController.get);


module.exports = router;
