const CLASS = require('../models/attendanceRecords');
const Student = require("../models/students")
const AttendanceRecord = require("../models/students")
const wifi = require('node-wifi');
const find = require('local-devices');

async function CreateAttendenceReport(req, res) {
    const date = Date.now();
    const TID = req.body.tid;
    const CID = req.body.cid;

    try {
        const currentclass = await CLASS.findOne({
            CID: CID,
        })

        const allstudents = currentclass.JoinedBy;

    } catch (error) {

    }

}


// mark attendece 

async function Markattendance(req, res) {

    const ssid = req.body.ssid;
    const Wifipassword = req.body.Wifipassword;
    const ID = req.user._id;
    const date = Date.now();
    try {
        wifi.init({ iface: null });

        const connection = await wifi.connect({ ssid: ssid, password: Wifipassword }, () => {
            console.log('Connected');
            return true;
        });

        console.log(connection);

        const attendarray = await Student.findById(ID);
        console.log(attendarray);
        const array = attendarray.AttendanceHistory;

        const ispresence = array.find((obj)=>{
            obj.date === date
        });

        if (ispresence) {
            return res.json({
                msg: "Your attandence has been marked"
            })
        } else {
            return res.json({
                msg: "Opps! try once again"
            })
        }

        setTimeout(() => {
            // not available on all os for now
            wifi.disconnect(error => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Disconnected');
                }
            });
        }, 5000);

    } catch (error) {
        console.log(error);
        res.json({
            Error: error,
        });
    }
}


const MarkattendeceofStudent = async (macaddress,CID,studentarray) => {

    // const updatePromises = macaddress.map(async (mac) => {

    //     try {

    //         const student = await Student.findOne({
    //             MAC: mac,
    //         });

    //         if (!student) {
    //             throw new Error(`Student not found !`);
    //         }

    //         // Check if an entry with the given date already exists in the attendance history
    //         const existingEntryIndex = student.AttendanceHistory.findIndex(entry => entry.date.toDateString() === date.toDateString());

    //         if (existingEntryIndex !== -1) {
    //             // Update the status if the entry already exists
    //             student.AttendanceHistory[existingEntryIndex].status = 'P';
    //         } else {
    //             // If the entry doesn't exist, create a new one
    //             const date = Date.now();
    //             stastus = "P";
    //             student.AttendanceHistory.push({ date, stastus });
    //         }

    //         await student.save();
    //         console.log('Attendance updated successfully');
    //     } catch (error) {
    //         console.error('Error updating attendance:', error);
    //     }
    // })


    studentarray.forEach(async(studentID)=>{
        const student = await Student.findById(studentID);
        const macadd = student.MAC;

        const isinside = macaddress.includes(macadd)?true:false;

        if(isinside){
            await Student.findByIdAndUpdate({
                studentID
            },{
                AttendanceHistory:{
                    status: 'P',
                }
            })
        }
    })

    return res.json({
        msg: "filed was updated",
    })

}


async function Takeattendance(req, res) {
    const CID = req.body.cid;
    try {
        const globaldDevices = [];

        const device = await find().then(devices => {
            devices.forEach(element => {
                globaldDevices.push(element.mac);
            })
        });

        const cls = await CLASS.findOne({
            CID:CID
        })
        const studentarray = cls.JoinedBy;

        MarkattendeceofStudent(globaldDevices,CID,studentarray);

    } catch (error) {
        console.error('Error updating attendance:', error);
    }

}


//showing the attendence report

async function ShowAttendenceReport(req,res) {
    const date = req.body.date;
    const TID =  req.body.TID;
    const CID = req.body.CID;
    try {

        if(!date || !TID || !CID) throw new Error(`All feilds are required`);

        const report = await AttendanceRecord.find({
            date:date,
            teacherId:TID,
            ClassId:CID
        });

        res.json({
            Report:report
        })

    } catch (error) {
        res.send({
            Error : error.message,
        })
    }
}




module.exports = {
    CreateAttendenceReport,
    Markattendance,
    Takeattendance,
    ShowAttendenceReport
}
