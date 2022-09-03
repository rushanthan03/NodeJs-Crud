const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.getAllTeachers);
router.post("/addTeacher", controller.addTeachers);
router.delete("/:id", controller.deleteTeachersIndex);
router.patch("/:id", controller.editTeachersIndex);
router.post("/addTeachers", controller.addTeacherArrayIndex);

module.exports = router;
