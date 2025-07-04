const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4, 
        maxLength: 100
    },
    lastName: {
        type: String
    },
    emailId : {
        type: String,
        required: true,
        lowercase: true,
        trim: true
        
    },
    password: {
        type: String,
        required: true,
    },
    age : {
        type: Number
    },
    gender : {
        type : String,
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Invalid Gender!");
        }
            

        },
   },
   photoUrl : {
    type : String,
    default: "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg"
   },
   about : {
    type: String,
    default: "This is a default about of the user..."
   },
   skills: {
    type: [String]
   },
  },
   {
    timestamps: true,
   }
);
userSchema.index({emailId:1}, {unique : true});
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
