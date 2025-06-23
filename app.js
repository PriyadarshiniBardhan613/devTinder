const express = require('express');
const app = express();
app.use("/hello", (req, res) => {
    console.log('Server listening....');
    res.send("Hello from server...");
})
app.use("/test", (req, res) => {
    console.log('Server listening....');
    res.send("Test from server...");
})
app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});