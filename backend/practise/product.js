const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  brand: String,
  category: String,
  image: Buffer,
});

module.exports = mongoose.model("products", ProductSchema);
