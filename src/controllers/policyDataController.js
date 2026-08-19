const policyDataService = require('../services/policyDataService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getPolicyData = async (req, res) => {
  try {
    const { POLNO } = req.query;
    const data = await policyDataService.getPolicyData(POLNO);
    return successResponse(res, 200, 'Policy data fetched successfully', data);
  } catch (error) {
    console.error('Policy data fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch policy data', error.message || error);
  }
};
