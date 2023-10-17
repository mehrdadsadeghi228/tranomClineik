const { customerAuthController } = require('../../../controllers/customer/customer.controller');

const app=require('express').Router();
app.post("Signing",customerAuthController.Signing);
app.post("SendsMobileCodeAdmin",customerAuthController.SendsMobileCodeAdmin);
app.get("getVerifyMobileAdmin",customerAuthController.getVerifyMobileAdmin);

module.exports={
    customerAuthRouter:app
}
