const TEACHER = require('../models/teachers');
const CLASS = require('../models/classes');

// fetch data by Tid as teacher
async function GetInfoByID(req, res) {
    const Tid = req.params.Tid;
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

async function CreatenewSubclass(req,res){
    const CID = req.body.cid;
    const TID = req.body.tid;
    try {
    
        let result = await CLASS.findOneAndUpdate(
            {
                CID: CID,
            },
            {
                $push: {
                    Esubclasses: {
                        date: Date.now(),
                    },
                },
            }
        );
            
        const currentclass =  await CLASS.findOne({
            CID: CID,
        })

        const allstudents = currentclass.JoinedBy;


        

        
    } catch (error) {
        res.json({ Error: error });
    }
}



module.exports = {
    GetInfoByID,
    CreatenewSubclass
}