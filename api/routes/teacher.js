const express = require('express');
const route = express.Router();

const {
    GetClassByCID,
    Getallclasses,
    CreatenewClass
} = require('../controller/class');

const {
    GetInfoByID,
} = require('../controller/teacher');


// get teacher profiledata by id
route.get('/:Tid', GetInfoByID);

//get all classes which was created by teacherUID 
route.get('/class/cl', Getallclasses);

//get single class whitch uniqueID
route.get('/class/:CID', GetClassByCID);

//create new classroom 
route.post('/class/nc', CreatenewClass);






module.exports = route;