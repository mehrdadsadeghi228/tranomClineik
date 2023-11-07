const { customerAuthController } = require('../../../controllers/customer/customer.controller');

const app=require('express').Router();
app.post("/Signing",customerAuthController.Signing);
app.get("/SendsMobileCodeAdmin",customerAuthController.SendsMobileCodeAdmin);
app.put("/getVerifyMobileAdmin",customerAuthController.getVerifyMobileAdmin);

module.exports={
    customerAuthRouter:app
}
