require('dotenv').config();
const Controller = require('./base.Controller');

const {StatusCodes: HttpStatus, StatusCodes} = require("http-status-codes");
const createHttpError = require('http-errors');
const {dockerModel}=require('../model/doctor.model');

class OverviewControllerClass extends Controller{

    async getListOfDoctor(req,res,next){
        try {
            const query=await dockerModel.find({},{userFullName:1});
            if(!query) createHttpError.NotFound("there is any list of dockers ");
            return res.status(StatusCodes.OK).json({
                StatusCode:StatusCodes.OK,
                message:'List Of Docker '+query
            })
        } catch (error) {
            next(error)
        }
    }

    async getListOfDoctorWithTime(req,res,next){
        try {
            const query=await dockerModel.find({},{userFullName:1,dayOfWeekFree:1,resume:1});
            if(!query) createHttpError.NotFound("there is any list of dockers ");
            return res.status(StatusCodes.OK).json({
                StatusCode:StatusCodes.OK,
                message:'List Of Docker and Free time And Resume '+query
              
            })
        } catch (error) {
            next(error)
        }
    }


    async getResumeDoctor(req,res,next){
        try {
            const {username}=req.body;

            const query=await dockerModel.find({userFullName:username},{userFullName:1,resume:1});
            if(!query) createHttpError.NotFound("there is any list of dockers ");
            return res.status(StatusCodes.OK).json({
                StatusCode:StatusCodes.OK,
                message:'Docker And Resume '+query
              
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports={
    overviewController:new OverviewControllerClass()
}