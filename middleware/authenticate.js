function authenticateJWT(req, res, next) {
  // Example: allow all requests (replace with your JWT logic)
  next();
}

module.exports = { authenticateJWT };
