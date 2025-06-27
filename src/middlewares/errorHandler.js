module.exports = (err, req, res, next) => {
  console.error(err);
  const code = err.statusCode || 500;
  res.status(code).json({
    status: 'error',
    responseCode: code,
    message: err.message || 'Internal Server Error',
    error: err.details || null
  });
};
