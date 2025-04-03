import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{type : String, requried:true},
    name:{type : String, requried:true},
    email:{type : String, requried:true,unique:true},
    imageUrl :{type : String, requried:true},
    cartItems : {type : Object, default: {}}
}, {minimize: false})

const User = mongoose.models.user || mongoose.model('user',userSchema)


export default User