const { default: mongoose } = require("mongoose");

const DaySchema = new mongoose.Schema({
    "":{"":{
        reserver:{type:Boolean,require:false},
        idCustomer:{type:mongoose.Types.ObjectId,ref:"PatientModel",require:false}
    }
 }
});

const TimeSchema=new mongoose.Schema({
    nameOfDay:{type:[DaySchema]}

});

const DockerSchema=new mongoose.Schema({
    userFullName:{type:String,require:true, unique:true},
    resume:{type:Object,default:{}},
    Time:{type:[TimeSchema]},
    dayOfWeekReservation:{type:Object},
    mobile:{type:Number, require:true, unique:true},
    email:{type:String, require:true, unique:true},
    password:{type:String , require:true},
    isMobile:{type:Boolean, default:false},
    Active:{type:Boolean, default:true},
    otpMobile:{type:Object ,default:{
        code:11111,
        expireIn:0
    } },
    
},{
    timestamps:true
});



module.exports={
    dockerModel:mongoose.model("dockerModel",DockerSchema),
    dayModel:mongoose.model("dayModel",DaySchema)
};