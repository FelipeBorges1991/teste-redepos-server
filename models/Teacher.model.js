const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  classroom: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
      required: true,
      maxlength: 1,
      minlength: 0,
    },
  ],
});

module.exports = mongoose.model("Teacher", TeacherSchema);
