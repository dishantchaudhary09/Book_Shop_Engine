import mongoose from "mongoose";

const userRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userRegister = mongoose.model("userRegister", userRegisterSchema);
export default userRegister;
