const express = require('express');
const route = express.Router();
const {
    CreateUser,
    SigninUser
} = require('../controller/user');



//create new user 
//route@'/signup'
route.post('/signup', CreateUser);

//signin user
//route@'/signin'
route.post('/signin', SigninUser);


module.exports = route;