const { model, Schema } = require("mongoose");

const productsSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  category_id: Number,
  image: String,
  qty: Number,
  id: Number,
});

const productsModel = model("Products", productsSchema, "products");

module.exports = productsModel;
