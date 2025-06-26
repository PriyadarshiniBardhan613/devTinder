const express = require("express");
const app = express();
const connectDB = require("./src/config/database");
const User = require("./src/models/user.js");
app.use(express.json());
connectDB()
.then(() => {

console.log("Connection established successfully! ");
app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});
})
.catch((err) => {
    console.error("Database connection failed! ")
});
app.post('/signup', async (req, res) => {
    console.log(req.body);
    const newUser = new User(req.body);
       // firstName : "Sachin",
        //lastName: "Tendulkar",
        //emailId: "SachinTendulkar@gmail.com",
        //password : "789abc",
        //age : 21


    //});
    try{
    await newUser.save();
    console.log("User added successfully! ");
    res.status(201).send("User added successfully! ");
    

}catch(err){
    console.error("Error saving to database! ")
    res.status(401).send("User error!");
}});
app.get('/users', async(req, res) => {
    email = req.body.emailId;
    try{
        console.log(email);
        const users = await User.find({emailId: email});
        if(users.length == 0){
            res.status(400).send("User not Available");
        }
        else{
            res.send(users);
        }
    }
    catch(err){
        res.status(400).send("Request Failed!");
    }

    }
)
app.get('/user', async(req, res) => {
     const ID_a = req.body._id;
    try{
        console.log(ID_a);
        const users = User.findById(ID_a);
        if(users.length == 0){
            res.status(400).send("User Not Found");
        }
        else{
            res.send(users);
        }

    }
    catch(err){
        res.status(400).send("Request Failed! ");
    }
})
app.get('/feed', async(req, res) => {
    try{
        const users = await User.find();
        if(users.length == 0){
            res.status(400).send("Users List Empty");
        }
        else{
            res.json(users);

        }

    }
    catch(err){
        res.status(400).send("Request Failed");
    }
})