const intiDataService = require('../services/intiDataService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getIntimationData = async (req, res) => {
  try {
    const { intmNo } = req.query;
    const data = await intiDataService.getIntimationData(intmNo);
    return successResponse(res, 200, 'Intimation data fetched successfully', data);
  } catch (error) {
    console.error('Intimation data fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch intimation data', error.message || error);
  }
};

exports.getPolicyData = async (req, res) => {
  try {
    const { polNo } = req.query;
    const data = await intiDataService.getPolicyData(polNo);
    return successResponse(res, 200, 'Policy data fetched successfully', data);
  } catch (error) {
    console.error('Policy data fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch policy data', error.message || error);
  }
};
