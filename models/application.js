const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const applicationSchema = new mongoose.Schema(
  {
    project: {
      type: ObjectId,
      ref: "Project"
    },
    condition: {
      type: String,
      default: "En Proceso",
      enum: ["Aceptado", "Rechazado"]
    },
    date_application: {
      date_admission: {
        type: Date,
        require: true,
      },
      date_answer: {
        type: Date
      }
    }
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("Application", applicationSchema)