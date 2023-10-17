const { default: mongoose } = require("mongoose");

const PatientSchema=new mongoose.Schema({
    userFullName:{type:String,require:true,unique:true},
    SicknessDetails:{type:Object,default:{}},
    timeOfReservation:{type:Object},
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
    patientModel:mongoose.model("PatientModel",PatientSchema)
};