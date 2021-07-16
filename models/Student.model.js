const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  fullname: { type: String, required: true, trim: true },
  teacher: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      maxlength: 1,
      minlength: 0,
    },
  ],
});

module.exports = mongoose.model("Student", StudentSchema);
