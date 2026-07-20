const { get } = require('../services/claimIntimationFieldService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
  try {
    // If you need query params later, access via req.query
    const data = await get();

    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse( res, 500, 'Failed to fetch  data',
      error.message || String(error)
    );
  }
};