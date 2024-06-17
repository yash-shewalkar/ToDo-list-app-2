import mongoose from "mongoose";

let conn = await mongoose.connect('mongodb://127.0.0.1:27017/todoApp')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

export const User = mongoose.model('User', userSchema);

