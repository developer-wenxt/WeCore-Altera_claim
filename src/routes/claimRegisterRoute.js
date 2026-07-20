const express = require('express');
const router = express.Router();
const claimRegisterController = require('../controllers/claimRegisterController');

router.get('/', claimRegisterController.get);

module.exports = router;
