const userAuth = (req, res, next) => {
    console.log("User Getting Checked!....");
     const AuthToken = "xyz";
    if(AuthToken !== "xyz"){
        res.status(401).send("Request Denied! ");
    }
    else{
        next();

    }
};
const AdminAuth = (req, res, next) => {
    console.log("Admin Getting Checked!....");
     const AuthToken = "xyz";
    if(AuthToken !== "xyz"){
        res.status(401).send("Request Denied! ");
    }
    else{
        next();

    }
}
module.exports = {
    userAuth,
    AdminAuth,
};