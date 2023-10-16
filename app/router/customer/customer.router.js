const { CustomerController } = require('../../controllers/customer/customer.controller');

const app=require('express').Router();
app.get("",CustomerController.UserIndex);

module.exports={
    customerRouter:app
}