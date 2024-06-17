import express from "express";
import mongoose from "mongoose";
import { Task } from "../models/tasks.js";

const router = express.Router();
let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
router.get('/', async (req, res) => {
  try {
    const task = new Task({
      title: "ML project",
      dueDate: new Date('2024-06-30'),
      user: "6670169fc96b4662dd33999c" // Replace with actual user ID
    })
   
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;