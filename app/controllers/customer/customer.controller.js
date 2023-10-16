require('dotenv').config();
const Controller = require('../base.Controller');

const {StatusCodes: HttpStatus} = require("http-status-codes");


class CustomerControllerClass extends Controller{

    UserIndex(req,res,next) {
         return res.status(HttpStatus.OK).json({
            statusCodes:HttpStatus.OK,
            message:'index page User'
        });
    }



}

module.exports={
    CustomerController:new CustomerControllerClass()
}