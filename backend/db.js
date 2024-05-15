  const mongoose= require('mongoose');
   const userSchema = new mongoose.Schema({
    name:String,
    location:String,
    founded_year:Number,
    alexa_ranking:Number
   })

   const userModel= mongoose.model("datas",userSchema);

   module.exports=userModel