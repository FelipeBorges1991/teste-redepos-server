const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  tagline: { type: String, required: true, trim: true },
  first_brewed: { type: String, required: true, maxlength: 7, minlength: 7 },
  description: { type: String, maxlength: 500 },
});

module.exports = mongoose.model("Product", ProductSchema);