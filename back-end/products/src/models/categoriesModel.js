const { Schema, model } = require("mongoose");

const categoriesSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
});

const categoriesModel = model("Categories", categoriesSchema, "categories");

module.exports = categoriesModel;
