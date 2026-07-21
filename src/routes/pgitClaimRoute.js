const express = require('express');
const router = express.Router();
const pgitClaimController = require('../controllers/pgitClaimController');

router.get('/', pgitClaimController.getAll);
router.get('/:id', pgitClaimController.getById);
router.post('/', pgitClaimController.create);
router.put('/:id', pgitClaimController.update);
router.delete('/:id', pgitClaimController.deleteItem);

module.exports = router;