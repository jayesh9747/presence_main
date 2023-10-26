// JWT have three parts header, payload and secret

const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRECT;

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        name: user.Name,
        email: user.Email,
        role: user.Role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function checkUserToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    checkUserToken,
    createTokenForUser
}