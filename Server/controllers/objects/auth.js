const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secretToken, expiredTime, hashSalt } = require('../../utils/config/secretToken');
const statusCode = require('../../utils/config/statusCode');
const QueryStrings = require('../query-string');
const SQLQuery = require('../query-syntaxes');


const getAccountByUsername = (username, callback) => {

    const queryString = QueryStrings.getAccountByUsername(username);

    SQLQuery(queryString, (data) => {
        return callback(data);
    });
}

const signup = async (req, res, next) => {
    try {
        if (req.error) {
            throw req.error;
        }
        const { username, password, roleId } = req.body;
        console.log(password);
        const hashedPw = await bcrypt.hash(password, hashSalt);
        console.log(hashedPw);
        const queryString = QueryStrings.insertAccount({ username: username, password: hashedPw, roleId: roleId });

        SQLQuery(queryString, () => {
            res.status(statusCode.CREATED).json({
                message: "Created"
            });
        });
    }
    catch (err) {
        if (!err.statusCode) {
            err.statusCode = statusCode.INTERNAL_SERVER_ERROR;
        }
        next(err);
    }
};

const generateToken = (loadedAccount) => {
    return jwt.sign(
        {
            username: loadedAccount.username
        },
        secretToken,
        { expiresIn: expiredTime }
    );
}

const verifyEmailAndComparePassword = (res, username, password) => {
    let loadedAccount;
    return new Promise((resolve, reject) => {
        return getAccountByUsername(username, async ([account]) => {
            try {
                if (!account) {
                    const error = new Error('Invalid username!');
                    error.statusCode = statusCode.UNAUTHORIZED;
                    throw error;
                }
                loadedAccount = account;
                const isEqual = await bcrypt.compare(password, account.password);
                if (!isEqual) {
                    const error = new Error('Wrong password!');
                    error.statusCode = statusCode.UNAUTHORIZED;
                    throw error;
                }
                resolve(loadedAccount);
            } catch (err) {
                reject(err);
            }
        })
    })
}

const login = async (req, res, next) => {
    const { username, password } = req.body;
    verifyEmailAndComparePassword(res, username, password)
        .then((loadedAccount) => {
            try {
                const token = generateToken(loadedAccount);

                res.status(statusCode.SUCCESSFUL).json({
                    message: "Authenticated",
                    token: token,
                    loadedAccount: loadedAccount
                });
            }
            catch (err) {
                if (!err.statusCode) {
                    err.statusCode = statusCode.INTERNAL_SERVER_ERROR;
                }
                next(err);
            }
        },
            (err => {
                next(err);
            }));
};

module.exports = { login, signup, getAccountByUsername }