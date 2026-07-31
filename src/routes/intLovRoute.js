const express = require('express');
const router = express.Router();
const intLovController = require('../controllers/intLovController');

router.get('/', intLovController.get);


module.exports = router;
