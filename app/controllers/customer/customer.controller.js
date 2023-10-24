require('dotenv').config();
const { patientModel } = require('../../model/Patient.model');
const { dockerModel } = require('../../model/doctor.model');
const { SignAccessToken, SignRefreshToken } = require('../../utils/checkAuth');
const Controller = require('../base.Controller');

const {StatusCodes: HttpStatus} = require("http-status-codes");


class CustomerAuthControllerClass extends Controller{

    async Signing(req,res,next) {
        try {
            const {userFullName,email,mobile} =req.body;

            const query=await patientModel.create({userFullName:userFullName,mobile:mobile,email:email} );
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
            var location = '/AdminManager/SendsCodeAdmin';
            const code = codeERSali();
            const { userName } = req.Admin;
            const resultSearching = await patientModel.findOne({ userFullName: userName });
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

            const updateModel = patientModel.findOneAndUpdate({ userFullName: userName }, {
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
            const resultSearching = await patientModel.findOne({ userFullName: username });
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
                await patientModel.findOneAndUpdate({ userFullName: username }, {
                    isMobile: true
                });
                const accessToken = await SignAccessToken(resultSearching._id)
                const refreshToken = await SignRefreshToken(resultSearching._id);
                return res.status(HttpStatus.OK).json({
                    statusCodes: HttpStatus.OK,
                    message: "verify  email is success ",
                    tokenAccess: accessToken,
                    RefreshToken: refreshToken,
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



}

module.exports={
    customerAuthController:new CustomerAuthControllerClass()
}