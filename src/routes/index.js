const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const orderRoutes = require('./OrderRoutes');
const menuListRoutes = require('./menuListRoute');
const menuListClaimRoutes = require('./menuListClaimRoute');
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
const dropDown = require('./dropdownRoute');
const intLov = require('./intLovRoute');
const policyData = require('./policyDataRoute');
const intiData = require('./intiDataRoute');
const riskDtlReg = require('./riskDtlRegRoute');
const FCandLCvaluesRouter = require('./FCandLCvaluesRoute');
const settlementCreationRouter = require('./settlementCreationRoute');
const settlementApprovalRouter = require('./settlementApprovalRoute');
const polAcntEntryRoute=require('./polAcntEntryRoute.js');


router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/menuList', menuListRoutes);
router.use('/menuListClaim', menuListClaimRoutes);
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
router.use('/dropDown',dropDown);
router.use('/lovField',intLov);
router.use('/policyData',policyData);
router.use('/intiData', intiData);
router.use('/riskDtlReg', riskDtlReg);
router.use('/FCandLCvalues', FCandLCvaluesRouter);
router.use('/settlementCreation', settlementCreationRouter);
router.use('/settlementApproval', settlementApprovalRouter);
router.use('/polAcntEntry',polAcntEntryRoute);


module.exports = router;
