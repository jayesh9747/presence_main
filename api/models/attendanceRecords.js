const mongoose = require('mongoose');

const AttendanceRecord = new mongoose.Schema({
    date: {
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    ClassId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    studentsAttendance: [
        {
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
            },
            status: {
                type: String,
                enum: ['P', 'A'],
            }
        }
    ]

}, {
    timestamps: true,
})

const ATTENDANCERECORDS = mongoose.model("AttendanceRecord", AttendanceRecord);

module.exports = ATTENDANCERECORDS;