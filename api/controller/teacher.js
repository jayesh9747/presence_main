const TEACHER = require('../models/teachers');

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



module.exports = {
    GetInfoByID,
}