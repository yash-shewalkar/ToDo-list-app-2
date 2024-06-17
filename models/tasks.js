import mongoose from "mongoose";

let conn = await mongoose.connect('mongodb://127.0.0.1:27017/todoApp')

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Task = mongoose.model('Task', taskSchema);

