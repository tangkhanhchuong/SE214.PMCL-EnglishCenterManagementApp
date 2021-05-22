const jwt = require("jsonwebtoken");

const { HttpStatusCode } = require("../../../Http");
const { throwError } = require("../../../Errors/error_handler");

const generateAuthToken = (payload, accessToken = true) => {
    const tokenSecret = accessToken ? "access_token_secret" : "refresh_token_secret";
    const signOption = accessToken ? { expiresIn: '2m' } : {};

    const token = jwt.sign({ payload: payload }, tokenSecret, signOption);

    return token;
};

const verifyToken = (token, isAccessToken = true) => {
    try {
        const tokenSecret = isAccessToken ? "access_token_secret" : "refresh_token_secret";
        return jwt.verify(token, tokenSecret);
    }
    catch (err) {
        throwError(HttpStatusCode.UNAUTHORIZED, "Invalid token !");
    }
}

const authenticateToken = (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    const accessToken = authorizationHeader && authorizationHeader.split(" ")[1];

    if (!accessToken)
        throwError(HttpStatusCode.UNAUTHORIZED, "You are not authenticated !");

    try {
        const data = verifyToken(accessToken);
        req.user = data.payload;
        next();
    }
    catch (err) {
        next(err);
    }
};

module.exports = {
    verifyToken,
    authenticateToken,
    generateAuthToken
};
