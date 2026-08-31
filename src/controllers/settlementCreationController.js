const settlementCreationService = require('../services/settlementCreationService');
const { successResponse } = require('../utils/response');

exports.createSettlement = async (req, res, next) => {
  try {
    const result = await settlementCreationService.createSettlement(req.query);
    return successResponse(res, 201, "Settlement Created Successfully", result);
  } catch (err) {
    next(err);
  }
};
