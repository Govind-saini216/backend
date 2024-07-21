import mongoose from "mongoose";

// user schema means user deatils
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    gmail:{
        type:String,
        require:true,
    }
})

export const User = mongoose.model("User",UserSchema);