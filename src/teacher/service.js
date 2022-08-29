
const data = require('./data');

exports.findAllTeachers = (req, res)=> {
    try{
        const teachers = data.findTeachersDetails();
        return teachers;
    }
    catch(error)
    {
         throw new Error(error);
    }
}
