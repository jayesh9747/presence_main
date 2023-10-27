const STUDENT = require('../models/students');
const TEACHER = require('../models/teachers');
const validator = require('validator');

// create new user 
async function CreateUser(req, res) {
    const { Name, Email, MAC, Password, MisNo, Role, TID } = req.body;

    try {
        if (!Role) throw new Error(`Fill all the credential`);

        if (Role === 'STUDENT') {

            // console.log(validator.isEmail(Email,{domain_specific_validation:'iiitp.ac.in',}));

            if (!Email || !validator.isEmail(Email)) throw new Error('Invalid Email');

            const user = await STUDENT.findOne({
                Email
            });


            //redirect user to signin page 
            if (user) return res.json({
                msg: 'you are already sigup'
            });

            const User = await STUDENT.create({
                Name,
                Email,
                Password,
                MisNo,
                MAC,
                Role
            });

            //on completing the user signup
            return res.json({
                msg: "user is created",
                user: User
            });
        }

        if (Role === 'TEACHER') {

            if (!TID && !Name && !Email && !Password) throw new Error(`Fill all the credential`);

            const user = await TEACHER.findOne({
                Email
            })

            //redirect user to signin page 
            if (user) return res.json({
                msg: 'you are already sigup'
            });

            const User = await TEACHER.create({
                Name,
                Email,
                Password,
                Tid: TID,
                Role
            });

            //on completing the user signup
            return res.json({
                msg: `${Role} was created`,
                user: User
            });
        }


    } catch (error) {
        console.log(error);
        return res.json({ Error: error.message });
    }

}

//login user to the app
async function SigninUser(req, res) {
    const { Email, Password, Role } = req.body.data;

    console.log(Email,Password,Role);

    try {

        if (!Email && !Password && !Role) throw new Error(`Fill All the credential`);

        if (Role === 'TEACHER') {
            const token = await TEACHER.matchPasswordAndGenerateToken(Email, Password);
            if (!token) throw new Error(`Invalid Credantial`);
            console.log(' i am teavher field')
            console.log(token,"i am token")
            return res.cookie("token", token).json({
                msg: 'susscessful login'
            });
        }

        if (Role === 'STUDENT') {
            const token = await STUDENT.matchPasswordAndGenerateToken(Email, Password);
            if (!token) throw new Error(`Invalid Credantial`);
            console.log(token,"i am token")

        res.cookie("token", token);
        return res.json({
            msg: 'susscessful login'
        })

        }

    } catch (error) {
        console.log(error,"i am error")
        return res.json({ Error: "Hello my name is error"});
    }
}


module.exports = {
    CreateUser,
    SigninUser
}