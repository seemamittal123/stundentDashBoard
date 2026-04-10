import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: String,
  },
  stream: {
    type: String,
  },
  address: {
    type: String,
  },
  college: {
    type: String,
  },
  admissionDate: {
    type: Date,
  },
  gender: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  course: {
    type: String,
  },
});

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
