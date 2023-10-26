const { checkUserToken } = require("../services/userAuthentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokencookievalue = req.cookies[cookieName];
        req.user = null;
        if (!tokencookievalue) {
            return next();
        }
        try {
            const userPayload = checkUserToken(tokencookievalue);
            req.user = userPayload;
        } catch (error) { }
        return next();
    }
}

function restrictTo(roles) {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/signin');
        if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
        return next();
    }
}



module.exports = {
    restrictTo,
    checkForAuthenticationCookie,
}