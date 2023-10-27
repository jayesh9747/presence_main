const { checkUserToken } = require("../services/userAuthentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {

        console.log(req.cookies);
        const tokencookievalue = req.cookies[cookieName];
    
        if (!tokencookievalue) {
            // console.log(tokencookievalue);
            return next();
        }

        try {
            const userPayload = checkUserToken(tokencookievalue);

            console.log(userPayload,"i am payload");

            req.user = userPayload;

        } catch (error) {
            console.log(error,"i am error")
         }
       next();
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