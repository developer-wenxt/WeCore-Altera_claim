const orderService = require('../services/orderService');

exports.getOrder = async (req, res, next) => {
  try {
    const result = await orderService.getOrder();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
exports.createOrder = async (req, res, next) => {
  try {
    const result = await orderService.createOrder(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
exports.updateOrder = async (req, res, next) => {
  try {
    const result = await orderService.updateOrder(req.params.id, req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const result = await orderService.deleteOrder(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
  
