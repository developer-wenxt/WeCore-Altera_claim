const FCandLCvaluesService = require('../services/FCandLCvaluesService');
const { successResponse } = require('../utils/response');

exports.getFCandLCvalues = async (req, res, next) => {
  try {
    const data = req.query;
    const result = await FCandLCvaluesService.getFCandLCvalues(data);
    return successResponse(res, 200, "FC and LC values fetched successfully", result);
  } catch (err) {
    next(err);
  }
};
