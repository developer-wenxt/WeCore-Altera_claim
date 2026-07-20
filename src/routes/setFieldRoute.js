const express = require('express');
const router = express.Router();
const setFieldController = require('../controllers/setFieldController');

router.get('/', setFieldController.get);


module.exports = router;
