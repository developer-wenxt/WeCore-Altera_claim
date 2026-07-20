const express = require('express');
const router = express.Router();
const menuListController = require('../controllers/menuListController');

router.get('/', menuListController.get);


module.exports = router;
