function authenticateJWT(req, res, next) {
  // For now, just allow all requests.
  // You can add your real JWT logic later.
  next();
}

module.exports = { authenticateJWT };
