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

exports.deleteTeachersController = async (req, res) => {
  const id = req.params.id;
  if(!id)
  {
    throw new Error("Invalid Body");
  }
  return await data.deleteTeachersService(id);
};

exports.editTeachersController = async (req, res) => {
  if (!req.body.name) {
    throw new Error("Invalid Body");
  }
  const id = req.params.id;
  const teacherJason = {
    name: req.body.name,
    age: req.body.age,
    nickName: req?.body?.nickName,
  };

  return data.editTeachersService(id, teacherJason);
};

exports.addTeachersArrayController = async (req, res) => {
  const teacherArray = req.body.teacher;
  console.log(teacherArray);
  if (!teacherArray) {
    throw new Error("Invalid Body");
  }
  const teachers = [];
  for (let i = 0; i < teacherArray.length; i++) {
    if (teacherArray[i].name && teacherArray[i].age) {
      teachers.push({
        name: teacherArray[i].name,
        age: teacherArray[i].age,
      });
    }
  }
  console.log(teachers);
  return data.addTeacherArrayService(teachers);
};
