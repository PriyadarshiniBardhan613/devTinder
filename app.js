const express = require("express");
const app = express();
const connectDB = require("./src/config/database");
const User = require("./src/models/user.js");
app.use(express.json());
connectDB()
.then(() => {
User.syncIndexes()
    .then(() => console.log("Indexes Synced"))
    .catch((err) => console.error("Index  Sync Error", err));

console.log("Connection established successfully! ");
app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});
})
.catch((err) => {
    console.error("Database connection failed! ")
});
app.post('/signup', async (req, res) => {
    const newUser = new User(req.body);
    try{
        await newUser.save();
        res.send("User Added Successfully!")
    }
    catch(err){
        if(err.code === 11000){
            res.status(400).send("Email already sent!");
        }
        res.status(400).send("Error sending the message: " + err.message);
    }
    


    });
   
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
app.get("/user", async(req, res) => {
    const userID = req.body.userId;
    try{
        const users = await User.findById(userID);
        if(!users){
            res.status(400).send("USER NOT FOUND");
        }
        else
        {
            res.status(200).send(users);
        }

    }
    catch(err){
        res.status(400).send("User Not Found");
    }

})
app.delete("/user", async(req, res) => {
    const userID = req.body.userId;
    try{
        const users = await User.findByIdAndDelete(userID);
        if(!users){
            res.status(400).send("USER NOT FOUND");
        }
        else
        {
            res.status(200).send("User Deleted Successfully!");
        }

    }
    catch(err){
        res.status(400).send("User Not Found");
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
app.patch("/user/:userId", async(req, res) => {
    const userId = req.params?.userId;
    const data = req.body;
    try{
        const AllowedUpdates = ["firstName", "lastName", "password", "age", "photoUrl", "about", "skills"];
        const isUpdatesAllowed = Object.keys(data).every((k) => AllowedUpdates.includes(k));
        if(!isUpdatesAllowed){
            throw new error("Update is not allowed!");
        }
        if(data?.skills.length > 10){
            throw new Error("Skills can't be more than 10!");
        }
        const user = await User.findByIdAndUpdate({_id : userId}, data, {returnDocument: "after" , runValidators: true });
        
        console.log(user);
        res.status(200).send("User Updated Successfully!");
    }

    catch(err){
       res.status(400).send("Request Failed!");
    }

})
app.patch("/users", async(req, res) => {
    const email = req.body.emailId;
    const data = req.body;
    try{
        const result = await User.findOneAndUpdate({emailId: email}, data, {new: true});
        if(!result){
            return res.status(400).send("User Not Found!");
        }
        res.status(200).send("User Updated Successfully!");
    }
    catch(err){
        res.status(400).send("User Update Failed! ");
    }
})
