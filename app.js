const express = require("express");
const app = express();
const {userAuth, AdminAuth} = require("./src/middlewares/index");
app.use("/admin", AdminAuth);
app.get("/user/getAllData", userAuth,  (req, res, next) => {
    res.send("ALL Data Sent");
})
app.get("/user/deleteAllData", userAuth, (req, res, send) => {
    res.send("Delete All Data");
})
app.get("/user/LogIn", (req, res, next) => {
    res.send("User Logged In Successfully...")
})
app.get("/admin/getAllData",  (req, res, next) => {
    res.send("ALL Data Sent by admin!");
})
app.get("/admin/deleteAllData", (req, res, send) => {
    res.send("Delete All Data by Admin!");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});