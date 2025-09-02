function authenticateJWT(req, res, next) {
  // For now, allow all requests.
  // You can add JWT verification logic here later.
  next();
}

module.exports = { authenticateJWT };
