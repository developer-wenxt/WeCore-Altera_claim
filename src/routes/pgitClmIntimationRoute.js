const express = require('express');
const router = express.Router();
const pgitClmIntimationController = require('../controllers/pgitClmIntimationController');

router.get('/', pgitClmIntimationController.getAll);
router.get('/:id', pgitClmIntimationController.getById);
router.post('/', pgitClmIntimationController.create);
router.put('/:id', pgitClmIntimationController.update);
router.delete('/:id', pgitClmIntimationController.deleteItem);

module.exports = router;