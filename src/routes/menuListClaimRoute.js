const express = require('express');
const router = express.Router();
const menuListClaimController = require('../controllers/menuListClaimController');

router.get('/', menuListClaimController.get);

module.exports = router;
