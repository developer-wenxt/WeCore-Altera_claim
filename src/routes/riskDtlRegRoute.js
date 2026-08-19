const express = require('express');
const router = express.Router();
const riskDtlRegController = require('../controllers/riskDtlRegController');

router.get('/policy', riskDtlRegController.getPolicy);
router.get('/section', riskDtlRegController.getSection);
router.get('/risk', riskDtlRegController.getRisk);
router.get('/smi', riskDtlRegController.getSmi);
router.get('/cover', riskDtlRegController.getCover);

module.exports = router;

