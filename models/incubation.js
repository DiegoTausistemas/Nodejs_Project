const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const incubationSchema = new mongoose.Schema(
  {
    project: {
      type: ObjectId,
      ref: "Project"
    },
    application: {
      type: ObjectId,
      ref: "Application"
    },
    observations: {
      type: String,
      maxlength: 150
    },
    date_admission: {
      type: Date
    },
    course: {
      budget: {
        type: Number,
        required: true
      },
      stage: {
        type: String,
        default: "Checkin",
        enum: ["Checkin", "Escalamiento", "Piloto", "Prototipo"]
      }
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Incubation", incubationSchema)