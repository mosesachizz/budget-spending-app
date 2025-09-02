function authenticateJWT(req, res, next) {
  // JWT logic here
  next();
}
module.exports = { authenticateJWT };
