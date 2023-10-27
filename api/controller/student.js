const STUDENT = require("../models/students");
const CLASS = require("../models/classes");

// fetch data by id(mis) as student
const GetInfoByID = async (req, res) => {
    try {
        const ID = req.user._id;
        const student = await STUDENT.findById(ID);
        res.status(200).json(student);
    } catch (error) {
        res.json({ Error: error });
    }
};

//Join the classroom by its id
async function JoinClassroom(req, res) {
    const { CID } = req.body;
    const ID = req.user._id;
    try {
        if (!CID && !ID) throw new Error(`Invalid Parameter`);

        const user = await STUDENT.findById(ID);
        const enrolledClasses = user.EnrolledClasses;


        isenrolled = enrolledClasses.includes(CID)? true : false;

        if (isenrolled) throw new Error(`YOu are already in this classroom`);

        let result = await STUDENT.findOneAndUpdate(
            {
                _id: ID,
            },
            {
                $push: {
                    EnrolledClasses: CID,
                },
            }
        );

        let result2 = await CLASS.findOneAndUpdate(
            {
                CID: CID,
            },
            {
                $push: {
                    JoinedBy: ID,
                },
            }
        );

        if (result && result2) {
            res.json({
                msg: `You are succesfully joined class ${CID}`,
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            Error: error.message,
        });
    }
}

//retrive all classes which student enrolled
async function GetEnrolledClassList(req, res) {
    const ID = req.user._id;
    try {
        if (!ID) throw new Error(`Invalid User`);
        const Student = await STUDENT.findOne({
            _id: ID,
        });

        const EnrolledClasses = Student["EnrolledClasses"];

        const resp = await CLASS.find({
            CID: { $in: EnrolledClasses },
        });

        if (!resp) throw new Error(`No classes is enrolled by User`);

        return res.json({
            classes: resp,
        });
    } catch (error) {
        return res.json({
            Error: error.massage,
        });
    }
}

module.exports = {
    GetInfoByID,
    JoinClassroom,
    GetEnrolledClassList,
};
