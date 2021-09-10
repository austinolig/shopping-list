const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  important: Boolean,
});

module.exports = mongoose.model("Items", itemsSchema);
