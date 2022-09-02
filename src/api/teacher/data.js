const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.db;

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
