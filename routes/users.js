import express from "express";
import mongoose from "mongoose";
import { User } from "../models/users.js";

const router = express.Router();
let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todoApp");

router.get('/', async (req, res) => {
  try {
    const newUser = new User({
        username: "yashu",
        password: 'yashuhs',
        email: "yassh@gmail.com"
    })
   
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;