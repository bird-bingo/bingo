const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true },
    password: {type: String, required: true },
    created_at: { type: Date, default: Date.now },
    lifetimeBirds: {type: Array, default: []}
  });
  
  module.exports = mongoose.model("user", userSchema);
  