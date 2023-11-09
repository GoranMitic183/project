const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingProgram = new Schema(
  {
    trainingTitle: { type: String, require: true, unique: true },
    description: { type: String, require: true, unique: true },
    price: { type: Number, require: true },
    // program: { type: String, require: true, unique: true },
  },
  { collection: "trainingProgram" }
);

const Program = mongoose.model("trainingProgram", trainingProgram);

module.exports = Program;
