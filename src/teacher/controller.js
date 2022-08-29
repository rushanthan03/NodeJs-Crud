const service = require('./service');

exports.getAllTeachers = (req, res)=> {
    try{
        const teachers = service.findAllTeachers();
        res.status(200).json(teachers);
    }
    catch(error)
    {
         res.status(500).json({message:'500 - Internal Server Error'});
    }
}