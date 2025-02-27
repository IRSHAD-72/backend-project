import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailid: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date },
  dateOfJoining: { type: Date },
});

// Check if model is already defined before creating it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
