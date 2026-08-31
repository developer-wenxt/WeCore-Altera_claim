const express = require('express');
const router = express.Router();
const settlementApprovalController = require('../controllers/settlementApprovalController');

router.post('/', settlementApprovalController.approveSettlement);

module.exports = router;
