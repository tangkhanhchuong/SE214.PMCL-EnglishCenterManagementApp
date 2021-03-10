const jwt = require('jsonwebtoken');

const { secretToken } = require('../config/secretToken')
const statusCode = require('../config/statusCode');

const splitTokenFromHeader = (authHeader) => {
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = statusCode.UNAUTHORIZED;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  return token;
}

const verifyToken = (token) => {
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secretToken);
  }
  catch (err) {
    err.statusCode = statusCode.INTERNAL_SERVER_ERROR;
    throw err;
  }

  if (!decodedToken) {
    const error = new Error('Not authenticated.');
    error.statusCode = statusCode.UNAUTHORIZED;
    throw error;
  }
  return decodedToken;
}

const authToken = (req, res, next) => {
  const authHeader = req.get('Authorization');
  const token = splitTokenFromHeader(authHeader);
  const decodedToken = verifyToken(token);
  req.userId = decodedToken.userId;
  next();
};

module.exports = authToken;
