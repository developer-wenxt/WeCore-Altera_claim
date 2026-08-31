const express = require('express');
const router = express.Router();
const polAcntEntryController = require('../controllers/polAcntEntryController');

router.get('/', polAcntEntryController.get);

module.exports = router;
