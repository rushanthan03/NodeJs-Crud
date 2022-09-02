const mongo = require("../../db/mongo");
const dbName = require("../../config/db").mongo.db;
exports.findCourcesDetails = async () => {
  try {
    await mongo.connect();
    const course = await mongo
      .db(dbName)
      .collection("course")
      .find({})
      .toArray();
    return course;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
    mongo.close();
  }
};
