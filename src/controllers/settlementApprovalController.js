const settlementApprovalService = require('../services/settlementApprovalService');
const { successResponse } = require('../utils/response');

exports.approveSettlement = async (req, res, next) => {
  try {
    const result = await settlementApprovalService.approveSettlement(req.body);
    return successResponse(res, 200, "Settlement Approved Successfully", result);
  } catch (err) {
    next(err);
  }
};
