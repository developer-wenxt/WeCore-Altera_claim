const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await userService.getAllUsers();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
