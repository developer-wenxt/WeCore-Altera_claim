const express = require('express');
const router = express.Router();
const claimRegisterFieldController = require('../controllers/claimRegisterFieldController');

router.get('/', claimRegisterFieldController.get);


module.exports = router;
