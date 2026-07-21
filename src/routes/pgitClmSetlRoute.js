const express = require('express');
const router = express.Router();
const pgitClmSetlController = require('../controllers/pgitClmSetlController');

router.get('/', pgitClmSetlController.getAll);
router.get('/:id', pgitClmSetlController.getById);
router.post('/', pgitClmSetlController.create);
router.put('/:id', pgitClmSetlController.update);
router.delete('/:id', pgitClmSetlController.deleteItem);

module.exports = router;