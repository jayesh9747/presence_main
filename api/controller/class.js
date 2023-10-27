const { nanoid } = require("nanoid");
const CLASS = require('../models/classes');
const TEACHER = require('../models/teachers');

// create class by teacher 
async function CreatenewClass(req, res) {
    const { Name, Subject, Section } = req.body.body;
    console.log(req.body);
    try {
        if (!Name && !Subject && !Section) return res.status(400).json({ error: "Fill all the required Information" });
        const ShortID = nanoid(8);
        const classBody = await CLASS.create({
            CID: ShortID,
            Name: Name,
            IssuedBy: req.user._id,
            Subject: Subject,
            Section: Section,
        })
        const updateteacher = await TEACHER.findOneAndUpdate(
            {
                _id: req.user._id,
            },
            {
                $push: {
                    CreatedClasses: classBody._id,
                },
            }
        );
        console.log(classBody);
        console.log(updateteacher);
        return res.json({msg:'created new class'});
    } catch (error) {
        res.json({ Error: error });
    }
}


//fetch particluar class by Its CID

async function GetClassByCID(req, res) {
    const CID = req.params.CID;
    try {
        if (!CID) throw new Error('invaild URI');
        const result = await CLASS.findOne({ CID });

        if (!result) throw new Error('invalid Classroom Code');

        return res.json({
            body: result
        });

    } catch (error) {
        res.json({ Error: error });
    }
}


//fetch all classes which created by teacher 

async function Getallclasses(req, res) {
    console.log(req.user);
    const ID = "653b087d56d8daff4cb3398e" || req.user._id; 

    console.log(ID);

    try {
        const classCode = await CLASS.find({
            IssuedBy: ID
        }
        )
        return res.json(
            {class:classCode}
        );

    } catch (error) {
        console.log(error);
        res.json({ Error: error });
    }
}




module.exports = {
    CreatenewClass,
    GetClassByCID,
    Getallclasses
}
