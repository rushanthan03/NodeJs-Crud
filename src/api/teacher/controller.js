const service = require("./service");

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await service.findAllTeachers();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "500 - Internal Server Error" });
  }
};

exports.addTeachers = async (req, res) => {
  try {
    const teachers = await service.addTeacher(req);
    res.status(200).json({ isError: false, data: teachers });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.deleteTeachersIndex = async (req, res) => {
  try {
    const teachers = await service.deleteTeachersController(req);
    res.status(200).json({ isError: false, data: teachers });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.editTeachersIndex = async (req, res) => {
  try {
    const teachers = await service.editTeachersController(req);
    res.status(200).json({ isError: false, data: teachers });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};

exports.addTeacherArrayIndex = async (req, res) => {
  try {
    const teachers = await service.addTeachersArrayController(req);
    res.status(200).json({ isError: false, data: teachers });
  } catch (err) {
    res.status(400).json({ isError: true, message: err.message });
  }
};
