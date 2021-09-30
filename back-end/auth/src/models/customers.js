const { Schema, model } = require("mongoose");
const conn = require("../db");

const customersSchema = new Schema({
  id: Number,
  username: String,
  password: String,
  first_name: String,
  last_name: String,
  postal_code: String,
  gender: String,
  created_at: Date,
});

const customers = model("Customers", customersSchema, "customers");

module.exports = customers;
