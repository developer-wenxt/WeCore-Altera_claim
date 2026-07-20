const express = require('express');
const router = express.Router();
const pgitClmEstController = require('../controllers/pgitClmEstController');

router.get('/', pgitClmEstController.getAll);
router.post('/', pgitClmEstController.create);
router.put('/:id', pgitClmEstController.update);
router.delete('/:id', pgitClmEstController.deleteItem);

module.exports = router;