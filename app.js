const express = require("express");
const app = express();
app.use("/user", (req, res, next) => {
    const AuthToken = "xyz";
    if(AuthToken !== "xyz"){
        res.send("Request Denied! ");
    }
    else{
        next();

    }

})
app.get("/user/getAllData", (req, res, next) => {
    res.send("ALL Data Sent");
})
app.get("/user/deleteAllData", (req, res, send) => {
    res.send("Delete All Data");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000....");
});