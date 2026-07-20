const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const menuListRoutes = require('./menuListRoute');
const claimRegisterRoutes = require('./claimRegisterRoute');
const pgitClmIntimationRouter = require('./pgitClmIntimationRoute');
const pgitClaimRouter = require('./pgitClaimRoute');
const pgitClmApplPolicyRouter = require('./pgitClmApplPolicyRoute');
const pgitClmEstRouter = require('./pgitClmEstRoute');
const pgitClmSetlRouter = require('./pgitClmSetlRoute');
const claimInt = require('./claimIntimationFieldRoute');
const clmRegField = require('./claimRegisterFieldRoute');
const clmRegDtlField = require('./clmRegRiskDtlsFieldRoute');
const estDtlField = require('./estDtlFieldRoute');
const setField = require('./setFieldRoute');

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/menuList', menuListRoutes);
router.use('/claimRegister', claimRegisterRoutes);
router.use('/pgitClmIntimation', pgitClmIntimationRouter);
router.use('/pgitClaim', pgitClaimRouter);
router.use('/pgitClmApplPolicy', pgitClmApplPolicyRouter);
router.use('/pgitClmEst', pgitClmEstRouter);
router.use('/pgitClmSetl', pgitClmSetlRouter);
router.use('/claimIntField',claimInt);
router.use('/clmRegField',clmRegField);
router.use('/clmRegDtlField',clmRegDtlField)
router.use('/estDtlField',estDtlField);
router.use('/setField',setField);

module.exports = router;
