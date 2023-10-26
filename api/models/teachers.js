const { createHmac, randomBytes } = require("crypto");
const mongoose = require('mongoose');
const { createTokenForUser } = require('../services/userAuthentication');


const teacherschema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Tid: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    Conatact: {
        type: Number,
    },
    CreatedClasses: {
        type: [mongoose.Schema.Types.ObjectId],
    },
    Role: {
        type: String,
        default: "TEACHER",
        required: true
    }
}, {
    timestamps: true,
})


teacherschema.pre('save', function (next) {
    const user = this;
    if (!user.isModified("Password")) return;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt).update(user.Password).digest('hex');
    this.salt = salt;
    this.Password = hashedPassword;
    next();
})

teacherschema.static("matchPasswordAndGenerateToken", async function (Email, Password) {
    const user = await this.findOne({ Email });
    if (!user) throw new Error("User is Not Found");
    const salt = user.salt;
    const hashedPassword = user.Password;
    const userProvidedHash = createHmac('sha256', salt).update(Password).digest('hex');
    if (hashedPassword !== userProvidedHash) throw new Error('Email or password are wrong!');
    const token = createTokenForUser(user);
    return token;
})


const TEACHER = mongoose.model("teachers", teacherschema);

module.exports = TEACHER;