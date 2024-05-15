const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors=require('cors');
const userModel=require('./db.js');
app.get('/', function (req, res) {
  res.send('Hello World')
})
 app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/company", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful at mongodb ");
  });

  app.get('/getUsers',(req,res)=>{
    userModel.find().then((data)=>{
      res.json(data);
    }).catch((error)=>{
        res.json(error);
    })
  })
app.listen(8000,()=>{
    console.log("app is listening")
})
