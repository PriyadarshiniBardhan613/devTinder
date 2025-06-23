const express = require('express');
const app = express();
//app.use("/", (req, res) => {
    //console.log('Server listening....');
    //res.send("Basic");
//})
//app.use("/hello", (req, res) => {
   // console.log('Server listening....');
    //res.send("Hello from server...");
//})
app.delete("/test", (req, res) => {
    console.log('Server listening....');
    res.send("Data Deleted...");
})
app.get("/test", (req, res) => {
    console.log('Server listening....');
    res.send("Test from server...");
})
app.post("/test", (req, res) => {
    console.log('Databse recorded');
    res.send("Data Commited to database");
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});