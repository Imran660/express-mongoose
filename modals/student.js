const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema);
