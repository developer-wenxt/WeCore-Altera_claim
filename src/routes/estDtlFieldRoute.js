const express = require('express');
const router = express.Router();
const estDtlFieldController = require('../controllers/estDtlFieldController');

router.get('/', estDtlFieldController.get);


module.exports = router;
