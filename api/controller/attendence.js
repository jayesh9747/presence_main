const CLASS = require('../models/attendanceRecords');
const Student = require("../models/students")
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

        const attendarray = await Student.findById(ID).AttendanceHistory;

        const ispresence = attendarray.find(obj.date === date);

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
        res.json({
            Error: error,
        });
    }
}


const MarkattendeceofStudent = async (macaddress) => {

    const updatePromises = macaddress.map(async (mac) => {

        try {

            const student = await Student.findOne({
                MAC: mac,
            });

            if (!student) {
                throw new Error(`Student not found !`);
            }

            // Check if an entry with the given date already exists in the attendance history
            const existingEntryIndex = student.AttendanceHistory.findIndex(entry => entry.date.toDateString() === date.toDateString());

            if (existingEntryIndex !== -1) {
                // Update the status if the entry already exists
                student.AttendanceHistory[existingEntryIndex].status = 'P';
            } else {
                // If the entry doesn't exist, create a new one
                const date = Date.now();
                stastus = "P";
                student.AttendanceHistory.push({ date, stastus });
            }

            await student.save();
            console.log('Attendance updated successfully');
        } catch (error) {
            console.error('Error updating attendance:', error);
        }
    })

}


async function Takeattendance(req, res) {
    try {
        const globaldDevices = [];
        const device = await find().then(devices => {
            devices.forEach(element => {
                globaldDevices.push(element.mac);
            })
        });

        MarkattendeceofStudent(globaldDevices);

    } catch (error) {
        console.error('Error updating attendance:', error);
    }

}




module.exports = {
    CreateAttendenceReport,
    Markattendance,
    Takeattendance
}
