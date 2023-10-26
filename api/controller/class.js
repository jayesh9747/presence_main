const { nanoid } = require("nanoid");
const CLASS = require('../models/classes');

// create class by teacher 
async function CreatenewClass(req, res) {
    const { Name, Subject, Section } = req.body;
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
        return res.send(classBody)
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
    const ID = req.user._id;
    // console.log(ID);
    try {
        const classCode = await CLASS.find({
            IssuedBy: ID
        }
        )
        // console.log(classCode);
        return res.send(
            classCode
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
