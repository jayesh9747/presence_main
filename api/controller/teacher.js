const TEACHER = require('../models/teachers');
const CLASS = require('../models/classes');
const Student = require("../models/students")

// fetch data by Tid as teacher
async function GetInfoByID(req, res) {
    const Tid = "112215171" || req.params.Tid;
    try {
        if (!Tid) throw new Error(`invalid parameter`);

        const teacher = await TEACHER.findOne({
            Tid: Tid,
        })

        if (!teacher) throw new Error('invalid teacher Id');

        return res.json({
            teacher: teacher
        })
    } catch (error) {
        res.json({ Error: error });
    }
}

const updateStudentAttendance = async (studentIds, CID, date) => {

    const isNull = false;
    studentIds.forEach(async (studentId) => {

        // console.log(studentId);
        try {

            const student = await Student.findById(studentId);
            
            if (!student) {
                throw new Error(`Student not found for ID: ${studentId}`);
            }

            const attand = await Student.findByIdAndUpdate(
                studentId
            , {
                $push: {
                    AttendanceHistory: {
                        date: date,
                        status: 'A',
                        classid: CID,
                    },
                }
            })
            
            if(attand){
                isNull=true;
            }

        } catch (error) {
            console.log(error);
        }

    })

    if(isNull){
        return { status: 'fulfilled' };
    }else{
        return {Erroe : "try again!"}
    }
    
    

    // const updatePromises = studentIds.map(async (studentId) => {
    //     try {
    //         // Find the student by ID
    //         const student = await Student.findById(studentId);

    //         if (!student) {
    //             throw new Error(`Student not found for ID: ${studentId}`);
    //         }

    //         // Check if "attendanceHistory" field exists; if not, create it
    //         if (!student.AttendanceHistory) {
    //             student.AttendanceHistory = [];
    //         }

    //         // Push the attendance object into the "attendanceHistory" array
    //         student.AttendanceHistory.push(attendanceObject);

    //         // Save the updated student document
    //         await student.save();

    //         return { status: 'fulfilled', value: student };
    //     } catch (error) {
    //         console.log(error);
    //         return { status: 'rejected', reason: error.message };
    // }
    // });

    // const results = await Promise.allSettled(updatePromises);
    // results.forEach((result) => {
    //     if (result.status === 'fulfilled') {
    //         console.log(`Successfully updated student: ${result.value.name}`);
    //     } else {
    //         console.error(`Failed to update student: ${result.reason}`);
    //     }
    // });

};



// creating the new subclass in class
// method: post
// @routes:teacher/class/sb
async function CreatenewSubclass(req, res) {
    const CID = req.body.cid;
    const date = req.body.date;
    try {

        let result = await CLASS.findOneAndUpdate(
            {
                CID: CID,
            },
            {
                $push: {
                    subclasses: {
                        date: date,
                    },
                },
            }
        );

        const currentclass = await CLASS.findOne({
            CID: CID,
        })

        const currentClassId = currentclass._id;
        
        const allstudents = currentclass.JoinedBy;

        // console.log(allstudents);

        const resp = await updateStudentAttendance(allstudents,currentClassId,date);

        return res.json({
            msg: resp,
        })

    } catch (error) {
        console.log(error);
        res.json({ Error: error });
    }
}



module.exports = {
    GetInfoByID,
    CreatenewSubclass
}