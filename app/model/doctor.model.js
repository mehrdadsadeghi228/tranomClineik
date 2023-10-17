const { default: mongoose } = require("mongoose");

const DockerSchema=new mongoose.Schema({
    userFullName:{type:String,require:true,unique:true},
    resume:{type:Object,default:{}},
    dayOfWeekFree:{type:Object},
    dayOfWeekReservation:{type:Object},
    mobile:{type:Number,require:true, unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String ,require:true},
    isMobile:{type:Boolean,default:false},
    Active:{type:Boolean,default:true},
    otpMobile:{type:Object ,default:{
        code:11111,
        expireIn:0
    } },
    
},{
    timestamps:true
});



module.exports={
    dockerModel:mongoose.model("DockerModel",DockerSchema)
};