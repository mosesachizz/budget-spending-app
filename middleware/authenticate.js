function authenticateJWT(req, res, next) {
  // For now, allow all requests.
  next();
}

module.exports = authenticateJWT;
