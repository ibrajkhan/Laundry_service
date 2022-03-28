const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},  
    phone:{type:Number,required:true},
    state:{type:String,required:true},
    district:{type:String,required:true},
    address:{type:String,required:true},
    pincode:{type:Number,required:true},  
    password:{type:String,required:true},
},{timestamps:true});
    
const User=mongoose.model('Users',userSchema);
module.exports=User;