const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, require: true, unique: true },
    lastName: { type: String, require: true, unique: true },
    hpassword: { type: String, require: true },
    email: { type: String, require: true, unique: true },
  },
  { collection: "users" }
);

const User = mongoose.model("userSchema", userSchema);

module.exports = User;
