const mongoose = require('mongoose');

const monthlyAttendanceRecord = new mongoose.Schema({
    month: {
        type: String,
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
            attendenceDetails: [
                {
                    date: {
                        type: mongoose.Schema.Types.Date,
                    },
                    status: {
                        type: String,
                        enum: ['P', 'A'],
                    }
                }

            ]


        }
    ]

}, {
    timestamps: true,
})

const MONTHLYATTENDANCERECORDS = mongoose.model("monthlyAttendanceRecord", monthlyAttendanceRecord);

module.exports = MONTHLYATTENDANCERECORDS;