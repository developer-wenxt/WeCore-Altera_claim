const express = require('express');
const router = express.Router();
const pgitClmApplPolicyController = require('../controllers/pgitClmApplPolicyController');

router.get('/', pgitClmApplPolicyController.getAll);
router.post('/', pgitClmApplPolicyController.create);
router.put('/:id', pgitClmApplPolicyController.update);
router.delete('/:id', pgitClmApplPolicyController.deleteItem);

module.exports = router;