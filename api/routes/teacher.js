const express = require('express');
const route = express.Router();

const {
    GetClassByCID,
    Getallclasses,
    CreatenewClass
} = require('../controller/class');

const {
    GetInfoByID,
    CreatenewSubclass
} = require('../controller/teacher');

const {
    Takeattendance
} = require('../controller/attendence')



// get teacher profiledata by id
route.get('/:Tid', GetInfoByID);

//get all classes which was created by teacherUID 
route.get('/class/cl', Getallclasses);

//get single class whitch uniqueID
route.get('/class/:CID', GetClassByCID);

//create new classroom 
route.post('/class/nc', CreatenewClass);

//take attendance 
route.post('/class/tkatt',Takeattendance);

//create new subclasses
route.post('/class/sb',CreatenewSubclass);


module.exports = route;