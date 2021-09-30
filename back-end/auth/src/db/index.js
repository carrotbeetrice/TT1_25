const mongoose = require("mongoose");
const { db_string } = require("../config");

// const conn = mongoose.createConnection(db_string);

const connectToDB = () => {
  mongoose.connect(db_string, {
    dbName: "tektrek",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

module.exports = connectToDB;
