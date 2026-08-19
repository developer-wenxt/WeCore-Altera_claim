const riskDtlRegService = require('../services/riskDtlRegService');
const { successResponse, errorResponse } = require('../utils/response');

exports.getPolicy = async (req, res) => {
  try {
    const { POLH_NO } = req.query;
    if (!POLH_NO) return errorResponse(res, 400, 'Missing required parameter', 'POLH_NO is required');
    const data = await riskDtlRegService.getPolicy(POLH_NO);
    return successResponse(res, 200, 'Policy fetched successfully', data);
  } catch (error) {
    console.error('Fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch', error.message || error);
  }
};

exports.getSection = async (req, res) => {
  try {
    const { POLH_SYS_ID, POLH_END_NO_IDX } = req.query;
    if (!POLH_SYS_ID || !POLH_END_NO_IDX) return errorResponse(res, 400, 'Missing parameters', 'POLH_SYS_ID, POLH_END_NO_IDX required');
    const data = await riskDtlRegService.getSection(POLH_SYS_ID, POLH_END_NO_IDX);
    return successResponse(res, 200, 'Section fetched successfully', data);
  } catch (error) {
    console.error('Fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch', error.message || error);
  }
};

exports.getRisk = async (req, res) => {
  try {
    const { PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX } = req.query;
    if (!PSECH_SYS_ID || !POLH_SYS_ID || !POLH_END_NO_IDX) return errorResponse(res, 400, 'Missing parameters', 'PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX required');
    const data = await riskDtlRegService.getRisk(PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX);
    return successResponse(res, 200, 'Risk fetched successfully', data);
  } catch (error) {
    console.error('Fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch', error.message || error);
  }
};

exports.getSmi = async (req, res) => {
  try {
    const { PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX } = req.query;
    if (!PRAIH_SYS_ID || !PSECH_SYS_ID || !POLH_SYS_ID || !POLH_END_NO_IDX) return errorResponse(res, 400, 'Missing parameters', 'Required parameters missing');
    const data = await riskDtlRegService.getSmi(PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX);
    return successResponse(res, 200, 'SMI fetched successfully', data);
  } catch (error) {
    console.error('Fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch', error.message || error);
  }
};

exports.getCover = async (req, res) => {
  try {
    const { PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX } = req.query;
    if (!PRAIH_SYS_ID || !PSECH_SYS_ID || !POLH_SYS_ID || !POLH_END_NO_IDX) return errorResponse(res, 400, 'Missing parameters', 'Required parameters missing');
    const data = await riskDtlRegService.getCover(PRAIH_SYS_ID, PSECH_SYS_ID, POLH_SYS_ID, POLH_END_NO_IDX);
    return successResponse(res, 200, 'Cover fetched successfully', data);
  } catch (error) {
    console.error('Fetch error:', error);
    return errorResponse(res, 500, 'Failed to fetch', error.message || error);
  }
};
