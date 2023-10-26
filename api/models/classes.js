const mongoose = require('mongoose');

const Classesschema = new mongoose.Schema({
    CID: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    IssuedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teachers",
        required: true,
    },
    JoinedBy: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "students",
    },
    AcedamicYear: {
        type: String,
    },
    Section: {
        type: String,
        require: true
    },
    Subject: {
        type: String,
        require: true,
    },
    Branch: {
        type: String,
        enum: ["CSE", "EC"],
        default: "CSE",
    },
    MISRange: {
        type: Number,
    }
}, {
    timestamps: true,
})

const CLASS = mongoose.model("classes", Classesschema);

module.exports = CLASS;