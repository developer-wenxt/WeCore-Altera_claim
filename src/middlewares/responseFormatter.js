module.exports = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (payload) {
    if (payload && payload.error != null) {
      // Error payloads already formatted by your error handler
      return originalJson.call(this, payload);
    }

    const responseCode = res.statusCode || 200;
    const statusType = responseCode >= 200 && responseCode < 300 ? 'success' : 'error';
    const wrapped = {
      status: statusType,
      responseCode,
      data: payload
    };
    return originalJson.call(this, wrapped);
  };

  next();
};
