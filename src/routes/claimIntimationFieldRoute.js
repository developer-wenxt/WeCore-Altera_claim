const express = require('express');
const router = express.Router();
const claimIntimationController = require('../controllers/claimIntimationFieldController');

router.get('/', claimIntimationController.get);


module.exports = router;
