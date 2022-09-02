const { head } = require("../student");
const data = require("./data");

exports.findAllTeachers = async (req, res) => {
  try {
    const teachers = await data.findTeachersDetails();
    return teachers;
  } catch (error) {
    throw new Error(error);
  }
};

exports.addTeacher = async (req, res) => {
    // const sam = {
    //     std:{
    //         name:"d",
    //         courses:[
    //             {name:"32", fee:"3232"},
    //             {name:"432", fee:"3232"},
    //         ],
    //         age:"232"
    //     }
    // }
  if (req.body.name && req.body.age) {
    const teacherJason = {
      name: req.body.name,
      age: req.body.age,
      nickName: req?.body?.nickName,
    };
    // const {name,age, std:{courses}} = sam
    // return name;
    return data.addTeacher(teacherJason);
  } else {
    throw new Error("Invalid Body");
  }
};
