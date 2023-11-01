require('dotenv').config();
const Controller = require('../base.Controller');
const multer  = require('multer')
const { default: mongoose } = require("mongoose");

const {StatusCodes: HttpStatus} = require("http-status-codes");
const createHttpError = require('http-errors');
const { codeERSali } = require('../../utils/utils');
const { dockerModel, dayModel } = require('../../model/doctor.model');


class managerControllerClass extends Controller{

    async AddDoctor(req,res,next){
        try {
            const {userFullName,email,mobile} =req.body;

            const query=await dockerModel.create({userFullName:userFullName,mobile:mobile,email:email} );
            if(!query) createHttpError.InternalServerError("there was problems for adding Docker ");
            return res.status(HttpStatus.OK).json({
                StatusCode:HttpStatus.OK,
                message:'Adding it was success the id  '+query._id
            });
        } catch (error) {
            next(error)
        }
    }


    async SendsMobileCodeAdmin(req, res, next) {
        try {
            const code = codeERSali();
            const { userName } = req.Admin;
            const resultSearching = await dockerModel.findOne({ userFullName: userName });
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    message: " user name is delete before "
                });
            }

            const updateModel = dockerModel.findOneAndUpdate({ userFullName: userName }, {
                '$set': { 'otpMobile.code': code }
            }).exec();
            res.status(HttpStatus.BAD_REQUEST).json({
                statusCodes: HttpStatus.BAD_REQUEST,
                message: `the code is ${code} for verify mobile id & and user name is ` + updateModel._id + updateModel.userName
            });
        } catch (error) {
            next(error)
        }
    }

    async getVerifyMobileAdmin(req, res, next) {
        try {
            const { username } = req.Admin;
            const { userCode } = req.body;
            const resultSearching = await dockerModel.findOne({ userFullName: username });
            if (!resultSearching) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    message: "user name is not exist "
                });
            }
            if (!resultSearching.Active) {
                return res.status(HttpStatus.BAD_REQUEST).json({
                    statusCodes: HttpStatus.BAD_REQUEST,
                    message: "user name is delete before "
                });
            }
            if (resultSearching.isMobile) {
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    message: " email is verify before"
                });
            }
            if (!userCode) createHttpError.NotImplemented('code receive can Not br empty ');

            if (resultSearching.otpMobile.code == userCode) {
                await dockerModel.findOneAndUpdate({ userFullName: username }, {
                    isMobile: true
                });
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    message: "verify  email is sucess "
                });
            };

            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCodes: HttpStatus.INTERNAL_SERVER_ERROR,
                message: " there was a problem the code is not right or server in issus"
            });

        } catch (error) {
            next(error)
        }
    }

    async manageTimeSet(req,res,next){

       // const {id}=req.user;
     try {
        const { time , id_docker } = req.body;

        const query = await dockerModel.findByIdAndUpdate({_id:id_docker},{
            '$set':{ Time : time }
        });


        if(!query) createHttpError.NotImplemented("there was a problems with the value was input ");
        
        return res.status(HttpStatus.ACCEPTED).json({
            StatusCode:HttpStatus.OK,
            message:query
        });
     } catch (error) {
        next(error)
         }

    }
    async addDays(req,res,next){
        try {
            var {days}=req.body;
            console.warn(days);
            console.warn(typeof days );
        

            const result= dayModel.create({"":days});
          
        if(!result) createHttpError.NotImplemented("there was a problems with the value was input ");
        
        return res.status(HttpStatus.ACCEPTED).json({
            StatusCode:HttpStatus.OK,
            message:result
        });  

        } catch (error) {
            next(error);
        }
    }
    async manageTimeGet(req,res,next){
    try {
      //  const {id_docker}=req.Admin;
      const {id_docker}=req.body;
      const query = await dockerModel.findOne({id_docker},{userFullName:1,mobile:1,Time:1})
        if(!query) createHttpError.NotFound(" docker not found or there is time no still set ");
        return res.status(HttpStatus.ACCEPTED).json({
            StatusCode:HttpStatus.OK,
            message: query
        });
     } catch (error) {
        next(error)
     }
    }

    async checkAndAddTime(req,res,next){
        try {
            const {id_docker,id_user,user_time}=req.body;
            const query = await dockerModel.findOne({id_docker},{userFullName:1,mobile:1,Time:1});
            for(time.day in query.Time.TimeSchema){

                console.log(time.day);
                console.log(query.Time.TimeSchema);


            }
            if(!query) createHttpError.NotFound(" docker not found or there is time no still set ");
            return res.status(HttpStatus.ACCEPTED).json({
                  StatusCode:HttpStatus.OK,
                  message: query
              }); 

        } catch (error) {
            next(error);
        }
    }



    async getTime(req,res,next){
        const  id=req.customer.id;
        const  ud=req.admin.id ;
        const query=await dockerModel.findById(id);
        
    }
}

module.exports={
    managerController:new managerControllerClass()
}