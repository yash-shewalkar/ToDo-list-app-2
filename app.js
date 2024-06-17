import express from "express";
const app = express()
import mongoose from "mongoose";
const port = 3000

import userRouter from './routes/users.js';
import taskRouter from './routes/tasks.js';

// import { Task } from './models/tasks.js';
// import { User } from "./models/users.js";
//set engine 
// view engine setup

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todoApp");
console.log("Database connected successfully")

app.get('/', (req, res) => {
  
  res.send(`you are on Home page, please use \n1.createtask\n2.creteuser\nFor the url routing.`)
})

app.use('/createtask', taskRouter);
app.use('/createuser', userRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})