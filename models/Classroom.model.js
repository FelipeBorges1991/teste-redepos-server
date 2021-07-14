const mongoose = require("mongoose");

const ClassroomSchema = mongoose.Schema({
  classroom: { type: String, required: true, trim: true },
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
      minlength: 1,
    },
  ],
});

module.exports = mongoose.model("Classroom", ClassroomSchema);
