const { createHmac, randomBytes } = require("crypto");
const mongoose = require('mongoose');
const { createTokenForUser } = require('../services/userAuthentication');
const validator = require('validator');
const studentschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
        default: "STUDENT",
    },
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        unique: true,
        validate(email) {
            if (!validator.isEmail(email)) {
                throw new Error('Email is invalid');
            }
        },
    },
    Password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
    },
    MisNo: {
        type: Number,
        required: true,
        unique: true,
        minlength: 9,
        maxlength: 9,
    },
    AcedamicYear: {
        type: Number,
    },
    Brach: {
        type: String,
        enum: ["CSE", "EC"],
    },
    MAC: {
        type: String,
        required: true,
    },
    EnrolledClasses: [{ type: 'String' }],
    Degree: {
        type: String,
        enum: ["M.Tech", "B.Tech"],
        default: "B.Tech",
    },
    AttendanceHistory: [
        {
            date: Date,
            status: String,
        }
    ],
}, {
    timestamps: true,
})

studentschema.pre('save', function (next) {
    const user = this;
    if (!user.isModified("Password")) return;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt).update(user.Password).digest('hex');
    this.salt = salt;
    this.Password = hashedPassword;
    next();
})

studentschema.static("matchPasswordAndGenerateToken", async function (Email, Password) {
    const user = await this.findOne({ Email });
    if (!user) throw new Error("User is Not Found");
    const salt = user.salt;
    const hashedPassword = user.Password;
    const userProvidedHash = createHmac('sha256', salt).update(Password).digest('hex');
    if (hashedPassword !== userProvidedHash) throw new Error('Email or password are wrong!');
    const token = createTokenForUser(user);
    return token;

})


const STUDENT = mongoose.model("students", studentschema);

module.exports = STUDENT;