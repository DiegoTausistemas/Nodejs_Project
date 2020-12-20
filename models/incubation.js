const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const incubationSchema = new mongoose.Schema(
  {
    project: {
      type: ObjectId,
      ref: "Project"
    },
    budget: {
      type: Number,
      required: true
    },
    observations: {
      type: String,
      maxlength: 150
    },
    date_admission: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Incubation", incubationSchema)