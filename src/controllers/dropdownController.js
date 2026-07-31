const dropdownService = require('../services/dropdownService');
const { successResponse, errorResponse } = require('../utils/response'); 

exports.getDropdowns = async (req, res) => {
  try {
    const data = await dropdownService.getDropdownData(req.query);
    return successResponse(res, 200, 'Data fetched successfully', data);
  } catch (error) {
    console.error('Dropdown fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch dropdown data', error.message || error);
  }
};
