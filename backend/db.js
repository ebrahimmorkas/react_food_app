const mongoose = require("mongoose");

const mongodb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/gofood");
  // data =  mongoose.connection.db.collection("items");
  // const results = await data.find({}).toArray();
  // console.log(results)
};

module.exports = mongodb;
