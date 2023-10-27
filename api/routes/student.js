const express = require('express');
const route = express.Router();
const {
    GetInfoByID,
    JoinClassroom,
    GetEnrolledClassList
} = require('../controller/student');

const {
    Markattendance
} = require('../controller/attendence');


// get student profiledata by id
route.get('/', GetInfoByID);


//joining the classroom by its id
route.post('/jc', JoinClassroom);

//get all classroom list which we enrolled 
route.get('/class/cl', GetEnrolledClassList);


//mark attendence 
route.get('/class/mkatt',Markattendance);



module.exports = route;