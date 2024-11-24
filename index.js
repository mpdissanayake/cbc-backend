import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import productRouter from './routes/productRouter.js';

const app = express();

const mongoUrl = "mongodb+srv://admin:123@cluster0.gowpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})


app.use(bodyParser.json())

app.use("/api/students",studentRouter)
app.use("/api/products",productRouter)

app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
