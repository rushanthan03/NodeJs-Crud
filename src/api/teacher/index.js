const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/',controller.getAllTeachers);
router.post('/addTeacher',controller.addTeachers);

module.exports =router;