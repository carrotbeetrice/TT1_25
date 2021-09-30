const mongoose = require("mongoose");
const { conString, dbName } = require("../config").db;

const connectToDB = () => {
  mongoose.connect(conString, {
    dbName: "tektrek",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToDB;
