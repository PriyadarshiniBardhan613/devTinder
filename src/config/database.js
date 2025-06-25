const mongoose = require("mongoose");
const connectDB = async() => {

 await mongoose.connect(
    "mongodb+srv://bardhanpriyadarshini90:minameizgolu2004A@cluster0.lekoy.mongodb.net/devTinder?retryWrites=true&w=majority&appName=Cluster0",
//{
//useNewUrlParser: true,
//useUnifiedTopology:true,
 //}

 )};
module.exports = connectDB;

  