const { get } = require('../services/intLovService');
const { successResponse, errorResponse } = require('../utils/response');

exports.get = async (req, res) => {
    const { progCode,blockName } = req.query;
    try {
        const data = await get(progCode,blockName);
        return successResponse(res, 200, 'Data fetched successfully', data);
    } catch (error) {
    console.error('Controller error:', error);
    return errorResponse( res, 500, 'Failed to fetch  data',
      error.message || String(error)
    );
  }
};
