const mongoose= require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        Email:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        Mobile:{
            type:Number,
            required:true
        },
        Department:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        }
});
const user=new mongoose.model("Student", userSchema);
module.exports=user;