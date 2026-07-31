const express = require('express');
const router = express.Router();
const pgitClmEstController = require('../controllers/pgitClmEstController');

router.get('/', pgitClmEstController.getAll);
router.get('/getById', pgitClmEstController.getById);
router.get('/:id', pgitClmEstController.getById);
router.post('/', pgitClmEstController.create);
router.put('/:id', pgitClmEstController.update);
router.delete('/:id', pgitClmEstController.deleteItem);

module.exports = router;