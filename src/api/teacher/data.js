const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.db;
const { ObjectId } = require("mongodb");

exports.findTeachersDetails = async () => {
  try {
    await mongo.connect();
    const teachers = await mongo
      .db(dbName)
      .collection("teachers")
      .find({})
      .toArray();
    return teachers;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    mongo.close();
  }
};

exports.addTeacher = async (teacherPayLoad) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("teachers")
    .insertOne(teacherPayLoad);
  mongo.close();
  return insertedId;
};

exports.deleteTeachersService = async (id) => {
  await mongo.connect();
  const insertedId  = await mongo
    .db(dbName)
    .collection("teachers")
    .deleteOne({ _id: new ObjectId(id) });
  mongo.close();
  return insertedId;
};

exports.editTeachersService = async (id, teacherPayLoad) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("teachers")
    .updateOne({ _id: new ObjectId(id) }, { $set: teacherPayLoad });
  mongo.close();
  return insertedId;
};

exports.addTeacherArrayService = async (teacherPayLoad) => {
  await mongo.connect();
  const { insertedId } = await mongo
    .db(dbName)
    .collection("teachers")
    .insertMany(teacherPayLoad);
  mongo.close();
  return insertedId;
};
