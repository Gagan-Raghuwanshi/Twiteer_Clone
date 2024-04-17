import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    follower:{
        type:Array,
        default:{}
    },
    following:{
        type:Array,
        default:[]
    },
    bookmark:{
        type:Array,
        default:{}
    }

},{timestamps:true})

export const User = mongoose.model("User",userschema);